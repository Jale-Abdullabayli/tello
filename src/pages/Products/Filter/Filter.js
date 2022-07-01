import React from 'react'
import FilterOptions from './FilterOptions/FilterOptions'
import { useState } from 'react';

function Filter() {

    const options = [{
        id:1,
        title: "Ölçü",
        items: ['64 GB', '128 GB'],
        show: false
    }, {
        id:2,
        title: "Rəng",
        items: ['Blue', 'Purple'],
        show: false
    }]

    const [filterOptions, setFilterOptions] = useState(options);


    return (
        <div className='filter'>
            {filterOptions.map((el) => <FilterOptions filterOptions={filterOptions} show={el.show} id={el.id} setFilterOptions={setFilterOptions} key={el.id} title={el.title} items={el.items} />)}
        </div>
    )
}

export default Filter