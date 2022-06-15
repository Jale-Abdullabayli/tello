import Footer from '../../components/Footer/Footer';
import React, { useEffect, useState } from 'react'
import './ProductsByCategory.scss';
import { useParams } from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';
import { commerce } from '../../commerce';
import Filter from './Filter/Filter';
import { getProductsByCategoryAsync } from '../../redux/actions/product';
import { useDispatch, useSelector } from 'react-redux';
import Products from '../../components/Products/Products';
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'


function ProductsByCategory() {
    const dispatch = useDispatch();
    const productsByCategory = useSelector(state => state.productsByCategory);

    let { categoryName } = useParams();
    const [category, setCategory] = useState('');
    async function getCategory() {
        commerce.categories.retrieve(categoryName, { type: 'slug' })
            .then((category) => {
                setCategory(category);
                dispatch(getProductsByCategoryAsync(category.slug));
            });
    }


    useEffect(() => {
        getCategory();
    }, [categoryName]);
    return (
        <div className='productsByCategory'>
            <Header />
            <Navbar />
            <div className='products'>
                <div className="container">
                    <BreadCrumbs category={category} />
                    <div className="row">
                        <div className="col-md-3">
                            <Filter />
                        </div>
                        <div className="col-md-9">
                            {productsByCategory.loading ? 'Loading...' :
                                <>
                                    <div className="rightSideTitle">
                                        <h3>{category.products} məhsul tapıldı</h3>
                                    </div>
                                    <Products col='col-md-4' all='true' products={productsByCategory.products} />
                                </>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default ProductsByCategory