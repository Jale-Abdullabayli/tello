import React, { useState, useEffect } from 'react'
import './Home.scss';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Products from '../../components/Products/Products'
import Cooperation from '../../components/Cooperation/Cooperation';
import Footer from '../../components/Footer/Footer';
import Info from '../../components/Info/Info';
import { commerce } from '../../commerce';
import Category from '../../components/Category/Category';
import { Link } from 'react-router-dom';
import advertise1 from '../../images/advertise1.png';
import advertise2 from '../../images/advertise2.png';


function Home() {
    const [topSellings, setTopSellings] = useState([]);
    const [news, setNews] = useState([]);
    const [accessories, setAccessories] = useState([]);
    const [accessoryCategory, setAccessoryCategory] = useState({});
    const [telephoneCategory, setTelephoneCategory] = useState({});
    const [smartWatchCategory, setSmartWatchCategory] = useState({});
    const [menuShow, setMenuShow] = useState(false);

    useEffect(() => {
        console.log(menuShow);
    }, [menuShow]);
    async function getTopSellings() {
        commerce.products.list({
            category_slug: ['ox-sat-lanlar'],
        }).then(response => setTopSellings(response.data));
    }

    async function getNews() {
        commerce.products.list({
            category_slug: ['yeni-m-hsullar','telefonlar'],
        }).then(response => setNews(response.data));
    }

    async function getAccessories() {
        commerce.products.list({
            category_slug: ['aksesuarlar','yeni-m-hsullar'],
        }).then(response => setAccessories(response.data));
    }

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
        getTopSellings();
        getNews();
        getAccessories();
        getAccessoryCategory();
        getTelephoneCategory();
        getSmartWatchCategory();
    }, []);
    return (
        <div className='home'>
            <Header menuShow={menuShow} setMenuShow={setMenuShow}/>
            <Navbar  menuShow={menuShow}/>
            <Banner />
            <Products title='Ən çox satılan məhsullar' products={topSellings} />
            <Products title='Yeni gələn məhsullar' products={news} />
            <div className="advertise">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-3 mb-md-0">
                            <Link to=''>
                                <img src={advertise1} alt='advertise'/>
                            </Link>
                        </div>
                        <div className="col-md-6">
                        <Link to=''>
                                <img src={advertise2} alt='advertise'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Products title='Yeni gələn aksessuarlar' products={accessories} />
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