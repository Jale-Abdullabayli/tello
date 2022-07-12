import React, { useState, useEffect } from 'react'
import RegistrLogin from '../../components/RegistrLogin/RegistrLogin';
import InputControl from '../../components/InputControl/InputControl';
import { Link } from 'react-router-dom';
import './Register.scss';
import checkboxIcon from '../../images/checkboxIcon.png';


function Register() {
    const [checked, setChecked] = useState(false);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='register'>
            <RegistrLogin  permalink='/login' title='Qeydiyyat' imgText='Artıq hesabınız var? ' linkText='Daxil olun'>
                <InputControl  title='Ad' name='firstname' type='text' placeholder='Adınızı daxil edin' />
                <InputControl  title='Soyad' name='lastname' type='text' placeholder='Soyadınızı daxil edin' />
                <InputControl  title='E-mail' name='email' type='email' placeholder='nümunə@gmail.com' />
                <InputControl  title='Mobil nömrə' name='phone' type='tel' placeholder='077 - 000 - 00 - 00' />
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