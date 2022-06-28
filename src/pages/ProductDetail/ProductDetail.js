import React, { useEffect, useState } from 'react'
import './ProductDetail.scss';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductByIdAsync } from '../../redux/actions/product';
import { addToCartAsync } from '../../redux/actions/cart';
import starFull from '../../images/starFull.png'
import star from '../../images/star.png'
import aznSymbol from '../../images/aznSymbol.svg';
import basket from '../../images/basket.png';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MoonLoader from "react-spinners/MoonLoader";




function ProductDetail() {

    let [basketCount, setbasketCount] = useState(1);
    const [activeColorIndex, setActiveColorIndex] = useState(0);
    const [activeSizeIndex, setActiveSizeIndex] = useState(0);
    let { productId } = useParams();
    const dispatch = useDispatch();
    const productDetail = useSelector(state => {
        return state.productById;
    });
    const product = productDetail.product;
    const sizeVariantId = product?.variant_groups?.[1]?.options[activeSizeIndex]?.id;
    const colorVariantId = product?.variant_groups?.[0]?.options[activeColorIndex]?.id;
    const sizeGroupId = product?.variant_groups?.[1]?.id;
    const colorGroupId = product?.variant_groups?.[0]?.id;
    const sliderImages = product?.variant_groups?.[0]?.options[activeColorIndex]?.assets.map(id => product.assets.find(el => el.id === id));
    const productPrice = Number(product?.price?.raw) + Number(product?.variant_groups?.[1]?.options[activeSizeIndex]?.price?.raw);

    useEffect(() => {
        dispatch(getProductByIdAsync(productId));
        window.scrollTo(0, 0);
    }, []);

    function addToCart(productId) {
        alert('product added to cart');
        dispatch(addToCartAsync({ productId, basketCount, sizeGroupId, sizeVariantId, colorGroupId, colorVariantId }));
    }

    function decrementBasketCount() {
        if (basketCount !== 1) setbasketCount(basketCount - 1);
    }

    function incrementBasketCount() {
        setbasketCount(basketCount + 1);
    }

    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img src={sliderImages[i].url} alt='sliderImg' />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className='productDetail'>
            <Header />
            <Navbar />
            <div className="container">
                {productDetail.loading ? <div className="spinner">
                <MoonLoader color={'#2DD06E'} loading={productDetail.loading} size={100} />
                </div> :

                    <div className="row productDetailRow">
                        <div className="col-md-6 leftCol">
                            <div className="slider">
                                <Slider {...settings}>
                                    {
                                        sliderImages && sliderImages.map((el, index) => (
                                            <div key={index}>
                                                <img src={el.url} alt='productImg' />
                                            </div>
                                        ))
                                    }

                                </Slider>
                            </div>
                        </div>
                        <div className="col-md-6 rightCol">
                            <h3 className='name'>{product.name}{product.variant_groups && product.variant_groups[1] && `, ${product.variant_groups[1].options[0].name}`}{product.variant_groups && product.variant_groups[0] && `, ${product.variant_groups[0].options[0].name}`}</h3>
                            <div className="rating">
                                <img src={starFull} alt="star" />
                                <img src={starFull} alt="star" />
                                <img src={starFull} alt="star" />
                                <img src={starFull} alt="star" />
                                <img src={star} alt="star" />
                            </div>
                            <h4 className='price'><span>{productPrice}</span> <img src={aznSymbol} alt="azn" /></h4>
                            <div className="color">
                                <span className='optionTitle'>Rəng:</span>
                                {product.variant_groups && product.variant_groups[0] && product.variant_groups[0].options.map((option, index) => <div key={index} onClick={() => setActiveColorIndex(index)} className={`${activeColorIndex === index ? 'active' : ''} option colorOption`} style={{ backgroundColor: option.name }}></div>)}
                            </div>
                            <div className="size">
                                <span className='optionTitle'>Yaddaş:</span>
                                {product.variant_groups && product.variant_groups[1] && product.variant_groups[1].options.map((option, index) => <div key={index} onClick={() => setActiveSizeIndex(index)} className={`${activeSizeIndex === index ? 'active' : ''} option sizeOption`}>{option.name}</div>)}
                            </div>
                            <div className="count">
                                <span className='decrement' onClick={decrementBasketCount}>-</span>
                                <div className="basketCount">{basketCount}</div>
                                <span className='increment' onClick={incrementBasketCount}>+</span>
                            </div>
                            <button onClick={() => addToCart(product.id)} className="addBasketBtn">
                                <img src={basket} alt='addBasket' />
                                Səbətə at
                            </button>
                        </div>
                    </div>
                }
            </div>

            <Footer />
        </div>
    )
}

export default ProductDetail