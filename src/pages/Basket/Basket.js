import React, { useEffect } from 'react';
import './Basket.scss';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { getTopSellingsAsync } from '../../redux/actions/product';
import BasketProduct from './BasketProduct/BasketProduct';
import aznSymbol from '../../images/aznSymbol.svg';
import Footer from '../../components/Footer/Footer';
import EmptyBasket from './EmptyBasket/EmptyBasket';


function Basket() {

    const dispatch = useDispatch();

    const topSellings = [];
    // const topSellings = useSelector(state => state.topSellings);


    useEffect(() => {
        dispatch(getTopSellingsAsync());
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='basket'>
            <Header />
            <Navbar borderNone='true' />
            <div className="basketDetail">
                <div className="container">
                    <h3 className="basketCountAll">
                        Səbət (5 məhsul)
                    </h3>
                    {
                        topSellings.length === 0 ? <EmptyBasket /> :
                            <div className="row">
                                <div className="col-md-8">
                                    {topSellings.products.map(product => (
                                        <BasketProduct key={product.id} product={product} />
                                    ))}
                                </div>
                                <div className="col-md-4">
                                    <div className="total">
                                        <h3>Ümumi</h3>
                                        <div className="properties">
                                            <div className="property">
                                                <div className="key">Məbləğ </div>
                                                <div className="value"><span>66.50</span> <img src={aznSymbol} alt="azn" /></div>
                                            </div>
                                            <div className="property">
                                                <div className="key">Çatdırılma</div>
                                                <div className="value"><span>66.50</span> <img src={aznSymbol} alt="azn" /></div>
                                            </div>
                                            <div className="property">
                                                <div className="key">Hədiyyə paketi</div>
                                                <div className="value"><span>66.50</span> <img src={aznSymbol} alt="azn" /></div>
                                            </div>
                                            <div className="property">
                                                <div className="key">Promo kod</div>
                                                <div className="value"><span>66.50</span> <img src={aznSymbol} alt="azn" /></div>
                                            </div>
                                        </div>
                                        <div className="line"></div>
                                        <div className="sum">
                                            <div className="property">
                                                <div className="key">Cəmi</div>
                                                <div className="value"><span>66.50</span> <img src={aznSymbol} alt="azn" /></div>
                                            </div>
                                        </div>
                                    </div>
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