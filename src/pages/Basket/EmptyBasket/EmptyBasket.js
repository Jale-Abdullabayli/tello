import React from 'react'
import emptyBasket from '../../../images/emptyBasket.svg';
import { Link } from 'react-router-dom';
import './EmptyBasket.scss';

function EmptyBasket() {
    return (
        <div className='emptyBasket'>
            <img src={emptyBasket} alt="emptyBasketIcon" />
            <h3>Səbətiniz halhazırda boşdur</h3>
            <Link to='/'>Alış-verişə davam et</Link>
        </div>
    )
}

export default EmptyBasket