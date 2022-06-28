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
import Navbar from '../../components/Navbar/Navbar';
import Pagination from './Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import MoonLoader from "react-spinners/MoonLoader";



function ProductsByCategory() {
    const dispatch = useDispatch();
    const productsByCategory = useSelector(state => state.productsByCategory);
    const navigate = useNavigate();

    let { categoryName, page } = useParams();
    const [countOfProducts, setCountOfProducts] = useState(0);

    const [category, setCategory] = useState('');

    async function getCategory() {
        commerce.categories.retrieve(categoryName, { type: 'slug' })
            .then((categoryType) => {
                setCategory(categoryType);
                setCountOfProducts(categoryType.products);
                dispatch(getProductsByCategoryAsync({ category: categoryName, pageNumber: page }));
            });
    }

    function changePage(pageNumber) {
        navigate(`/products/${categoryName}/${pageNumber}`);
    }

    useEffect(() => {
        getCategory();
        window.scrollTo(0, 0);
    }, [categoryName, page]);
    return (
        <div className='productsByCategory'>
            <Header />
            <Navbar />
            <div className='productList'>
                <div className="container">
                    <BreadCrumbs category={category} />
                    <div className="row">
                        <div className="col-md-3">
                            <Filter />
                        </div>
                        <div className="col-md-9">
                            {productsByCategory.loading ? <div className="spinner">
                                <MoonLoader color={'#2DD06E'} loading={productsByCategory.loading} size={100} />
                            </div> :
                                <>
                                    <div className="rightSideTitle">
                                        <h3>{category.products} məhsul tapıldı</h3>
                                    </div>
                                    <Products col='col-md-4' all='true' products={productsByCategory.products} />
                                    {countOfProducts > 6 && <Pagination changePage={changePage} amount={Math.ceil(countOfProducts / 6)} />}
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