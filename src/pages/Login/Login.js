import React from 'react'
import RegistrLogin from '../../components/RegistrLogin/RegistrLogin';
import './Login.scss';
import InputControl from '../../components/InputControl/InputControl';
import { Link } from 'react-router-dom';



function Login() {
    return (
        <div className='login'>
            <RegistrLogin title='Daxil ol' imgText='Hesabınız yoxdur?' linkText='Qeydiyyatdan keçin'>
                <InputControl title='E-mail' type='email' placeholder='nümunə@gmail.com' />
                <InputControl title='Şifrə' type='password' placeholder='Şifrənizi daxil edin' />
                <Link to='' className='forgotPassword'>Şifrəni unutmusunuz?</Link>
            </RegistrLogin>
        </div>
    )
}

export default Login