import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import web1 from './images/web_dev_1.png';
import web2 from './images/web_dev_2.png';
import web3 from './images/web_dev_3.png';
import Service from './images/serviceDetails.PNG';
import CData from './CData';



export default function ServiceDetails() {
    // use param always returns value in string so we use + before id to convert it into int value
    const { id } = useParams();
    // in the above line it returns an id in url which will be compared with the data id
    const [count, setCount] = useState()

    useEffect(() => {
        // console.log("she",CData,id)
        setCount(CData.find(data => data.id === +id))

    }, [id])
    // we give id here because whenever id changes it render itself
    console.log("Services.js", count);

    return (
        <>
            <section id="service-details">
                <div class="container mt-5 pt-5">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="about-img">
                                <div class="about-img-1">
                                    <img src={Service} className="img-width img-fluid" alt="Image" />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div class="section-header mb-4">
                                <h2 className='main-headings'>{count?.subDetails.heading}</h2>
                            </div>
                            <div class="about-text">
                                <p className=''>{count?.subDetails.paragraph}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={web1} style={{ height: "380px", width: "380px" }} />
                        </div>
                        <div className="col-md-4">
                            <img src={web2} style={{ height: "380px", width: "380px" }} />
                        </div>
                        <div className="col-md-4">
                            <img src={web3} style={{ height: "380px", width: "380px" }} />
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}