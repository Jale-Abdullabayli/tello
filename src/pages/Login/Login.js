import React, { useEffect, useState } from 'react'
import RegistrLogin from '../../components/RegistrLogin/RegistrLogin';
import './Login.scss';
import InputControl from '../../components/InputControl/InputControl';
import { Link } from 'react-router-dom';



function Login({setIsLoggedIn}) {

    const [errors, setErrors] = useState({});
    const [userInfo, setUserInfo] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
      console.log(errors)
    }, [errors]);
    return (
        <div className='login'>
            <RegistrLogin setIsLoggedIn={setIsLoggedIn} isSubmit={isSubmit} setIsSubmit={setIsSubmit} userInfo={userInfo}  errors={errors} permalink='/register' title='Daxil ol' imgText='Hesabınız yoxdur?' linkText='Qeydiyyatdan keçin'>
                <InputControl isSubmit={isSubmit} setIsSubmit={setIsSubmit} userInfo={userInfo} setErrors={setErrors} setUserInfo={setUserInfo} errors={errors} title='E-mail' name='email' type='email' placeholder='nümunə@gmail.com' />
                {/* <InputControl title='Şifrə' type='password' placeholder='Şifrənizi daxil edin' /> */}
                {/* <Link to='' className='forgotPassword'>Şifrəni unutmusunuz?</Link> */}
            </RegistrLogin>
        </div>
    )
}

export default Login