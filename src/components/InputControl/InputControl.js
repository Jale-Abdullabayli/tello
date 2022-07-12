import React, { useState, useEffect } from 'react';
import './InputControl.scss';
import eye from '../../images/eye.svg'


function InputControl({setIsSubmit,isSubmit, title, type, placeholder, name, setErrors, textArea, value, errors, setUserInfo }) {

    const [inputValue, setInputValue] = useState('');
    console.log(value)
    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
        console.log(value);
        setInputValue(value)
    }, []);

    useEffect(() => {
        console.log(inputValue);
    }, [inputValue]);
    useEffect(() => {
        let userObj = {}
        userObj[name] = inputValue;
        setUserInfo(prev => ({ ...prev, ...userObj }));
        if (!firstRender || isSubmit) {
            if (inputValue === '' || inputValue === undefined) {
                let errorObj = {};
                errorObj[name] = `${title} sahəsi doldurulmalıdır`;
                setErrors(prev => ({ ...prev, ...errorObj }))
            }
            else {
                if (name in errors) {
                    let tempErr = errors;
                    delete tempErr[name];
                    setErrors({ ...tempErr });
                }
            }
        }

        setFirstRender(false);
    }, [inputValue,isSubmit]);

    useEffect(() => {
        setIsSubmit(false);
    }, [inputValue]);


    // useEffect(() => {
    //     console.log('info');
    //     console.log(userInfo)
    // }, [userInfo]);

    // useEffect(() => {
    //     console.log('err');
    //     console.log(errors)
    // }, [errors]);
    return (
        <div className='inputControl'>
            <h3 className='label'>{title}</h3>
            <div className="input">
                {!textArea ?
                    <>
                        <input value={value} onChange={(e) => setInputValue(e.target.value)} name={name} type={type} placeholder={placeholder} />
                    </> :
                    <textarea name={name} placeholder={placeholder}></textarea>
                }
                <div className={`${errors[name] ? 'show' : ''} error`}>{errors[name]}</div>
            </div>
        </div>
    )
}

export default InputControl