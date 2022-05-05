import React from 'react';
import items from '../../utils/item';
import Button from '../button/button';
import Team from '../../images/team.jpeg';
import Banner from '../banner';
import Staff from '../staff';
import Heading from '../../UI/heading';
import Card from '../../UI/card';

import styles from './about.module.scss';

const About = () => {
  return (
    <section className='row my-5 py-5' id='about'>
        <div className='col-lg-4 col-md-12'>
            <div className={`d-flex pt-5 mt-5 ${styles.about_section}`}>
                <div>
                    <Heading>ABOUT US
                        <div className={styles.line}></div>
                    </Heading>
                    
                    <div className={`pt-3 pb-5 ${styles.about_hdr_txt}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut<br /> aliquip ex ea commodo consequat.
                    </div>
                    <Button type='submit'>See more</Button>
                </div>
            </div>
        </div>
        <div className='col-lg-8 col-md-12'>
            <div className='row'>
                <div className='col-md-3 pt-3'>
                    <Card className={styles.justify_end}>
                        <div className={styles.about_team_img}>
                            <Staff pic={items[0].pic} alt={items[0].alt} /> 
                            <Staff pic={items[1].pic} alt={items[1].alt} />
                            <Staff pic={items[0].pic} alt={items[0].alt} />
                        </div>
                    </Card>
                </div>
                <Banner><img className={styles.about_img} src={Team} alt='Teammate' /></Banner> 
            </div>
        </div>
    </section>
  );
};

export default About;
