import React, { useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { commerce } from '../../commerce';


function Navbar({ menuShow }) {
    const [categories, setCategories] = useState([]);
    commerce.categories.list({ limit: 5 }).then((category) => setCategories(category.data));
    return (
        <div className={`${menuShow && 'show'} container navBar` }>
            {categories.map((el, index) => <Link key={index} to={`/products/${el.name}`}>{el.name}</Link>)}
        </div>
    )
}

export default Navbar