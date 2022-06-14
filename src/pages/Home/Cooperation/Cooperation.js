import React from 'react'
import './Cooperation.scss';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import cooperation1 from '../../../images/cooperation1.png';
import cooperation2 from '../../../images/cooperation2.png';
import cooperation3 from '../../../images/cooperation3.png';
import cooperation4 from '../../../images/cooperation4.png';
import cooperation5 from '../../../images/cooperation5.png';
import cooperation6 from '../../../images/cooperation6.png';

function Cooperation() {

    return (
        <div className='cooperation'>
            <div className="container">
            <Splide options={{
                rewind: true,
                gap: '16px',
                perPage: 5,
                perMove: 1,
                type: 'loop',
                autoplay: true,
                arrows: false
            }}>
                <SplideSlide>
                    <div className="slideItem">
                        <img src={cooperation1} alt="slideImg" />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="slideItem">
                        <img src={cooperation2} alt="slideImg" />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="slideItem">
                        <img src={cooperation3} alt="slideImg" />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="slideItem">
                        <img src={cooperation4} alt="slideImg" />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="slideItem">
                        <img src={cooperation5} alt="slideImg" />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="slideItem">
                        <img src={cooperation6} alt="slideImg" />
                    </div>
                </SplideSlide>
            </Splide>
            </div>
        </div>
    )
}

export default Cooperation