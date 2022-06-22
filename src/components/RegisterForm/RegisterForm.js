import React from 'react'
import facebook from '../../images/facebook.svg';
import google from '../../images/google.svg';
import './RegisterForm.scss';

function RegisterForm({ title, children }) {
    return (
        <div className='registerForm'>
            <h3 className='title'>{title}</h3>
            <div className="registerWith">
                <div className="facebook">
                    <div className="imgContainer">
                        <img src={facebook} alt='facebook' />

                    </div>
                    <span>Facebook ilə</span>
                </div>
                <div className="google">
                    <div className="imgContainer">
                        <img src={google} alt='google' />

                    </div>

                    <span>Google ilə</span>
                </div>
            </div>
            <div className="or">
                və ya
            </div>
            <form>
                {children}
                <button type='submit'>{title}</button>
            </form>

        </div>
    )
}

export default RegisterForm