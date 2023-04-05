import { AiOutlineMobile } from 'react-icons/ai'
import { BiCodeAlt } from 'react-icons/bi'
import { IconContext } from "react-icons";
import Card from './Card.js';
import CData from './CData.js';
import './Services.css'
export default function Services() {
  return (
    <section id='services'>
      <div className="container-fluid">
        <div className='row justify-content-center'>
          <div className='col-md-10 '>
            <div className='services-container'>
              <div data-aos="zoom-in" data-aos-duration="2000" className='text-center'>
                <h2 className=' mt-3 mb-1 text-center heads'>Our Best Services</h2>
                <div className='row justify-content-center line-width'>
                  <div className='line text-center mb-3'></div>
                </div>
              </div>
              <div data-aos="fade-up"
                data-aos-duration="2000" className='row'>
                {
                  CData.map((val, ind) => {
                    // learn map
                    // using map method we dynamicaly get requred data form an object or an array.then 
                    // we pass required id to url and then compare it to array id which is requierd
                    return <Card
                      key={ind}
                      data={val}
                      // id={val.id}
                      // imgsrc={val.imgsrc}
                      // heading={val.heading}
                      // paragraph={val.paragraph}
                      // details={val.details}
                    />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}