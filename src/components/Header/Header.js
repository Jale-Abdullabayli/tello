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
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../redux/reducers/menuShowReducer';
import { Link } from 'react-router-dom';

function Header() {
    const dispatch = useDispatch();
    const menuShow = useSelector(state => state.menuShow);
    return (
        <div className='header container'>
            <div className="logo">
                {!menuShow ?
                    <img onClick={() => dispatch(toggleMenu())} src={menuIcon} className='menuIcon' alt='menuIcon' /> :
                    <img onClick={() => dispatch(toggleMenu())} src={closeIcon} className='closeIcon' alt='closeIcon' />
                }
                <Link to='/'>
                    <img src={logoSymbol} alt='logoSymbol' className='logoSymbol' />
                    <img src={logoName} alt='logoName' />
                </Link>
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
                <Link to='/login'>
                    <img src={userIcon} alt='userIcon' />

                </Link>
                <Link to='/register'>
                    <img src={favoriteIcon} alt='favoriteIcon' />
                </Link>
                <Link to='/basket'>
                    <img src={basketIcon} alt='basketIcon' />
                </Link>
                <div className="basketCount">0</div>
            </div>
        </div>
    )
}

export default Header