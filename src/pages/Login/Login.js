import React, { useEffect, useState } from 'react'
import RegistrLogin from '../../components/RegistrLogin/RegistrLogin';
import './Login.scss';
import InputControl from '../../components/InputControl/InputControl';
import { Link } from 'react-router-dom';



function Login() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='login'>
            <RegistrLogin permalink='/register' title='Daxil ol' imgText='Hesabınız yoxdur?' linkText='Qeydiyyatdan keçin'>
                <InputControl title='E-mail' name='email' type='email' placeholder='nümunə@gmail.com' />
                {/* <InputControl title='Şifrə' type='password' placeholder='Şifrənizi daxil edin' /> */}
                {/* <Link to='' className='forgotPassword'>Şifrəni unutmusunuz?</Link> */}
            </RegistrLogin>
        </div>
    )
}

export default Login