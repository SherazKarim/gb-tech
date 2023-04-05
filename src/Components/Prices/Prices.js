import './price.css';
import Sdata from './Data.js'
import Card from './Card';
export default function Prices() {
  return (
    <>
      <section id='prices'>
        <div className="container col-md-10 mb-3">
          <div data-aos="zoom-in"
            data-aos-duration="3000" className="my-3">
            <h1 className="text-center heads">Affordable Prices</h1>
            <div className='row justify-content-center line-affordable'>
              <div className='line text-center mb-4'></div>
            </div>
          </div>
          <div className="row">
            <div className="mx-auto" >
              <div data-aos="fade-up"
                data-aos-duration="3000" style={{ overflow: 'hidden' }} className='row gy-4'>
                {
                  Sdata.map((val, ind) => {
                    return <Card
                      key={ind}
                      pricesData={val}
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
      </section>
    </>

  )
}