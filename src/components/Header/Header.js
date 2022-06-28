import React, { useEffect, useRef, useState } from 'react'
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
import { getCartAsync } from '../../redux/actions/cart';

function Header() {

    let getSearchs = localStorage.getItem('searchs');
    const [showSearchs, setShowSearchs] = useState(false);
    const [searchs, setSearchs] = useState(getSearchs ? JSON.parse(getSearchs) : []);
    const dispatch = useDispatch();
    const menuShow = useSelector(state => state.menuShow);
    const cart = useSelector(state => state.cart);
    const basketCount = cart?.cart?.total_items;
    const searchRef = useRef();
    const wrapperRef = useRef(null);
    const [lastSearchs, setLastSearchs] = useState([]);
    const [mostSearchs, setMostSearchs] = useState([]);

    useEffect(() => {
        localStorage.setItem("searchs", JSON.stringify(searchs));
        if (searchs.length === 1) {
            setLastSearchs([searchRef.current.value])
        }
        else if (searchs.length === 0) {
            setLastSearchs([])
        }
        else {
            let repeated = false;
            let repeatCount = 0;
            for (let i = 0; i < searchs.length - 1; i++) {
                if (searchs[searchs.length - 1] === searchs[i]) {
                    repeated = true;
                    repeatCount++;
                }
            }
            if (!repeated) {
                setLastSearchs([...lastSearchs, searchRef.current.value].slice(-5));
            }
            else {
                if (repeatCount >= 2 && !mostSearchs.includes(searchRef.current.value)) {
                    setMostSearchs([...mostSearchs, searchRef.current.value].slice(-5))
                }
            }
        }


    }, [searchs]);

    useEffect(() => {
        let lastSearchsArr = [];
        let mostSearchsArr = [];
        dispatch(getCartAsync());
        window.scrollTo(0, 0);
        for (let i = 0; i < searchs.length; i++) {
            let single = true;
            let repeatCount = 0;
            for (let j = i + 1; j < searchs.length; j++) {
                if (searchs[i] === searchs[j]) {
                    single = false;
                    repeatCount++;
                }
            }
            if (single) {
                lastSearchsArr.push(searchs[i]);
            }
            if (repeatCount >= 2 && !mostSearchsArr.includes(searchs[i])) {
                mostSearchsArr.push(searchs[i]);
            }
            setLastSearchs(lastSearchsArr.slice(-5));
            setMostSearchs(mostSearchsArr.slice(-5));
        }
    }, []);

    function search(e) {
        e.preventDefault();
        if (searchRef.current.value === '') {
            return;
        }
        setSearchs([...searchs, searchRef.current.value].splice(-10));
    }

    function clearSearchs() {
        searchRef.current.value='';
        setSearchs([]);
        setLastSearchs([]);
        setMostSearchs([]);
    }




    useEffect(() => {
        function handleClickOutside(event) {

            if (searchRef.current?.contains(event.target)) {
                setShowSearchs(true);
            }
            else if (!wrapperRef.current?.contains(event.target)) {
                setShowSearchs(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

    }, [wrapperRef]);

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
                <form onSubmit={(e) => search(e)}>
                    <img src={searchIcon} alt='searchIcon' />
                    <input onFocus={() => setShowSearchs(true)} ref={searchRef} placeholder='Axtarış...' />
                </form>

                <div ref={wrapperRef} className={`${showSearchs && searchs.length!==0 ? 'show' : ''} lastSearchs`}>
                    <div className={`${lastSearchs.length===0 ? 'd-none' : ''} lastSearch`}>
                        <div className="title">
                            <h3>Son axtarışlar</h3>
                            <span onClick={clearSearchs}>Təmizlə</span>
                        </div>
                        <div className="searchList">
                            {lastSearchs.map((el, index) => (
                                <span key={index}>{el}</span>
                            ))}
                        </div>
                    </div>
                    <div className={`${mostSearchs.length===0 ? 'd-none' : ''} mostSearchs`}>
                        <div className="title">
                            <h3>Çox axtarılanlar</h3>
                        </div>
                        <div className="searchList">
                            {mostSearchs.map((el, index) => (
                                <span key={index}>{el}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="icons">
                <Link to='/login'>
                    <img src={userIcon} alt='userIcon' />

                </Link>
                <Link to='/payment'>
                    <img src={favoriteIcon} alt='favoriteIcon' />
                </Link>
                <Link to='/basket'>
                    <img src={basketIcon} alt='basketIcon' />
                </Link>
                <div className="basketCount">{basketCount}</div>
            </div>
        </div>
    )
}

export default Header