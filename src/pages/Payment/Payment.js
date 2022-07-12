import React,{useEffect} from 'react';
import InputControl from '../../components/InputControl/InputControl';
import TotalPrice from '../../components/TotalPrice/TotalPrice';
import './Payment.scss';
import PaymentHeader from './PaymentHeader/PaymentHeader';
import PaymentOptions from './PaymentOptions/PaymentOptions';
import card from '../../images/card.svg';
import cash from '../../images/cash.svg';

function Payment() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    let paymentInfo = {};
    return (
        <div className='payment'>
            <PaymentHeader />
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 leftCol">
                            <h3 className='title'>Ödəmə</h3>
                            <PaymentOptions paymentInfo={paymentInfo} title='1. Şəxsi məlumatlar' btnText='Yadda saxla'>
                                <div className="row">
                                    <div className="col-md-6">
                                        <InputControl name='name' title='Ad' type='text' placeholder='Adınızı daxil edin' />
                                    </div>
                                    <div className="col-md-6">
                                        <InputControl name='surname' title='Soyad' type='text' placeholder='Soyadınızı daxil edin' />
                                    </div>
                                    <div className="col-md-6">
                                        <InputControl name='mobile' title='Mobil nömrə' type='tel' placeholder='077 - 000 - 00 - 00' />
                                    </div>
                                    <div className="col-md-6">
                                        <InputControl name='email' title='E-mail' type='email' placeholder='nümunə@gmail.com' />
                                    </div>
                                </div>
                            </PaymentOptions>
                            <PaymentOptions address='true' paymentInfo={paymentInfo} title='2. Çatdırılma' btnText='Yadda saxla'>
                                <div className="row">
                                    <div className="col-md-6">
                                        <InputControl name='addess' title='Ünvan' type='text' placeholder='Ünvanı daxil edin' />

                                    </div>
                                    <div className="col-md-6">
                                        <InputControl name='apartment' title='Bina/Mənzil' type='text' placeholder='Daxil edin' />

                                    </div>
                                    <div>
                                        <InputControl name='note' textArea='true' title='Kuryer üçün əlavə qeydlər' placeholder='Mətni daxil edin...' />

                                    </div>
                                </div>
                            </PaymentOptions>
                            <PaymentOptions type='true' paymentInfo={paymentInfo} title='3. Ödəmə üsulu' btnText='Təsdiq et'>
                                <div className="paymentType">
                                    <div className="withCard">
                                        <img src={card} alt="withCard" />
                                        <h4>Onlayn kart ilə ödəmə </h4>
                                    </div>
                                    <div className="cash active">
                                        <img src={cash} alt="cash" />
                                        <h4>Qapıda nağd ödəmə</h4>
                                    </div>
                                </div>
                            </PaymentOptions>
                        </div>
                        <div className="col-md-4 offset-md-1">
                            <TotalPrice total={66.50} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment