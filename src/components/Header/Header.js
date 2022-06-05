import React from 'react'
import './Header.scss';
import logoName from '../../images/logoName.png';
import logoSymbol from '../../images/logoSymbol.png';
import searchIcon from '../../images/searchIcon.png';
import userIcon from '../../images/userIcon.png';
import favoriteIcon from '../../images/favoriteIcon.png';
import basketIcon from '../../images/basketIcon.png';
import menuIcon from '../../images/menuIcon.svg';
import closeIcon from '../../images/closeIcon.svg';

function Header({ setMenuShow, menuShow }) {

    return (
        <div className='header container'>
            <div className='logo'>
                {!menuShow ?
                    <img onClick={() => setMenuShow(!menuShow)} src={menuIcon} className='menuIcon' alt='menuIcon' /> :
                    <img onClick={() => setMenuShow(!menuShow)} src={closeIcon} className='closeIcon' alt='closeIcon' />
                }

                <img src={logoSymbol} alt='logoSymbol' className='logoSymbol' />
                <img src={logoName} alt='logoName' />
            </div>
            <div className="search">
                <img src={searchIcon} alt='searchIcon' />
                <input placeholder='Axtarış...' />
                <div className="lastSearchs">
                    <div className="title">
                        <h3>Son axtarışlar</h3>
                        <span>Təmizlə</span>
                    </div>
                    <div className="searchList">
                        <span>IPhone</span>
                        <span>Samsung TV</span>
                    </div>
                </div>
            </div>
            <div className="icons">
                <img src={userIcon} alt='userIcon' />
                <img src={favoriteIcon} alt='favoriteIcon' />
                <img src={basketIcon} alt='basketIcon' />
                <div className="basketCount">0</div>
            </div>
        </div>
    )
}

export default Header