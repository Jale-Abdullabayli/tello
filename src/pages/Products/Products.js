import React, { useEffect, useState } from 'react'
import './Products.scss';
import { useParams } from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';
import { commerce } from '../../commerce';
import Filter from './Filter/Filter';
import './Products.scss';


function Products() {
    let { categoryName } = useParams();
    const [category, setCategory] = useState('');
    async function getCategory() {
        commerce.categories.retrieve(categoryName, { type: 'slug' })
            .then((category) => setCategory(category));

    }

    useEffect(() => {
        getCategory();
    }, []);
    return (
        <div className='products'>
            <div className="container">
                <BreadCrumbs category={category} />
                <div className="row">
                    <div className="col-md-3">
                        <Filter />
                    </div>
                    <div className="col-md-9">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products