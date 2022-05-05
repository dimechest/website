import React from 'react';

import Navbar from '../navbar/navbar';
import Button from '../button/button';
import Hero from '../../images/hero2.png';
import Facebook from '../../images/fbk.png';
import LinkedIn from '../../images/linkin.png';
import Instagram from '../../images/inst.png';
import Twitter from '../../images/twit.png';

import './home.css';

const Home = () => {
  return (
      <section className='section-bgcolor' id='home'>
        <Navbar />

        <div className='pt-5 mt-3' id='home'>
          <div className='row hero-section'>
            <div className='col-sm-4'>
              <div className='hero-hdr pb-3 lh-base'>Let’s bring <br /> your ideas to <br /> reality.</div>
              <div className='hero-hdr-txt mb-3'>
                Top software development agency that offers fully optimized and affordable 
                digital solutions for startups, innovators and business owners.
              </div>
              <Button type='submit'>Get in touch</Button>
            </div>

            <div className='col-sm-8' style={{ padding: '0px'}}>
              <div className='row'>
                <div className='col-sm-10 mx-0'>
                  <img className='hero-img' src={Hero} alt={'Hero'} />
                </div>
                <div className='col-sm-2 d-flex align-items-center justify-content-end'>
                  <div className='d-flex align-items-center'>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item list-group-item-flush">
                          <img src={Facebook} alt='facebook' />
                        </li>
                        <li className="list-group-item list-group-flush">
                          <img src={LinkedIn} alt='linkedIn' />
                        </li>        
                        <li className="list-group-item">
                          <img src={Twitter} alt='twitter' />
                        </li>
                        <li className="list-group-item">
                          <img src={Instagram} alt='instagram' />
                        </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='row hdr-icons'>
                <div className=' d-flex justify-content-around'>
                  <div className='d-flex justify-content-between w-25'>
                    <div className='hero-rectangle'>31</div>
                    <div>Successful<br /> software<br /> deployed</div>
                  </div>

                  <div className='d-flex justify-content-between w-25 align-items-center'>
                    <div className='hero-rectangle'>90</div>
                    <div>satisfied<br /> customers</div>
                  </div>

                  <div className='d-flex w-25'>
                    <div className='hero-rectangle mr-4' style={{ marginRight: '25px' }}>03</div>
                    <div>Years<br /> IN <br /> service</div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Home;
