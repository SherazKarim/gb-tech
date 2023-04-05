import web from '../Navbar/images/logo.png';
import classes from './Navbar.css';
import { NavLink } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import humbuger from './images/cc.png'

export default function Navbar() {
    const [active, setActive] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (location.pathname !== "/") {
            setIsScrolled(true);
        }
    }, [location]);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    return (
        <div className="container-fluid navbar-container bg-primary-color">
            <div className="navbar navbar-expand-lg navbar-light col-md-12 px-3 px-md-5 fixed-top scrolled" style={{ backgroundColor: isScrolled || location.pathname !== '/'  ? '#072038' : 'transparent'}}
                fixed="top"
                expand="lg">
                <div className="container-fluid col-lg-2">
                    <img className="navbar-brand img-img-fluid" src={web} height={'58px'} to="#" />
                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse col-md-10" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Nav variant='pills' defaultActiveKey="/#home">
                            <li onClick={() => setActive("home")}><Nav.Item><Nav.Link style={{ color: 'white' }}><NavHashLink className={active === "home" ? "activeTab" : ""} to="/#home">Home</NavHashLink></Nav.Link></Nav.Item></li>
                            <li onClick={() => setActive("about")}><Nav.Item><Nav.Link style={{ color: 'white' }}><NavHashLink className={active === "about" ? "activeTab" : ""} to="/#about">About</NavHashLink></Nav.Link></Nav.Item></li>
                            <li onClick={() => setActive("services")}><Nav.Item><Nav.Link style={{ color: 'white' }}><NavHashLink className={active === "services" ? "activeTab" : ""} to="/#services">Services</NavHashLink></Nav.Link></Nav.Item></li>
                            <li onClick={() => setActive("prices")}><Nav.Item><Nav.Link style={{ color: 'white' }}><NavHashLink className={active === "prices" ? "activeTab" : ""} to='/#prices'>Prices</NavHashLink></Nav.Link></Nav.Item></li>
                            <li onClick={() => setActive("team")}><Nav.Item><Nav.Link style={{ color: 'white' }}><NavHashLink className={active === "team" ? "activeTab" : ""} to='/#team'>Team</NavHashLink></Nav.Link></Nav.Item></li>
                            <li onClick={() => setActive("testimonial")}><Nav.Item><Nav.Link style={{ color: 'white' }}><NavHashLink className={active === "testimonial" ? "activeTab" : ""} to='/#testimonial'>Testimonial</NavHashLink></Nav.Link></Nav.Item></li>
                            <li onClick={() => setActive("blog")}><Nav.Item><Nav.Link style={{ color: 'white' }}><NavHashLink className={active === "blog" ? "activeTab" : ""} to='/#blog'>Blog</NavHashLink></Nav.Link></Nav.Item></li>
                            <li onClick={() => setActive("contact")}><Nav.Item><Nav.Link style={{ color: 'white' }}><NavHashLink className={active === "contact" ? "activeTab" : ""} to='/#contact'>Contact</NavHashLink></Nav.Link></Nav.Item></li>&nbsp;
                        </Nav>
                        <div className=' adress'>
                            <div className="vl">
                            </div>
                            <div className=''>
                                <NavLink activeClassName="active-link" style={{ color: 'white' }} className="nav-link" href="#"> 346 200 3192</NavLink>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>

    )
}




