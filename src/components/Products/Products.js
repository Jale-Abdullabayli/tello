import React from 'react'
import { Link } from 'react-router-dom'
import './Products.scss';
import arrow from '../../images/arrow.png';
import Product from '../Product/Product';
import ProductSkeleton from '../../components/ProductSkeleton/ProductSkeleton';


function Products({ title, products, col,all,loading }) {
    return (
        <div className='products'>
            <div className={`${!all && 'container'}`}>
                {!all && <div className="title">
                    <h5>{title}</h5>
                    <Link to=''><span>Hamısına bax</span> <img src={arrow} alt="all" /></Link>
                </div>}
                
                {
                    loading ? <ProductSkeleton/> :
                     <div className="row">
                    {products.map((product) => {
                        return (
                            <div key={product.id} className={`${col ? col : 'col-md-3'} col-6 mb-3`} >
                                <Product product={product} />
                            </div>
                        )
                    })}
                </div>
                }
                
                <div className="mobileAll">
                    <Link to=''><span>Hamısına bax</span> <img src={arrow} alt="all" /></Link>

                </div>
            </div>
        </div>
    )
}

export default Products