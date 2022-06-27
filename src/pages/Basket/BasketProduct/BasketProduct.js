import React, { useState,useEffect } from 'react'
import './BasketProduct.scss';
import aznSymbol from '../../../images/aznSymbol.svg';
import deleteIcon from '../../../images/deleteIcon.svg';
import { useDispatch } from 'react-redux';
import { removeFromCartAsync, updateCartAsync } from '../../../redux/actions/cart';
import {Link} from 'react-router-dom';

function BasketProduct({ product }) {
  console.log(product)
  const dispatch = useDispatch();
  let [basketCount, setbasketCount] = useState(product.quantity);
  const productId = product.id;
  function decrementBasketCount() {
    if(basketCount>1)  setbasketCount(basketCount-1);
  }

  function incrementBasketCount() {
    setbasketCount(basketCount+1);
  }

  function removeFromCart() {
    dispatch(removeFromCartAsync(product.id));
  }

  useEffect(() => {
    dispatch(updateCartAsync({ productId, basketCount }))
  }, [basketCount]);

  return (
    <div className='basketProduct'>
      <div className="row">
        <div className='col-md-8'>
          <div className="left">
            <Link className="imgContainer" to={`/product-detail/${product.product_id}`}>
              <img src={product.image.url} alt="productImg" />
            </Link>
            <div className="productDetail">
              <Link to={`/product-detail/${product.product_id}`} className="name">{product.name} {product.variant_groups && product.variant_groups[1] && `,${product.variant_groups[1].options[0].name}`} {product.variant_groups && product.variant_groups[0] && `,${product.variant_groups[0].options[0].name}`}</Link>
              <div className="productDetailBottom">
                <div className="color"><span>Rəng:</span> <h3>{product?.selected_options?.[1]?.option_name}</h3></div>
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
          <div onClick={removeFromCart} className="removeFromCart">
            <img src={deleteIcon} alt="removeFromCart" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasketProduct