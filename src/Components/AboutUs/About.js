import { Outlet } from 'react-router-dom'
import AboutUs from './AboutUs';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import eye from './images/eye.PNG';
import group from './images/group.png'
import { Link } from 'react-router-dom';
function About() {
    return (
        <>
            <div className='mt-5 pt-3'>
            </div>
            <section id='about'>
        <div className="container mt-3 col-md-10">
            <div className='row'>
                <div style={{ overflow: 'hidden' }} data-aos="fade-up" data-aos-duration="2000" className="col-md-6">
                    <div className='image'>
                        <img className='img img-fluid' src={group} />
                    </div>

                </div>
                <div data-aos="fade-up" data-aos-duration="3000" className='col-md-6 mt-5 about-us'>
                    <h2 className='fonts-details mb-4' >Welcome to GB Techive</h2>
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
                        {/* <Link className='btn btn-link' to="/aboutUs">Read More</Link> */}
                    {/* <Button className='px-5' variant="outline-dark"><Link to="/aboutUs" className='btn btn-get-started'>Read More</Link> </Button> */}
                </div>

            </div>
        </div>
        </section>
            <section id='about'>
                <div className='container'>
                    <div className='col-md-10'>
                        <div className='row mt-5'>
                            <div className='col-md-8 about-us'>
                                <h2 className='text-center mb-2'>Our Vision</h2>
                                <p>To be recognized as a leading provider of consulting, focused on leveraging technology for the development 
                                    and execution of strategies in our sectors of expertise..</p>
                            </div>
                            <div className='col-md-4'>
                                <img src={eye} className='img img-fluid' style={{ width: '470px', height: '300px' }}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='col-md-12'>
                        <div className='row mt-5'>
                            <div className='col-md-6 about-us'>
                                <h2 className='text-center mb-3'>Our Mission</h2>
                                <p>To offer our clients with the best value; providing an exemplary workspace for the youth of GB; promoting the IT sector in Gilgit-Baltistan;
                                     living up to our responsibility towards society by being an asset in the communities we operate in.. To offer our clients with the best value;
                                      providing an exemplary workspace for the youth of GB; promoting the IT sector 
                                    in Gilgit-Baltistan; living up to our responsibility towards society by being an asset in the communities we operate in..</p>
                            </div>
                            <div className='col-md-6 about-us'>
                                <h2 className='text-center mb-3'>Our Objective</h2>
                                <p>To offer our clients with the best value; providing an exemplary workspace for the youth of GB; promoting the IT sector in Gilgit-Baltistan;
                                     living up to our responsibility towards society by being an asset in the communities we operate in.. To offer our clients with the best value;
                                      providing an exemplary workspace for the youth of GB; promoting the IT sector 
                                    in Gilgit-Baltistan; living up to our responsibility towards society by being an asset in the communities we operate in..</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )

}
export default About;