import React, { useState, useEffect } from 'react'
import './Home.scss';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Banner from './Banner/Banner'
import Products from '../../components/Products/Products'
import Cooperation from './Cooperation/Cooperation';
import Footer from '../../components/Footer/Footer';
import Info from './Info/Info';
import { commerce } from '../../commerce';
import Category from './Category/Category';
import { Link } from 'react-router-dom';
import advertise1 from '../../images/advertise1.png';
import advertise2 from '../../images/advertise2.png';
import { useDispatch, useSelector } from 'react-redux';
import { getTopSellingsAsync,getNewsAsync,getAccessoriesAsync } from '../../redux/actions/product';

function Home() {
    const [accessoryCategory, setAccessoryCategory] = useState({});
    const [telephoneCategory, setTelephoneCategory] = useState({});
    const [smartWatchCategory, setSmartWatchCategory] = useState({});

    const dispatch = useDispatch();
    const {topSellings,news,accessories} = useSelector(state => state);


    async function getAccessoryCategory() {
        commerce.categories.retrieve('aksesuarlar', { type: 'slug' })
            .then((category) => setAccessoryCategory(category));
    }

    async function getTelephoneCategory() {
        commerce.categories.retrieve('telefonlar', { type: 'slug' })
            .then((category) => setTelephoneCategory(category));
    }
    async function getSmartWatchCategory() {
        commerce.categories.retrieve('smart-saat', { type: 'slug' })
            .then((category) => setSmartWatchCategory(category));
    }

    useEffect(() => {
        dispatch(getTopSellingsAsync());
        dispatch(getNewsAsync());
        dispatch(getAccessoriesAsync());
        
        getAccessoryCategory();
        getTelephoneCategory();
        getSmartWatchCategory();
    }, []);
    return (
        <div className='home'>
            <Header/>
            <Navbar borderNone='true'/>
            <Banner />
            <Products title='Ən çox satılan məhsullar' products={topSellings.products} />
            <Products title='Yeni gələn məhsullar' products={news.products} />
            <div className="advertise">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-3 mb-md-0">
                            <Link to=''>
                                <img src={advertise1} alt='advertise' />
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link to=''>
                                <img src={advertise2} alt='advertise' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Products title='Yeni gələn aksessuarlar' products={accessories.products} />
            <div className="categories">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-3 mb-md-0">
                            <Category category={telephoneCategory} directionColumn={true} />
                        </div>
                        <div className="col-md-6 rightCol" >
                            <Category category={smartWatchCategory} />
                            <Category category={accessoryCategory} />
                        </div>
                    </div>
                </div>
            </div>
            <Info />
            <Cooperation />
            <Footer />
        </div>
    )
}

export default Home