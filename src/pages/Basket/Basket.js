import React, { useEffect } from 'react';
import './Basket.scss';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { getCartAsync,clearCartAsync } from '../../redux/actions/cart';
import BasketProduct from './BasketProduct/BasketProduct';
import Footer from '../../components/Footer/Footer';
import EmptyBasket from './EmptyBasket/EmptyBasket';
import TotalPrice from '../../components/TotalPrice/TotalPrice';
import MoonLoader from "react-spinners/MoonLoader";



function Basket() {

    const dispatch = useDispatch();

    const cart = useSelector(state => {
        return state.cart;
    });
    const cartProducts = cart?.cart?.line_items;
console.log(cartProducts)
    useEffect(() => {
        dispatch(getCartAsync());
        window.scrollTo(0, 0);
    }, []);

    function clearBasket() {
        dispatch(clearCartAsync());
    }


    return (
        <div className='basket'>
            <Header />
            <Navbar borderNone='true' />
            <div className="basketDetail">
                <div className="container">

                    {cart.loading ? <div className="spinner">
                        <MoonLoader color={'#2DD06E'} loading={cart.loading} size={100} />
                    </div> :
                        <>
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

                                            <div className="clearBasket">
                                                <button onClick={clearBasket}>Səbəti Təmizlə</button>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <TotalPrice total={cart?.cart?.subtotal?.formatted} />
                                        </div>
                                    </div>
                            }

                        </>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Basket