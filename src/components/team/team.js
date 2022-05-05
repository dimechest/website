import React from 'react';

import Card from '../../UI/card';
import Heading from '../../UI/heading';
import items from '../../utils/item'; 
import Button from '../button/button';

import styles from './tech.module.css';

const Team = () => (
    <section className='team-wrapper my-5 pt-3' id='team'>
        <div className='row'>
            <div className='col-md-8 offset-md-2'>
                <div className='text-center'>
                    <Heading className='justify-content-center align-items-center'
                    >OUR TEAM
                        <div className={styles.line}></div>
                    </Heading>
                    <div className={`fs-6 pt-2 ${styles.tech_txt}`}>Meet our team of experienced
                        engineers working<br /> tirelessy round 
                        the clock to meet clients needs
                    </div>
                </div>
                <div className='mt-4'>
                    <div className='row mb-4'>
                        <Card className='justify-content-between'>
                            <div className='col-md-4'>
                                <div className={`${styles.team_img_x} d-flex justify-content-center`}><img src={items[2].pic} alt={items[2].alt} /></div>
                            </div>
                            <div className='col-md-4'>
                                <div className={`${styles.team_img_x} d-flex justify-content-center`}><img src={items[2].pic} alt={items[2].alt} /></div>
                            </div>
                            <div className='col-md-4'>
                                <div className={`${styles.team_img_x} d-flex justify-content-center`}><img src={items[2].pic} alt={items[2].alt} /></div>
                            </div>
                        </Card>
                    </div>
                    <div className='row'>
                        <Card className='justify-content-between'>
                            <div className='col-md-4'>
                                <div className={`${styles.team_img_x} d-flex justify-content-center`}><img src={items[2].pic} alt={items[2].alt} /></div>
                            </div>
                            <div className='col-md-4'>
                                <div className={`${styles.team_img_x} d-flex justify-content-center`}><img src={items[2].pic} alt={items[2].alt} /></div>
                            </div>
                            <div className='col-md-4'>
                                <div className={`${styles.team_img_x} d-flex justify-content-center`}><img src={items[2].pic} alt={items[2].alt} /></div>
                            </div>
                        </Card>
                    </div>
                    <Card className='justify-content-center mt-5 pt-4'>
                        <Button type='submit btn-team'>Join us</Button>
                    </Card>  
                </div>
            </div>
        </div>
    </section>
);

export default Team;
