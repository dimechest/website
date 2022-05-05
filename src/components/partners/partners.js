import React from 'react';

import Card from '../../UI/card';
import Heading from '../../UI/heading';
import items from '../../utils/item';

import styles from './partners.module.scss';

const Partners = () => (
    <div className='row mt-5 pt-5' style={{ marginBottom: '100px'}}>
      <div className='col-md-8 offset-md-2'>
        <Card className='justify-content-center text-center my-4'>
          <div>
            <Heading>
              OUR TRUSTED PARTNERS
              <div className='d-flex justify-content-center'>
                <div className={styles.line}></div>
              </div>
            </Heading>
            <div className='text-center pt-3 pb-1 about-hdr-txt'>
              Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, 
              sed do eiusmod tempor.
            </div>
          </div>
        </Card>
        <div className='col-md-12 row d-flex'>
          <div className='col-md-3 col-12 text-center' style={{padding:'1px 7px' }}>
            
                  <div>
                    <img className='w-25' src={items[3].pic} alt={items[3].alt} />
                  </div>
                  <div className='fs-5'>Digital boost</div>
                  <div className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
              
          </div>
          <div className='col-md-3 col-12 text-center' style={{padding:'1px 7px' }}>
                  <div>
                    <img className='w-25' src={items[3].pic} alt={items[3].alt} />
                  </div>
                  <div className='fs-5 p-txt'>Digital boost</div>
                  <div className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
          </div>
          <div className='col-md-3 col-12 text-center' style={{padding:'1px 7px' }}>
                  <div>
                    <img className='w-25' src={items[3].pic} alt={items[3].alt} />
                  </div>
                  <div className='fs-5 p-txt'>Digital boost</div>
                  <div className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
          </div>
          <div className='col-md-3 col-12 text-center' style={{padding:'1px 7px' }}>
                  <div>
                    <img className='w-25' src={items[3].pic} alt={items[3].alt} />
                  </div>
                  <div className='fs-5 p-txt'>Digital boost</div>
                  <div className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
          </div>
        </div>
      </div>
    </div>  
);

export default Partners;
