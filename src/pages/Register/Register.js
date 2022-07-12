import React, { useState, useEffect } from 'react'
import RegistrLogin from '../../components/RegistrLogin/RegistrLogin';
import InputControl from '../../components/InputControl/InputControl';
import { Link } from 'react-router-dom';
import './Register.scss';
import checkboxIcon from '../../images/checkboxIcon.png';


function Register() {
    const [checked, setChecked] = useState(false);

    const [errors, setErrors] = useState({});
    const [userInfo, setUserInfo] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='register'>
            <RegistrLogin isSubmit={isSubmit} setIsSubmit={setIsSubmit} userInfo={userInfo} errors={errors} permalink='/login' title='Qeydiyyat' imgText='Artıq hesabınız var? ' linkText='Daxil olun'>
                <InputControl setIsSubmit={setIsSubmit} isSubmit={isSubmit} userInfo={userInfo} setErrors={setErrors} setUserInfo={setUserInfo} errors={errors} title='Ad' name='firstname' type='text' placeholder='Adınızı daxil edin' />
                <InputControl setIsSubmit={setIsSubmit} isSubmit={isSubmit} userInfo={userInfo} setErrors={setErrors} setUserInfo={setUserInfo} errors={errors} title='Soyad' name='lastname' type='text' placeholder='Soyadınızı daxil edin' />
                <InputControl setIsSubmit={setIsSubmit} isSubmit={isSubmit} userInfo={userInfo} setErrors={setErrors} setUserInfo={setUserInfo} errors={errors} title='E-mail' name='email' type='email' placeholder='nümunə@gmail.com' />
                <InputControl setIsSubmit={setIsSubmit} isSubmit={isSubmit} userInfo={userInfo} setErrors={setErrors} setUserInfo={setUserInfo} errors={errors} title='Mobil nömrə' name='phone' type='tel' placeholder='077 - 000 - 00 - 00' />
                {/* <InputControl isSubmit={isSubmit} title='Şifrə' type='password' placeholder='Şifrənizi daxil edin' /> */}
                <div className="termsAndConditions">
                    <div onClick={() => setChecked(!checked)} className={`${checked && 'checked'} checkbox`} >
                        {checked && <img src={checkboxIcon} alt="checkboxIcon" />}
                    </div>
                    <div className="checkBox"></div>
                    <div className="agree">
                        <Link to=''>İstifadəçi şərtləri</Link>
                        <span>ilə razıyam</span>
                    </div>
                </div>
            </RegistrLogin >
        </div >
    )
}

export default Register