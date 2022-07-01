import React from 'react'
import './FilterOptions.scss';
import minusIcon from '../../../../images/minusIcon.png'
import plusIcon from '../../../../images/plusIcon.png'
import FilterItems from './FilterItems/FilterItems';

function FilterOptions({ items, title, setFilterOptions, filterOptions, id, show }) {
    function toggleFilter() {
        setFilterOptions(filterOptions.map(el => {
            if (el.id == id) {
                return { ...el, show: !el.show }
            }
            else {
                return el;
            }
        }))
    }
    return (
        <div className='filterOptions'>
            <div className="title">
                <h3>{title}</h3>
                <div className="imgContainer" onClick={toggleFilter}>
                    <img src={show ? minusIcon : plusIcon} alt={show ? 'minusIcon' : 'plusIcon'} />
                </div>
            </div>
            {show && <div className="items">
                {items.map((el, index) => (
                    <FilterItems key={index} title={title} item={el} />
                ))}
            </div>

            }
        </div>
    )
}

export default FilterOptions