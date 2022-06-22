import React, { useEffect, useState } from 'react'
import './ProductDetail.scss';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductByIdAsync } from '../../redux/actions/product';
import starFull from '../../images/starFull.png'
import star from '../../images/star.png'
import aznSymbol from '../../images/aznSymbol.svg';
import basket from '../../images/basket.png';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 



function ProductDetail() {

    let [basketCount, setbasketCount] = useState(1);
    let { productId } = useParams();
    const dispatch = useDispatch();
    const productDetail = useSelector(state => {
        return state.productById;
    });
    const product = productDetail.product;

    useEffect(() => {
        dispatch(getProductByIdAsync(productId));
        window.scrollTo(0, 0);
    }, []);

  
    function decrementBasketCount() {
        if (basketCount !== 1) setbasketCount(basketCount--);
    }

    function incrementBasketCount() {
        setbasketCount(basketCount++);
    }

    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img src={product.assets[i].url} />
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
                {productDetail.loading ? 'Loading...' :

                    <div className="row productDetailRow">
                        <div className="col-md-6 leftCol">
                        <div className="slider">
                        <Slider {...settings}>
                                {
                                    product.assets && product.assets.map(el => (
                                        <div>
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
                            <h4 className='price'><span>{product.price && product.price.formatted}</span> <img src={aznSymbol} alt="azn" /></h4>
                            <div className="color">
                                <span className='optionTitle'>Rəng:</span>
                                {product.variant_groups && product.variant_groups[0] && product.variant_groups[0].options.map(option => <div className='option colorOption' style={{ backgroundColor: option.name }}></div>)}
                            </div>
                            <div className="size">
                                <span className='optionTitle'>Yaddaş:</span>
                                {product.variant_groups && product.variant_groups[1] && product.variant_groups[1].options.map(option => <div className='option sizeOption'>{option.name}</div>)}
                            </div>
                            <div className="count">
                                <span className='decrement' onClick={decrementBasketCount}>-</span>
                                <div className="basketCount">{basketCount}</div>
                                <span className='increment' onClick={incrementBasketCount}>+</span>
                            </div>
                            <button className="addBasketBtn">
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