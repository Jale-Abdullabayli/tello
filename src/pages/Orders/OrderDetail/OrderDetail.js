import React, { useEffect } from 'react';
import './OrderDetail.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getProductByIdAsync } from '../../../redux/actions/product';
import backIcon from '../../../images/backIcon.svg';


function OrderDetail() {

    const dispatch = useDispatch();
    let orderDetail = useSelector(state => {
        return state.productById;
    });

    orderDetail=orderDetail.product;

    useEffect(() => {
        dispatch(getProductByIdAsync('prod_kpnNwA1v2XwmXB'));
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='orderDetail'>
            <h4 className='back'>
                <img src={backIcon} alt="backIcon" />
                <span>Sifarişin detalları</span>
            </h4>
            <div className="orderDetailMain">
                <div className="productDetail">
                    <img src={orderDetail.image.url} alt="productImg" />
                </div>
            </div>
        </div>
    )
}

export default OrderDetail