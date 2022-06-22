import React from 'react';
import './RegisterImages.scss';
import login from '../../images/login.svg';
import loginGrid from '../../images/loginGrid.svg';
import { Link } from 'react-router-dom';

function RegisterImages({title,link}) {
    return (
        <div className='registerImages'>
            <div className="imgContainer">
                <img className='mainImg' src={login} alt='login' />
                <img className='dots' src={loginGrid} alt='loginGrid' />
            </div>
            <div className="register">
                <span>{title}</span>
                <Link to='/register'>{link}</Link>
            </div>
        </div>
    )
}

export default RegisterImages