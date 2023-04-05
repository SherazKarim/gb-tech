import Button from 'react-bootstrap/Button';
import group from './images/group.png'
import './AboutUs.css'
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import About from './About';
export default function AboutUs() {
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    }
    return (
        <section id='about'>
        <div className="container mt-3 col-md-10">
            <div className='row'>

                <div style={{ overflow: 'hidden' }} data-aos="fade-up" data-aos-duration="2000" className="col-md-6">
                    <div className='image'>
                        <img className='img img-fluid' src={group} />
                    </div>

                </div>
                <div data-aos="fade-up" data-aos-duration="3000" className='col-md-6 mt-5 about-us'>
                    <h2 className='fonts' >About Us</h2>
                    <p>GBTechive is a world-class, purpose-driven consultancy firm focused on driving consumer adoption towards
                        digital strategies and solutions, with core specializations in Digital Marketing Strategies, Tele-Health,
                        Bookkeeping, and Health Transcriptions. As a company established in the era of the digital world, GBTechive
                        aims to throttle innovation and build thriving relationships with our many technology partners and consumers.
                        Our objective: to fuel innovation, first and foremost, dedicating ourselves to unleashing the full potential
                        of our customer base worldwide; committing to providing the youth of Gilgit Baltistan with employment
                        opportunities in the field of IT through our platform, allowing them to grow their skill base with on-field
                        experience. With our experience and consultative approach, we strive to steer IT administrators,
                        managers and executive
                        back to their core functions – managing and delivering impactful services to their internal customers.</p>
                        <Link onClick={handleLinkClick} className='btn btn-link' to="/aboutUs">Read More</Link>
                    {/* <Button className='px-5' variant="outline-dark"><Link to="/aboutUs" className='btn btn-get-started'>Read More</Link> </Button> */}
                </div>

            </div>
        </div>
        </section>
    )
}