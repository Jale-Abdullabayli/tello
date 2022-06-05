import React from 'react'
import './Product.scss'
import aznSymbol from '../../images/aznSymbol.svg'

function Product({ product }) {
    return (

        <div className='product'>
            <div className="imgContainer">
                <img src={product.image.url} alt="productImg" />
            </div>

            <h3 className='name'>{product.name}</h3>
            <span className='price'>{product.price.formatted} <img src={aznSymbol} alt="azn" /> </span>
        </div>
    )
}

export default Product