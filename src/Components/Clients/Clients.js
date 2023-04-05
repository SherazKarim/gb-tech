import React, { Component } from "react";
import './Clients.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { IconContext } from 'react-icons/lib'


export default function Clients() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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
        <section id="testimonial">
            <div className="container col-md-10 pt-5">
                <div className="head-div">
                    <h2 className="text-center heads-client">Valueable Clients</h2>
                </div>
                <div className='row justify-content-center line-clients'>
                    <div className='line-size text-center mb-5'></div>
                </div>
                <div className="">
                    <Carousel arrows={false} customButtonGroup={<ButtonGroup />} responsive={responsive}>
                        <div className="parent-clients">
                            <img className="img-fluid image-clients mb-3" src='https://gbtechive.com/assets/uploads/client/1.jpg' />
                            <div className="para-clients text-center">
                                <p className="clients-para">A great job of not only creating our website how we wanted it to be, but also gave us great insight on what they believed will help boost sales. I recommend GBTechive</p>
                                <h6 className="pb-5 mb-5">Allien</h6>
                            </div>
                        </div>
                        <div className="parent-clients">
                            <img className="img-fluid image-clients mb-3" src='https://gbtechive.com/assets/uploads/client/zc.jpg' />
                            <div className="para-clients text-center">
                                <p className="clients-para">A great job of not only creating our website how we wanted it to be, but also gave us great insight on what they believed will help boost sales. I recommend GBTechive</p>
                                <h6>Allien</h6>
                            </div>
                        </div>
                        <div className="parent-clients">
                            <img className="img-fluid image-clients mb-3" src='https://gbtechive.com/assets/uploads/client/ad.jpg' />
                            <div className="para-clients text-center">
                                <p className="clients-para">A great job of not only creating our website how we wanted it to be, but also gave us great insight on what they believed will help boost sales. I recommend GBTechive</p>
                                <h6>Allien</h6>
                            </div>
                        </div>
                        <div className="parent-clients">
                            <img className="img-fluid image-clients mb-3" src='https://gbtechive.com/assets/uploads/client/hgj.jpg' />
                            <div className="para-clients text-center">
                                <p className="clients-para">A great job of not only creating our website how we wanted it to be, but also gave us great insight on what they believed will help boost sales. I recommend GBTechive</p>
                                <h6>Allien</h6>
                            </div>
                        </div>
                        <div className="parent-clients">
                            <img className="img-fluid image-clients mb-3" src='https://gbtechive.com/assets/uploads/client/ad.jpg' />
                            <div className="para-clients text-center">
                                <p className="clients-para">A great job of not only creating our website how we wanted it to be, but also gave us great insight on what they believed will help boost sales. I recommend GBTechive</p>
                                <h6>Allien</h6>
                            </div>
                        </div>
                        <div className="parent-clients">
                            <img className="img-fluid image-clients mb-3" src='https://gbtechive.com/assets/uploads/client/hgj.jpg' />
                            <div className="para-clients text-center">
                                <p className="clients-para">A great job of not only creating our website how we wanted it to be, but also gave us great insight on what they believed will help boost sales. I recommend GBTechive</p>
                                <h6>Allien</h6>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}