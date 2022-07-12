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
import { commerce } from '../../commerce';
import { getProductsAsync } from '../../redux/actions/product';


function Header() {

    let getSearchs = localStorage.getItem('searchs');
    const [showSearchs, setShowSearchs] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [searchs, setSearchs] = useState(getSearchs ? JSON.parse(getSearchs) : []);
    const dispatch = useDispatch();
    const menuShow = useSelector(state => state.menuShow);
    const cart = useSelector(state => state.cart);
    const products = useSelector(state => state.products);
    const basketCount = cart?.cart?.total_items;
    const searchRef = useRef();
    const wrapperRef = useRef(null);
    const resultRef = useRef(null);
    const [firstRender, setFirstRender] = useState(true);
    const [lastSearchs, setLastSearchs] = useState([]);
    const [mostSearchs, setMostSearchs] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(commerce.customer.isLoggedIn());
    const [inputValue, setInputValue] = useState('');

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
        dispatch(getProductsAsync());
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
        searchRef.current.value = '';
        setSearchs([]);
        setLastSearchs([]);
        setMostSearchs([]);
    }

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false);
            return;
        }
        if (inputValue === '') {

            setShowResults(false);

            setShowSearchs(true);
        }
        else {
            setShowResults(true);
            setShowSearchs(false);
        }
    }, [inputValue]);

    function inputChange(e) {
        setInputValue(e.target.value);
    }

    function filterProducts() {
        if (inputValue !== '') {
            return products.products.filter(el => {
                return el.name.toLowerCase().includes(inputValue.toLowerCase());
            })
        }
    }

    function inputFocus() {
        if (inputValue === '') {
            setShowSearchs(true);
        }
    }

    useEffect(() => {
        function handleClickOutside(event) {

            if (searchRef.current?.contains(event.target)) {
                setShowSearchs(true);
            }
            else if (!wrapperRef.current?.contains(event.target)) {
                setShowSearchs(false);
            }

            if (searchRef.current?.contains(event.target)) {
                setShowResults(true);
            }
            else if (!resultRef.current?.contains(event.target)) {
                setShowResults(false);
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
                    <input onChange={e => inputChange(e)} value={inputValue} onFocus={inputFocus} ref={searchRef} placeholder='Axtarış...' />
                </form>

                <div ref={wrapperRef} className={`${showSearchs && searchs.length !== 0 ? 'show' : ''} lastSearchs`}>
                    <div className={`${lastSearchs.length === 0 ? 'd-none' : ''} lastSearch`}>
                        <div className="title">
                            <h3>Son axtarışlar</h3>
                            <span onClick={clearSearchs}>Təmizlə</span>
                        </div>
                        <div className="searchList">
                            {lastSearchs.map((el, index) => (
                                <span onClick={() => setInputValue(el)} key={index}>{el}</span>
                            ))}
                        </div>
                    </div>
                    <div className={`${mostSearchs.length === 0 ? 'd-none' : ''} mostSearchs`}>
                        <div className="title">
                            <h3>Çox axtarılanlar</h3>
                        </div>
                        <div className="searchList">
                            {mostSearchs.map((el, index) => (
                                <span onClick={() => setInputValue(el)} key={index}>{el}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div ref={resultRef} className={`${showResults && searchs.length !== 0 ? 'show' : ''} searchResults`}>
                    {
                        filterProducts()?.map((product) => (
                            <Link to={`/product-detail/${product.id}`} className="searchResult">
                                <img src={product.image.url} alt="productImg" />
                                <h3 className='name'>{`${product.name},`} {product.variant_groups && product.variant_groups[1] && `${product.variant_groups[1].options[0].name},`} {product.variant_groups && product.variant_groups[0] && ` ${product.variant_groups[0].options[0].name}`}</h3>
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className="icons">
                {!isLoggedIn ? <Link to='/login'>
                    <img src={userIcon} alt='userIcon' />
                </Link> : <Link to='/profile/order-list'>
                    <img src={userIcon} alt='userIcon' />
                </Link>}

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