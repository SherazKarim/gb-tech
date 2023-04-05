import { AiOutlineMobile } from 'react-icons/ai'
import { BiCodeAlt } from 'react-icons/bi'
import { IconContext } from "react-icons";

import { Outlet, Link } from "react-router-dom";
import './Services.css';
export default function Card({data}) {
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    }
    // console.log("props",data)
    return (
        <div className="col-lg-3 col-md-6">
            <div class="card d-flex price-content align-items-center px-3 mx-2 my-3 shadow-sm ">
                <img src={data.imgsrc} className=" mt-3 img img-fluid icons" />
                <h6 className='pt-3 pb-2 head-6 text-center'>{data.heading}</h6>
                <p className='para-p'>
                    {data.paragraph}
                </p>
                <Link onClick={handleLinkClick} to={`/service/details/${data.id}`} className='read-more'>{data.details}</Link>
                <div className='read-line text-center read-more'></div>
                <Outlet />
                <hr />
            </div>
        </div>
    )
}
