import React, { useState } from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import { commerce } from '../../commerce';
import { useSelector } from 'react-redux';


function Navbar({ borderNone }) {
    const menuShow = useSelector(state => state.menuShow);

    const [categories, setCategories] = useState([]);
    commerce.categories.list({limit:5}).then((category) => setCategories(category.data));
    return (
        <div className={`${menuShow && 'show'} ${borderNone && 'borderNone'} navBar`}>
            <div className="container">
                <div className="categoryList">
                    {categories.map((el, index) => <NavLink   className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                     key={index} to={`/products/${el.name}`}>{el.name}</NavLink>)}
                </div>
            </div>
        </div>
    )
}

export default Navbar