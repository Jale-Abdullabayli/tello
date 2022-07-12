import React, { useEffect, useState } from 'react';
import './Profile.scss';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet, Link } from 'react-router-dom';
import userIcon from '../../images/userIcon.png';
import favoriteIcon from '../../images/favoriteIcon.png';
import basketIcon from '../../images/basketIcon.png';
import locationIcon from '../../images/locationIcon.svg';
import exitIcon from '../../images/exitIcon.svg';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { commerce } from '../../commerce';
import { useNavigate } from "react-router-dom";


function Profile() {

    const [activeTab, setActiveTab] = useState('order-list');
    const location = useLocation();
    let navigate = useNavigate();

    function logOut(){
        commerce.customer.logout();
    }

    useEffect(() => {
        setActiveTab(location.pathname.slice(location.pathname.lastIndexOf("/") + 1, location.pathname.length))
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <div className='profile'>
            <Header />
            <Navbar borderNone='true' />
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="profile">
                                <div className="title">Profilim</div>
                                <div className="links">
                                    <Link to='/profile/order-list' className={activeTab === 'order-list' || activeTab === 'order-detail' ? 'active' : ''}>
                                        <img src={basketIcon} alt="basketIcon" />
                                        <h4>Sifarişlərim</h4>
                                    </Link>
                                    <Link to=''>
                                        <img src={favoriteIcon} alt="favoriteIcon" />
                                        <h4>Favorilərim</h4>
                                    </Link>
                                    <Link to='/profile/user-info' className={activeTab === 'user-info' ? 'active' : ''}>
                                        <img src={userIcon} alt="userIcon" />
                                        <h4>Şəxsi məlumatlar</h4>
                                    </Link>
                                    <Link to=''>
                                        <img src={locationIcon} alt="locationIcon" />
                                        <h4>Çatdırılma ünvanı</h4>
                                    </Link>
                                    <Link to='/login' onClick={logOut}>
                                        <img src={exitIcon} alt="exitIcon" />
                                        <h4>Çıxış</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Profile