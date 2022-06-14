import React from 'react'
import './FilterOptions.scss';
import minusIcon from '../../../../images/minusIcon.png'
import plusIcon from '../../../../images/plusIcon.png'
import checkboxIcon from '../../../../images/checkboxIcon.png'

function FilterOptions({items, title}) {
    return (
        <div className='filterOptions'>
            <div className="title">
                <h3>{title}</h3>
                <img src={minusIcon} alt="minusIcon" />
                <img src={plusIcon} alt="minusIcon" />
            </div>
            <div className="items">
                {items.map(el =>  (
                    <div className='item'>
                    <div className="checkbox checked">
                        <img src={checkboxIcon} alt="checkboxIcon" />
                    </div>
                    <span>{el}</span>
                </div>
                ))}
            </div>
        </div>
    )
}

export default FilterOptions