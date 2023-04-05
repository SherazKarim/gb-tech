import { Link } from 'react-router-dom'
import { NavLink } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import './price.css'
// import Button from 'react-bootstrap'
export default function Card({pricesData}) {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
}
  return (
    <div className="col-lg-6 my-2">
      <div className="pricing-card d-flex justify-content-center align-items-space-between">
        <div className="icon d-flex justify-content-center align-items-center image_web">
          <img className="w-25 img-fluid" src={pricesData.imgsrc} alt="Image" />
        </div>

        <div className="price-content p-4">
          <h3>{pricesData.heading}</h3>
          <p className='para-prices'>
            {pricesData.paragraph}
          </p>
          {pricesData.details!== "Contact Us"?<Link onClick={handleLinkClick} to={`/frontend/${pricesData.id}`} ><Button className="btn-prices bg-dark text-white px-4">{pricesData.details}</Button></Link>:
          <NavLink href="#contact"><Button className="btn-prices bg-dark text-white px-4">{pricesData.details}</Button></NavLink>}
        </div>
      </div>
    </div>
  )
}