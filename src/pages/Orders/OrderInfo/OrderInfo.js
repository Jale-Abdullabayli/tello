import React from 'react';
import './OrderInfo.scss';
import aznSymbol from '../../../images/aznSymbol.svg';
import { Link } from 'react-router-dom';


function OrderInfo({ product }) {
    return (
        <div className="col-md-6">
            <Link to='/orders/order-detail' className='orderInfo'>
                <div className="row">
                    <div className="col-5">
                        <img className='productImg' src={product.image.url} alt="productImg" />
                    </div>
                    <div className="col-7">
                        <div className="properties">
                            <div className="property">
                                <span>Sifariş tarixi:</span>
                                <h5>12.04.2020</h5>
                            </div>
                            <div className="property">
                                <span>Status:</span>
                                <h5 className='status'>Yoldadır</h5>
                            </div>
                            <div className="property">
                                <span>Ümumi məbləğ:</span>
                                <div className="price">{product.price.formatted} <img src={aznSymbol} alt="azn" /></div>
                            </div>
                        </div>
                        <Link to='' className='detail'>Sifarişin detalları</Link>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default OrderInfo