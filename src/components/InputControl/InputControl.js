import React from 'react';
import './InputControl.scss';
import eye from '../../images/eye.svg'

function InputControl({ title, type, placeholder, name, textArea }) {
    return (
        <div className='inputControl'>
            <h3 className='label'>{title}</h3>
            <div className="input">
                {!textArea ?
                    <>
                        <input required name={name} className={type === 'password' ? 'passwordInput' : ' '} type={type} placeholder={placeholder} />
                        {
                            type === 'password' && <img className='eye' src={eye} alt="eye" />

                        }
                    </>  :
                    <textarea name={name} placeholder={placeholder}></textarea>  
            }

            </div>
        </div>
    )
}

export default InputControl