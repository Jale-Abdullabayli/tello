import React, { useState, useEffect } from 'react'
import './PaymentOptions.scss';
import tick from '../../../images/tick.svg';

function PaymentOptions({ title, children, btnText, paymentInfo, address,type }) {

    const [isDone, setIsDone] = useState(false);
    const [showOption, setShowOption] = useState(false);
    const [optionStatus, setOptionStatus] = useState('disable');

    function formSubmit(e) {
        e.preventDefault();
        setIsDone(true);
        setOptionStatus('done');
        for (let i = 0; i < e.target.length - 1; i++) {
            paymentInfo[e.target[i].name] = e.target[i].value;
        }
        console.log(paymentInfo);
    }

    function edit(){
        setIsDone(false);
        setShowOption(true);
    }
    useEffect(() => {
        setOptionStatus(isDone ? 'done' : 'doing');
        console.log(showOption);
        console.log(paymentInfo);
console.log(isDone);
    }, [showOption]);


    return (
        <div className='paymentOptions'>
            <div className="optionTitle" >
                <h3 onClick={() => setShowOption(!showOption)}>{title}</h3>
               <div className='titleRight'>
               {!type && isDone && <h4 className="edit" onClick={edit}>
               Düzəliş et
                </h4>}
                <div className={`${optionStatus} imgContainer`}>
                    <img src={tick} alt="tickIcon" />
                </div>
               </div>
            </div>
            <div className={`${!showOption ? 'd-none' : ''} optionContent`}>
                <div className={`${isDone ? 'd-none' : ''} optionForm`}>
                    <form onSubmit={(e) => formSubmit(e)} className={`${type ? 'text-center':''}`}>
                        {children}
                        <button>{btnText}</button>
                    </form>
                </div>
              {
                !type &&  <div className={`${!isDone ? 'd-none' : ''} optionFull`}>
                {
                    !address ? <>
                        <h6>{paymentInfo.name} {paymentInfo.surname}</h6>
                        <h6>{paymentInfo.mobile}</h6>
                        <h6>{paymentInfo.email}</h6>
                    </>
                    :
                    <>
                        <h6>{paymentInfo.addess}</h6>
                        <h6>{paymentInfo.apartment}</h6>
                        <h6>{paymentInfo.note}</h6>
                    
                    </>
                }

            </div>
              }
            </div>
        </div>
    )
}

export default PaymentOptions