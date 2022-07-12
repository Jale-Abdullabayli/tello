import React, { useState, useEffect } from 'react'
import './FilterItems.scss';
import checkboxIcon from '../../../../../images/checkboxIcon.png'
import { useDispatch } from 'react-redux';
import { addToColorFilter, addToSizeFilter, removeFromColorFilter, removeFromSizeFilter } from '../../../../../redux/reducers/filterReducer';
import { useNavigate } from "react-router-dom";
function FilterItems({ item, title }) {
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    function filter() {
        setChecked(!checked);
    }

    useEffect(() => {
        if (title === 'Rəng') {
            if (checked) {
                dispatch(addToColorFilter(item.toLowerCase()));
            }
            else {
                dispatch(removeFromColorFilter(item.toLowerCase()));
            }
        }
        else if (title === 'Ölçü') {
            if (checked) {
                dispatch(addToSizeFilter(item.toLowerCase()));
            }
            else {
                dispatch(removeFromSizeFilter(item.toLowerCase()));
            }
        }
    }, [checked]);

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