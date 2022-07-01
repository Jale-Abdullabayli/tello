import React, { useState } from 'react'
import './FilterItems.scss';
import checkboxIcon from '../../../../../images/checkboxIcon.png'
import { useDispatch, useSelector } from 'react-redux';
import { addToColorFilter, addToSizeFilter } from '../../../../../redux/reducers/filterReducer';

function FilterItems({ item, title }) {
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();

    function filter() {
        setChecked(!checked);
        if (title == 'Rəng') {
            dispatch(addToColorFilter(item));
        }
        else if (title == 'Ölçü') {
            dispatch(addToColorFilter(item));
        }
    }

    return (
        <div className='item'>
            <div onClick={filter} className={`${checked && 'checked'} checkbox`} >
                {checked && <img src={checkboxIcon} alt="checkboxIcon" />}
            </div>
            <span>{item}</span>
        </div>
    )
}

export default FilterItems