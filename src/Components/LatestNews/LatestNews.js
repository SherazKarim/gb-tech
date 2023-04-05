import News1 from './Images/Rectangle 55.jpg'
import { VscCalendar } from 'react-icons/vsc'
import { IconContext } from 'react-icons/lib'
import './LatestNews.css'
export default function LatestNews() {
    return (
        <section id='blog'>
            <div className="container mt-5 pt-5">
                <div className="text-center head-div">
                    <h2 className='heads'>Latest News and Events</h2>
                    <div className='row justify-content-center line-check'>
                        <div className='line-news text-center mb-4'></div>
                    </div>
                </div>
                <div className='row'>
                <div className="col-md-4">
                        <div className="parent d-flex text-center justify-content-center">
                            <img className="img-fluid mb-3 img-size" src={News1} />
                            <div className="clients-transparent py-3 px-4">
                                <h6 className="text-bold">Web Developer</h6>
                                <div className='cont-data justify-content-center'>
                                    <IconContext.Provider value={{ size: '20', color: '#FF6347' }}>
                                        <VscCalendar />
                                    </IconContext.Provider> &nbsp;
                                    <p>2021-12-02</p> &nbsp;
                                    <p>02-20-36</p>
                                </div>
                                <p className=''>Lorem ipsum dolor sit amet,</p>
                                <h6 className='details'>Read More</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="parent d-flex text-center justify-content-center">
                            <img className="img-fluid mb-3 img-size" src={News1} />
                            <div className="clients-transparent py-3 px-4">
                                <h6 className="text-bold">Web Developer</h6>
                                <div className='cont-data justify-content-center'>
                                    <IconContext.Provider value={{ size: '20', color: '#FF6347' }}>
                                        <VscCalendar />
                                    </IconContext.Provider> &nbsp;
                                    <p>2021-12-02</p> &nbsp;
                                    <p>02-20-36</p>
                                </div>
                                <p className=''>Lorem ipsum dolor sit amet,</p>
                                <h6 className='details'>Read More</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="parent d-flex text-center justify-content-center">
                            <img className="img-fluid img-size" src={News1} />
                            <div className="clients-transparent py-3 px-4">
                                <h6 className="text-bold">Web Developer</h6>
                                <div className='cont-data justify-content-center'>
                                    <IconContext.Provider value={{ size: '20', color: '#FF6347' }}>
                                        <VscCalendar />
                                    </IconContext.Provider> &nbsp;
                                    <p>2021-12-02</p> &nbsp;
                                    <p>02-20-36</p>
                                </div>
                                <p className=''>Lorem ipsum dolor sit amet,</p>
                                <h6 className='details'>Read More</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}