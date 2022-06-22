import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import './Login.scss';
import { Link } from 'react-router-dom';
import RegisterImages from '../../components/RegisterImages/RegisterImages';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import InputControl from '../../components/InputControl/InputControl';

function Login() {
    return (
        <div className='login'>
            <Header />
            <Navbar />
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <RegisterForm title='Daxil ol' >
                                <InputControl title='E-mail' type='email' placeholder='nümunə@gmail.com' />
                                <InputControl title='Şifrə' type='password' placeholder='Şifrənizi daxil edin' />
                                <Link to='' className='forgotPassword'>Şifrəni unutmusunuz?</Link>
                            </RegisterForm>
                        </div>
                        <div className="col-md-6 offset-2">
                            <RegisterImages title='Hesabınız yoxdur?' link='Qeydiyyatdan keçin' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login