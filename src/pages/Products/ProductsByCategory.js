import Footer from '../../components/Footer/Footer';
import React, { useEffect, useState } from 'react'
import './ProductsByCategory.scss';
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
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
    const filter = useSelector(state => state.filter);
    const navigate = useNavigate();

    let { categoryName, page } = useParams();
    const [countOfProducts, setCountOfProducts] = useState(customFilter().length);

    const [category, setCategory] = useState('');

    async function getCategory() {
        commerce.categories.retrieve(categoryName, { type: 'slug' })
            .then((categoryType) => {
                setCategory(categoryType);
                setCountOfProducts(categoryType.products);
                dispatch(getProductsByCategoryAsync({ category: categoryName }));
            });
    }

    function changePage(pageNumber) {
        navigate(`/products/${categoryName}/${pageNumber}`);
    }


    function customFilter() {
        return productsByCategory.products.filter(product => {
            let isOkay = false;
            if (filter.colors.length === 0 && filter.sizes.length === 0) {
                isOkay = true;
            }
            product.variant_groups[0]?.options.forEach(option => {
                if (filter.colors.includes(option.name.toLowerCase())) {
                    isOkay = true;
                }
            })

            product.variant_groups[1]?.options.forEach(option => {
                if (filter.sizes.includes(option.name.toLowerCase())) {
                    isOkay = true;
                }
            })
            if (isOkay) return true;
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);
    useEffect(() => {
        getCategory();
        window.scrollTo(0, 0);
    }, [categoryName]);

    useEffect(() => {
        setCountOfProducts(customFilter().length);
        navigate(`/products/${categoryName}/1`);
    }, [filter]);
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
                                        <h3>{countOfProducts} məhsul tapıldı</h3>
                                    </div>
                                    <Products col='col-md-4' all='true' products={customFilter().slice((Number(page) - 1) * 6, 6 * Number(page))} />
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