import React from 'react'
import FilterOptions from './FilterOptions/FilterOptions'

function Filter() {

    const filterOptions = [{
        title: "Brend",
        items: ['Apple', 'Samsung']
    }, {
        title: "Type",
        items: ['Apple', 'Samsung']
    },
    {
        title: "Category",
        items: ['Apple', 'Samsung']
    }]
    return (
        <div className='filter'>
            {filterOptions.map((el) =><FilterOptions title={el.title} items={el.items}/>)}
        </div>
    )
}

export default Filter