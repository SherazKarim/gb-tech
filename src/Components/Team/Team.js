import React, { Component } from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import rashid from './images/rashid.jpg'
import p2 from './images/p-2.jpg'
import p3 from './images/p-3.jpg'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { IconContext } from "react-icons/lib";
import cap1 from './images/cap1.PNG'
import cap2 from './images/cap2.PNG'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './Team.css'

export default function Team() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <div className="carousel-button-group">
                <button className={currentSlide === 0 ? 'disable' : '' + 'arrows arrow-right'} onClick={() => previous()}><IconContext.Provider value={{ size: '60', color: 'FF6347' }} >
                    <HiOutlineArrowNarrowLeft />
                </IconContext.Provider></button>
                <button className="arrows" onClick={() => next()} > <IconContext.Provider className="icon-arrows" value={{ size: '60', color: 'FF6347' }} >
                    <HiOutlineArrowNarrowRight />
                </IconContext.Provider></button>
                {/* <button className={currentSlide === 0 ? 'disable' :  + 1}><IoIosArrowForward/></button> */}
            </div>

        );
    };


    return (
        <div className="container" id="team">
            <div className="head-div">
                    <h2 className="text-center heads-team">Our Professional Team</h2>
                </div>
                <div className='row justify-content-center line-team'>
                    <div className='line-size-team text-center mb-5'></div>
                </div>
            <div className="team-parent">
                <Carousel arrows={false} responsive={responsive} customButtonGroup={<ButtonGroup />}>
                <div className="parent">
                        <img className="img-fluid" src='https://gbtechive.com/assets/uploads/team/undraw_profile.svg' />
                        <div className="designation text-center">
                            <p className="p-3 mb-5 pb-5">Chief Operating Officer</p>
                        </div>
                    </div>

                    <div className="parent">
                        <img className="img-fluid" src='https://gbtechive.com/assets/uploads/team/Sgf.png' />
                        <div className="designation text-center">
                            <p className="p-3 mb-0">Chief Operating Officer</p>
                        </div>
                    </div>

                    <div className="parent">
                        <img className="img-fluid" src='https://gbtechive.com/assets/uploads/team/Sgf.png' />
                        <div className="designation text-center">
                            <p className="p-3 mb-0">Chief Operating Officer</p>
                        </div>
                    </div>

                    <div className="parent">
                        <img className="img-fluid" src='https://gbtechive.com/assets/uploads/team/k.png' />
                        <div className="designation text-center">
                            <p className="p-3 mb-0">Chief Operating Officer</p>
                        </div>
                    </div>

                    <div className="parent">
                        <img className="img-fluid" src='https://gbtechive.com/assets/uploads/team/undraw_profile.svg' />
                        <div className="designation text-center">
                            <p className="p-3 mb-0">Chief Operating Officer</p>
                        </div>
                    </div>

                    <div className="parent">
                        <img className="img-fluid" src='https://gbtechive.com/assets/uploads/team/Sgf.png' />
                        <div className="designation text-center">
                            <p className="p-3 mb-0">Chief Operating Officer</p>
                        </div>
                    </div>

                    <div className="parent">
                        <img className="img-fluid" src='https://gbtechive.com/assets/uploads/team/undraw_profile.svg' />
                        <div className="designation text-center">
                            <p className="p-3 mb-0">Chief Operating Officer</p>
                        </div>
                    </div>

                </Carousel>
            </div>
        </div>
    )
}

