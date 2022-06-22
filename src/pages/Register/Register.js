import React from 'react'
import RegistrLogin from '../../components/RegistrLogin/RegistrLogin';
import InputControl from '../../components/InputControl/InputControl';
import { Link } from 'react-router-dom';
import './Register.scss';

function Register() {
    return (
        <div className='register'>
            <RegistrLogin title='Qeydiyyat' imgText='Artıq hesabınız var? ' linkText='Daxil olun'>
                <InputControl title='Ad, Soyad' type='text' placeholder='Ad və soyadınızı daxil edin' />
                <InputControl title='E-mail' type='email' placeholder='nümunə@gmail.com' />
                <InputControl title='Mobil nömrə' type='tel' placeholder='077 - 000 - 00 - 00' />
                <InputControl title='Şifrə' type='password' placeholder='Şifrənizi daxil edin' />
                <div className="termsAndConditions">
                    <div className="checkBox"></div>
                    <div className="agree">
                        <Link to=''>İstifadəçi şərtləri</Link>
                        <span>ilə razıyam</span>
                    </div>
                </div>
            </RegistrLogin>
        </div>
    )
}

export default Register