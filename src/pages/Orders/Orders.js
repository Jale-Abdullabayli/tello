import React from 'react';
import './Orders.scss';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet,Link } from 'react-router-dom';
import userIcon from '../../images/userIcon.png';
import favoriteIcon from '../../images/favoriteIcon.png';
import basketIcon from '../../images/basketIcon.png';
import locationIcon from '../../images/locationIcon.svg';
import exitIcon from '../../images/exitIcon.svg';


function Orders() {
    return (
        <div className='orders'>
            <Header />
            <Navbar borderNone='true' />
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="profile">
                                <div className="title">Profilim</div>
                                <div className="links">
                                    <Link to='' className='active'>
                                        <img src={basketIcon} alt="basketIcon" />
                                        <h4>Sifarişlərim</h4>
                                    </Link>
                                    <Link to=''>
                                        <img src={favoriteIcon} alt="favoriteIcon" />
                                        <h4>Favorilərim</h4>
                                    </Link>
                                    <Link to=''>
                                        <img src={userIcon} alt="userIcon" />
                                        <h4>Şəxsi məlumatlar</h4>
                                    </Link>
                                    <Link to=''>
                                        <img src={locationIcon} alt="locationIcon" />
                                        <h4>Çatdırılma ünvanı</h4>
                                    </Link>
                                    <Link to=''>
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
        </div>
    )
}

export default Orders