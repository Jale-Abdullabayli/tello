import React from 'react';
import './InputControl.scss';
import eye from '../../images/eye.svg'

function InputControl({ title, type, placeholder }) {
    return (
        <div className='inputControl'>
            <h3 className='label'>{title}</h3>
            <div className="input">
                <input className={type === 'password' ? 'passwordInput' : ' '} type={type} placeholder={placeholder} />
                {
                    type === 'password' && <img className='eye' src={eye} alt="eye" />

                }
            </div>
        </div>
    )
}

export default InputControl