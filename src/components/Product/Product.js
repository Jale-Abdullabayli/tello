import React, { useEffect } from 'react'
import './Product.scss'
import aznSymbol from '../../images/aznSymbol.svg'
import { commerce } from '../../commerce';

function Product({ product }) {
  
    return (

        <div className='product'>
            <div className="imgContainer">
                <img src={product.image.url} alt="productImg" />
            </div>

            <h3 className='name'>{product.name} {product.variant_groups[1] && `,${product.variant_groups[1].options[0].name}`} {product.variant_groups[0] && `,${product.variant_groups[0].options[0].name}`}</h3>
            <span className='price'>{product.price.formatted} <img src={aznSymbol} alt="azn" /> </span>
        </div>
    )
}

export default Product