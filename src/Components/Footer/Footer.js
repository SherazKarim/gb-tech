import React from 'react';
import { GoLocation } from 'react-icons/go'
import { IconContext } from 'react-icons/lib'
import { IoMdCall } from 'react-icons/io'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { FaFacebookSquare } from 'react-icons/fa'
import { CgInstagram } from 'react-icons/cg'
// import {AiOutlineMail} from 'react-icons/ai'
import { HashLink } from 'react-router-hash-link';
import './Footer.css'
import { Link, NavLink } from 'react-router-dom';
import CData from '../Services/CData';

export default function Footer() {
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    }
    // const id = 3;
    return (
        <div class="footer mt-5 pt-5" data-wow-delay="0.3s" id="footer">
            <div class="container">
                <div class="row">

                    <div class="col-md-3">
                        <div class="footer-contact">
                            <h3 className='text-white mb-5 gb-head'>GBTechive</h3>
                            <p className='text-white address'><IconContext.Provider value={{ size: '20', color: 'FF6347' }} >
                                <GoLocation />&nbsp;
                            </IconContext.Provider><a className='icon-tag' href='https://www.google.com/maps/place/Houston,+TX,+USA/@29.8174782,-95.6814924,10z/data=!3m1!4b1!4m5!3m4!1s0x8640b8b4488d8501:0xca0d02def365053b!8m2!3d29.7604267!4d-95.3698028'>
                                    Houston, Texas, USA</a></p>
                            <p className='text-white address'><IconContext.Provider value={{ size: '20', color: 'FF6347' }} >
                                <IoMdCall />&nbsp;
                            </IconContext.Provider><Link className='icon-tag' to='/1 346 200 3192'>1 346 200 3192</Link></p>
                            <p className='text-white mb-5 address'><IconContext.Provider value={{ size: '20', color: 'FF6347' }} >
                                <FaFacebookSquare />&nbsp;
                            </IconContext.Provider><a className='icon-tag' href='https://www.google.com/search?q=gmail+login&rlz=1C1BNSD_en__987__987&oq=gma&aqs=chrome.0.69i59j69i57j35i39j0i67j0i433i512j69i61l2j69i60.743j0j7&sourceid=chrome&ie=UTF-8'>
                                    info@gbtechive.com</a></p>
                        </div>
                    </div>
                    <div class="col-md-3 ">
                        <div class="footer-link ">
                            <h4 className='text-white mb-5 gb-head'>Services</h4>
                            <ul>
                                {
                                    CData.map((val, ind) => {
                                        return <div className='hover-color my-2'><li className='list-icon'><NavLink onClick={handleLinkClick} to={`/service/details/${val.id}`}>{val.heading}</NavLink></li></div>
                                    })}
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-3 ">
                        <div class="footer-link ">
                            <h4 className='text-white mb-5 gb-head'>Usefull Links</h4>
                            <ul>
                                <div className='hover-color my-2'><li className='list-icon'><HashLink to="/#about">About Us</HashLink></li></div>
                                <div className='hover-color my-2'><li className='list-icon'><HashLink to='/#services'>Our Services</HashLink></li></div>
                                <div className='hover-color my-2'><li className='list-icon'><HashLink to='/#prices'>Affordable Prices</HashLink></li></div>
                                <div className='hover-color my-2'><li className='list-icon'><HashLink to='/#team'>Our Team</HashLink></li></div>
                                <div className='hover-color my-2'><li className='list-icon'><HashLink to='/#testimonial'>Valueable Clients</HashLink></li></div>
                                <div className='hover-color my-2'><li className='list-icon'><HashLink to='/#blog'>Blog</HashLink></li></div>
                                <div className='hover-color my-2'><li className='list-icon'><HashLink to="/#contact">Contact</HashLink></li></div>
                            </ul>
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="footer-newsletter">
                            <h4 className='text-white mb-5 anchor-tagfollow-us'>Follow Us</h4>
                            <p className='text-white anchor-tag'>
                                Link to our social media accounts
                            </p>
                            <div class="follow-us-social text-white anchor-tag ">
                                <a className='text-white anchor-tag' href="tw link"><IconContext.Provider value={{ size: '40', color: 'white' }} >
                                    <AiFillTwitterSquare />&nbsp;
                                </IconContext.Provider></a>
                                <a className='text-white anchor-tag' href="https://www.facebook.com/gbtechive/"><IconContext.Provider value={{ size: '34', color: 'white' }} >
                                    <CgInstagram />&nbsp;
                                </IconContext.Provider></a>
                                <a className='text-white anchor-tag' href="https://www.instagram.com/p/CY38McdM63N/"><IconContext.Provider value={{ size: '32', color: 'white' }} >
                                    <BsLinkedin />&nbsp;
                                </IconContext.Provider></a>
                                <a className='text-white anchor-tag' href="https://www.linkedin.com/company/76108480/"><IconContext.Provider value={{ size: '36', color: 'white' }} >
                                    <FaFacebookSquare />
                                </IconContext.Provider></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container copyright">
                <div class="row">
                    <div class="col-md-6">
                        <p className='text-white anchor-tag'>&copy; <a className='text-white anchor-tag' href="#">GBTechive.</a>, All Right Reserved.</p>
                    </div>
                    <div class="col-md-6">
                        <p className='text-white anchor-tag'>Privacy Policy <a className='text-white anchor-tag' href="#">Terms and Conditions</a></p>
                    </div>
                </div>
            </div>
        </div>

    );
}