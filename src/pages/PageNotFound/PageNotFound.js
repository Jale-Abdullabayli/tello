import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import PageNotFoundImg from '../../images/404.png';
import './PageNotFound.scss';

function PageNotFound() {
    return (
        <div className='pageNotFound'>
            <Header />
            <Navbar />
            <div className="pageNotFoundMain">
                <img src={PageNotFoundImg} alt="PageNotFoundImg" />
                <Link to='/'>Ana səhifəyə keçid</Link>
            </div>
            <Footer />

        </div>
    )
}

export default PageNotFound