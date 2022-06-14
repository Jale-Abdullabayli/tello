import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import './BreadCrumbs.scss';
import rightArrow from '../../../images/rightArrow.svg';
import { commerce } from '../../../commerce';

function BreadCrumbs({ category }) {
    const [parent, setParent] = useState('');
    async function getParent() {
        commerce.categories.retrieve(category.parent_id)
            .then(category => setParent(category));
    }
    useEffect(() => {
        getParent();
    }, []);
    return (
        <div className='breadCrumbs'>
            <Link to=''>Ana səhifə</Link>
            <img src={rightArrow} alt='rightArrow' />
            <Link to=''>{parent.name}</Link>
            <img src={rightArrow} alt='rightArrow' />
            <Link to='' className='active'>{category.name}</Link>
        </div>
    )
}

export default BreadCrumbs