import React from 'react'
import { Link } from 'react-router-dom';
import './Category.scss';
import arrowBlue from '../../../images/arrowBlue.png';

function Category({ category, directionColumn }) {
    
    return (
        <div className={`${directionColumn && 'full'} category`}>
            <div className="color color1"></div>
            <div className="color color2"></div>
            <div className="color color3"></div>
            <div className="column">
                <h2 className='name'>{category.name}</h2>
                <h3 className='productAmount'>Məhsul sayı: {category.products}</h3>
                <Link to={`/products/${category.slug}/1`}>Məhsullara keçid  <img src={arrowBlue} alt="arrow" /></Link>
            </div>
            <div className="column imgColumn">
                {category && category?.assets && category?.assets.length > 0 && category?.assets[0]?.url &&
                    <img src={category?.assets[0]?.url} alt={category.name} />
                }
            </div>
        </div>
    )
}

export default Category