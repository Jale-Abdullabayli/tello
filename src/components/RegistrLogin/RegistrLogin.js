import React from 'react';
import './RegistrLogin.scss';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import RegisterImages from '../RegisterImages/RegisterImages';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegistrLogin({children,title,imgText,linkText}) {
    return (
        <div className='registrLogin'>
            <Header />
            <Navbar />
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <RegisterForm title={title} >
                               {children}
                            </RegisterForm>
                        </div>
                        <div className="col-md-6 offset-md-2">
                            <RegisterImages title={imgText} link={linkText} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RegistrLogin