import React from 'react';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
import Design from '../../images/vector1.png';
import Web from '../../images/vector2.png';
// import { generateSlides } from '../../utils/generateSlides';
// import Mobile from '../../images/vector3.png';

import '@splidejs/splide/css';
import styles from './services.module.css';
import Heading from '../../UI/heading';

const Services = () => {
  // const splide = new Splide( '.splide' ).mount();

  // splide.options = {
  //   perPage: 4,
  // };
  return (
    <section className={`row ${styles.services} py-4 d-flex justify-content-center`} id='services'>
      <div className='col-md-12 text-center'>
        <Heading className='justify-content-center align-items-center'
        >Our services
        <div className={styles.line}></div>
        </Heading>
        
        <div className={`${styles.services_hdr_txt} py-3 mb-5`}>
          We offer a wide range of services<br /> some of which include the following services
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <div className='row mb-5'>
            {/* <Splide options={ {
              rewind: true,
                width : 800,
                perPage: 3,
                breakpoints: {
                  640: {
                    perPage: 1,
                  },
                },
                gap   : '1rem',
              } }
              aria-label="My Favorite Images">
                 {generateSlides().map( slide => (
                  <SplideSlide key={ slide.src }>
                    <img src={ slide.src } alt={ slide.alt }/>
                  </SplideSlide>
                ) ) } */}
              {/* <SplideSlide>
                  <img className={`${styles.cards_img} py-3`} src={Design} alt='UI/UX Design' />
                  <div className='fs-6 mb-1 py-1'>UI/UX Design
                    <div className={styles.cards_line}></div>
                  </div>
              </SplideSlide>
              <SplideSlide>
                  <img className={`${styles.cards_img} py-3`} src={Design} alt='UI/UX Design' />
                  <div className='fs-6 mb-1 py-1'>UI/UX Design
                    <div className={styles.cards_line}></div>
                  </div>
              </SplideSlide> */}
            {/* </Splide> */}

              <div className='col-md-4'>
                <div className={`${styles.cards} ${styles.services_banner} text-center pb-5 px-5`}>
                  <img className={`${styles.cards_img} py-3`} src={Design} alt='UI/UX Design' />
                  <div className='fs-6 mb-1 py-1'>UI/UX Design
                    <div className={styles.cards_line}></div>
                  </div>
                  
                  <div className={styles.services_txt}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                   eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                   adipiscing elit. 
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
              <div className={`${styles.cards} ${styles.services_banner_} text-center pb-6 px-6`}>
                  <img className={`${styles.cards_img} py-3`} src={Web} alt='Web development' />
                  <div className='fs-6 mb-1 py-1'>WEB DEVELOPMENT
                    <div className={styles.cards_line}></div>
                  </div>
                  
                  <div className='services-txt'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                   eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                   adipiscing elit. 
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
              <div className={` ${styles.cards} ${styles.services_banner} text-center pb-5 px-5`}>
                  <img className={`${styles.cards_img} py-3`} src={Design} alt='Mobile development' />
                  <div className='fs-6 mb-1 py-1'>MOBILE APP DEV
                    <div className={styles.cards_line}></div>
                  </div>
                  
                  <div className={styles.services_txt}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                   eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                   adipiscing elit. 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Services;