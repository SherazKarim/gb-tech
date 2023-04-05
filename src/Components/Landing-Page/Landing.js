import bg2 from '../Landing-Page/image/bg-2.jpg'
import bg1 from '../Landing-Page/image/bg-5.jpg'
import bg4 from '../Landing-Page/image/bg-4.jpg'
import './Landing.css'
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { bounce, fadeInLeft, fadeInRight, fadeInUp } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
// import "animate.css/animate.min.css";
// import ScrollAnimation from 'react-animate-on-scroll';
// import Aos from 'aos'
// import "aos/dist/aos.css"
import React from 'react'

export default function Landing() {
  const styles = StyleSheet.create({
    fadeInUp: {
      animationName: fadeInUp,
      animationDuration: '.8s',
      // width:'100px'
      height: '100px'
    },
    fadeInRight: {
      animationName: fadeInRight,
      animationDuration: '1s',
      width: '800px'
    },
    fadeInRightSmall: {
      animationName: fadeInRight,
      animationDuration: '1s',
      width: '100px'
    }
  })
  return (
    <section id='home'>
      <div className='container-fluid main-container'>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              {/* <img className='banner' src={bg1} /> */}
              <div className="container-fluid banner1 img-fluid">
                <div className="headings pt-5 " >
                  <div className='container head' style={{ overflow: 'hidden' }}>
                    <div className={css(styles.fadeInRight)}>
                      <h1 className='tech-heading py-3'>Tecnology For The Innovators</h1>
                    </div>
                    <div className={css(styles.fadeInRightSmall)}>
                      <h2 className='pb-3'>Innovation</h2>
                    </div>
                    <div className={css(styles.fadeInUp)}>
                      <Button className='px-5 btn-landing' variant="outline-light">Get Started</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              {/* <img className='banner' src={bg2} /> */}
              <div className="container-fluid banner2 img-fluid">
                <div className="headings pt-5 " >
                  <div className='container head' style={{ overflow: 'hidden' }}>
                    <div className={css(styles.fadeInRight)}>
                      <h1 className='py-3 tech-heading'>Tecnology For The Innovators</h1>
                    </div>
                    <div className={css(styles.fadeInRightSmall)}>
                      <h2 className='pb-3'>Innovation</h2>
                    </div>
                    <div className={css(styles.fadeInUp)}>
                      <Button className='px-5 btn-landing' variant="outline-light">Get Started</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              {/* <img className='banner' src={bg4} /> */}
              <div className="container-fluid banner3 img-fluid">
                <div className="headings pt-5 " >
                  <div className='container head' style={{ overflow: 'hidden' }}>
                    <div className={css(styles.fadeInRight)}>
                      <h1 className='py-3 tech-heading'>Tecnology For The Innovators</h1>
                    </div>
                    <div className={css(styles.fadeInRightSmall)}>
                      <h2 className='pb-3'>Innovation</h2>
                    </div>
                    <div className={css(styles.fadeInUp)}>
                      <Button className='px-5 btn-landing' variant="outline-light">Get Started</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  )
}