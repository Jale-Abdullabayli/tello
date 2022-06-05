import React from 'react'
import './Footer.scss';
import logoName from '../../images/logoName.png';
import logoSymbol from '../../images/logoSymbol.png';
import sosial1 from '../../images/sosial1.svg';
import sosial2 from '../../images/sosial2.png';
import sosial3 from '../../images/sosial3.svg';
import sosial4 from '../../images/sosial4.png';
import contact1 from '../../images/contact1.png';
import contact2 from '../../images/contact2.png';
import contact3 from '../../images/contact3.png';
import copy from '../../images/copy.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <div className="footerTop">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className='logo'>
                                <img src={logoSymbol} alt='logoSymbol' />
                                <img src={logoName} alt='logoName' />
                            </div>
                            <div className="icons">
                                <img src={sosial1} alt='sosialIcon' />
                                <img src={sosial2} alt='sosialIcon' />
                                <img src={sosial3} alt='sosialIcon' />
                                <img src={sosial4} alt='sosialIcon' />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h3>Menu</h3>
                            <Link to=''>Yeni</Link>
                            <Link to=''>Endirimlər</Link>
                            <Link to=''>Aksessuarlar</Link>
                            <Link to=''>Bütün brendlər</Link>
                        </div>
                        <div className="col-md-3">
                            <h3>Kömək</h3>
                            <Link to=''>Tez-tez soruşulan suallar</Link>
                            <Link to=''>Çatdırılma xidməti</Link>
                            <Link to=''>Geri qaytarılma şərtləri</Link>
                        </div>
                        <div className="col-md-3">
                            <h3>Əlaqə</h3>
                            <div className='contactItem'>
                                <img src={contact1} alt='contact' />
                                <span className='location'>M. K. Ataturk avenue 89, Baku, Azerbaijan</span>
                            </div>
                            <div className='contactItem'>
                                <img src={contact2} alt='contact' />
                                <span >example@gmail.com</span>
                            </div>
                            <div className='contactItem'>
                                <img src={contact3} alt='contact' />
                                <span>*2108</span>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Link to=''>Qaydalar və şərtlər</Link>
                        <Link to=''>Məxfilik siyasəti</Link>
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                <div className="container">
                    <div className="termsAndConditions">
                    <div className="left">
                        <img src={copy} alt='copy'/>
                        <span>PeojectX 2021. Bütün hüquqlar qorunur.</span>
                    </div>
                    <div className="right">
                        <Link to=''>Qaydalar və şərtlər</Link>
                        <Link to=''>Məxfilik siyasəti</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer