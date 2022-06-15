import React, { useEffect } from 'react'
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


function ProductDetail() {

    let { productId } = useParams();
    const dispatch = useDispatch();
    const productDetail = useSelector(state => {
        console.log(state.productById.product)
        return state.productById;
    });

    useEffect(() => {
        dispatch(getProductByIdAsync(productId));
    }, []);

    const product = productDetail.product;
    return (
        <div className='productDetail'>
            <Header />
            <Navbar />
                <div className="container">
            {productDetail.loading ? 'Loading...' :

                    <div className="row productDetailRow">
                        <div className="col-md-6 leftCol">
                            <div className="imgContainer">
                                <img src={product.image && product.image.url} alt="productImg" />
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
                                <span className='decrement'>-</span>
                                <div className="basketCount">1</div>
                                <span className='increment'>+</span>
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