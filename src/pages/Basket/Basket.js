import React, { useEffect, useState } from 'react';
import './Basket.scss';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { getCartAsync } from '../../redux/actions/cart';
import BasketProduct from './BasketProduct/BasketProduct';
import Footer from '../../components/Footer/Footer';
import EmptyBasket from './EmptyBasket/EmptyBasket';
import TotalPrice from '../../components/TotalPrice/TotalPrice';


function Basket() {

    const dispatch = useDispatch();

    const cart = useSelector(state => {
        return state.cart;
    });

    const cartProducts = cart?.cart?.line_items;

    useEffect(() => {
        dispatch(getCartAsync());
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='basket'>
            <Header />
            <Navbar borderNone='true' />
            <div className="basketDetail">
                <div className="container">
                    <h3 className="basketCountAll">
                        Səbət ({cart?.cart?.total_items} məhsul)
                    </h3>
                    {
                        cartProducts && cartProducts.length === 0 ? <EmptyBasket /> :
                            <div className="row">
                                <div className="col-md-8">
                                    {cartProducts && cartProducts.map(product => (
                                        <BasketProduct key={product.id} product={product} />
                                    ))}
                                </div>
                                <div className="col-md-4">
                                   <TotalPrice total={cart?.cart?.subtotal?.formatted}/>
                                </div>
                            </div>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Basket