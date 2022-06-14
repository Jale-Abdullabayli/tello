import React from 'react'
import './Info.scss';
import info1 from '../../../images/info1.png';
import info2 from '../../../images/info2.png';
import info3 from '../../../images/info3.png';

function Info() {
    return (
        <div className='info'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="infoCol">
                        <img src={info1} alt='info' />
                        <h4>Çatdırılma</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                        </div>
                   </div>
                   <div className="col-md-4 mb-3 mb-md-0">
                        <div className="infoCol">
                        <img src={info2} alt='info'  />
                        <h4>Kredit</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                        </div>
                   </div>
                   <div className="col-md-4 mb-3 mb-md-0">
                        <div className="infoCol">
                        <img src={info3} alt='info'  />
                        <h4>Zəmanət</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Info