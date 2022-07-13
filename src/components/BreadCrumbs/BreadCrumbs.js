import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './BreadCrumbs.scss';
import rightArrow from '../../images/rightArrow.svg';
import { commerce } from '../../commerce';

function BreadCrumbs({ category,productName }) {
    const [parent, setParent] = useState('');
    async function getParent() {
        commerce.categories.retrieve(category.parent_id)
            .then(category => setParent(category));
    }
    useEffect(() => {
        getParent();
    }, [category]);
    return (
        <div className='breadCrumbs'>
            <Link to='/'>Ana səhifə</Link>
        
            <img src={rightArrow} alt='rightArrow' />
            <Link to={`/products/${category?.slug}/1`}  className={`${productName ? '':'active'}`}>{category?.name}</Link>
            {
                productName &&  
                <>
            <img src={rightArrow} alt='rightArrow' />
            <Link to='' className={`${!productName ? '':'active'}`}>{productName}</Link>
                
                </>
            }
           
        </div>
    )
}

export default BreadCrumbs