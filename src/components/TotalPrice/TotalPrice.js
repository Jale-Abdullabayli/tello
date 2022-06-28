import React from 'react'
import aznSymbol from '../../images/aznSymbol.svg';
import './TotalPrice.scss';


function TotalPrice({total}) {
    return (
        <div className='totalPrice'>
            <h3>Ümumi</h3>
            <div className="properties">
                <div className="property">
                    <div className="key">Məbləğ </div>
                    <div className="value"><span>{total}</span> <img src={aznSymbol} alt="azn" /></div>
                </div>
                <div className="property">
                    <div className="key">Çatdırılma</div>
                    <div className="value"><span>0.00</span> <img src={aznSymbol} alt="azn" /></div>
                </div>
                <div className="property">
                    <div className="key">Hədiyyə paketi</div>
                    <div className="value"><span>0.00</span> <img src={aznSymbol} alt="azn" /></div>
                </div>
                <div className="property">
                    <div className="key">Promo kod</div>
                    <div className="value"><span>0.00</span> <img src={aznSymbol} alt="azn" /></div>
                </div>
            </div>
            <div className="line"></div>
            <div className="sum">
                <div className="property">
                    <div className="key">Cəmi</div>
                    <div className="value"><span>{total}</span> <img src={aznSymbol} alt="azn" /></div>
                </div>
            </div>
        </div>
    )
}

export default TotalPrice