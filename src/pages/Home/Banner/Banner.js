import React from 'react'
import './Banner.scss';
import bannerImg from '../../../images/bannerImg.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';


function Banner() {
    return (
        <div className='banner'>
            <div className="container">
                <div className="color color1"></div>
                <div className="color color2"></div>
                <div className="color color3"></div>

                <Splide options={{
                rewind: true,
                gap: '16px',
                perPage: 1,
                perMove: 1,
                type: 'loop',
                // autoplay: true,
                arrows: false
            }} >
                    <SplideSlide>
                        <div className="row carouselRow">
                            <div className="col-md-6">
                                <h1>Buy & Sell <br />
                                    What's Now & Next</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus </p>
                            </div>
                            <div className="col-md-6">
                                <img className="d-block w-100" src={bannerImg} alt="slideImg" />
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="row carouselRow">
                            <div className="col-md-6">
                                <h1>Buy & Sell <br />
                                    What's Now & Next</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus </p>
                            </div>
                            <div className="col-md-6">
                                <img className="d-block w-100" src={bannerImg} alt="slideImg" />
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="row carouselRow">
                            <div className="col-md-6">
                                <h1>Buy & Sell <br />
                                    What's Now & Next</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus </p>
                            </div>
                            <div className="col-md-6">
                                <img className="d-block w-100" src={bannerImg} alt="slideImg" />
                            </div>
                        </div>
                    </SplideSlide>

                </Splide>
            </div>

        </div>
    )
}

export default Banner