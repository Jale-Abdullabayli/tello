import React,{useEffect} from 'react';
import MoonLoader from "react-spinners/MoonLoader";
import {useParams, useNavigate } from 'react-router-dom'
import { commerce } from '../../commerce';
import './GenerateToken.scss';

function GenerateToken() {
    let navigate = useNavigate();
    let {token}  = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        commerce.customer.getToken(`${token}`, 'save= true' ).then((jwt) => {navigate("/profile/order-list", { replace: true })});
    }, [token, navigate])
    return (
        <div className='generateToken'>
            <MoonLoader color={'#2DD06E'} loading={true} size={100} />
        </div>
    )
}

export default GenerateToken