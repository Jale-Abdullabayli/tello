import React from 'react';
import './PaymentHeader.scss';
import logoName from '../../../images/logoName.png';
import logoSymbol from '../../../images/logoSymbol.png';
import { Link } from 'react-router-dom';

function PaymentHeader() {
    return (
        <div className='paymentHeader'>
            <Link to='/'>
                <img src={logoSymbol} alt='logoSymbol' className='logoSymbol' />
                <img src={logoName} alt='logoName' />
            </Link>
        </div>
    )
}

export default PaymentHeader