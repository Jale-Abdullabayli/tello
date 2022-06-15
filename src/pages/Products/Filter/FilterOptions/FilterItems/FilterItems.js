import React,{useState} from 'react'
import './FilterItems.scss';
import checkboxIcon from '../../../../../images/checkboxIcon.png'


function FilterItems({item}) {
    const [checked, setChecked] = useState(false);
    return (
            <div className='item'>
                <div onClick={()=>setChecked(!checked)} className={`${checked && 'checked'} checkbox`} >
                    {checked && <img src={checkboxIcon} alt="checkboxIcon" />}
                </div>
                <span>{item}</span>
            </div>
    )
}

export default FilterItems