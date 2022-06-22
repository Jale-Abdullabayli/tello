import React, { useState } from 'react'
import './BasketProduct.scss';
import aznSymbol from '../../../images/aznSymbol.svg';
import deleteIcon from '../../../images/deleteIcon.svg';

function BasketProduct({ product }) {
  let [basketCount, setbasketCount] = useState(1);

  function decrementBasketCount() {
    if (basketCount !== 1) setbasketCount(basketCount--);
  }

  function incrementBasketCount() {
    setbasketCount(basketCount++);
  }
  return (
    <div className='basketProduct'>
      <div className="row">
        <div className='col-md-8'>
       <div className="left">
       <div className="imgContainer">
            <img src={product.image.url} alt="productImg" />
          </div>
          <div className="productDetail">
            <h3 className="name">{product.name} {product.variant_groups && product.variant_groups[1] && `,${product.variant_groups[1].options[0].name}`} {product.variant_groups && product.variant_groups[0] && `,${product.variant_groups[0].options[0].name}`}</h3>
            <div className="productDetailBottom">
              <div className="color"><span>Rəng:</span> <h3>{product.variant_groups && product.variant_groups[0] && `${product.variant_groups[0].options[0].name}`}</h3></div>
              <span className='price'><span>{product.price.formatted}</span> <img src={aznSymbol} alt="azn" /> </span>

            </div>
          </div>
       </div>
        </div>
        <div className="col-md-2 right">
          <div className="count">
            <span className='decrement' onClick={decrementBasketCount}>-</span>
            <div className="basketCount">{basketCount}</div>
            <span className='increment' onClick={incrementBasketCount}>+</span>
          </div>
        </div>
        <div className="col-md-2 right">
          <div className="removeFromCart">
            <img src={deleteIcon} alt="removeFromCart" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasketProduct