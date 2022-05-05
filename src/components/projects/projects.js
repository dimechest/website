import React from 'react';

import items from '../../utils/item';
import ProjectX from '../../images/projectx.png';
import Staff from '../staff';
import Banner from '../banner';
import Button from '../button/button';
import Card from '../../UI/card';
import Heading from '../../UI/heading';

import styles from './projects.module.css';

const Projects = () => {
  return (
    <section className='row my-5 py-5' id='projects'>
        <div className='col-md-8'>
            <div className='row'>
                <Banner><img className={styles.project_img} src={ProjectX} alt='Projects' /></Banner> 
                <div className='col-md-3 flex-column pt-3'>
                        <Staff pic={items[0].pic} alt={items[0].alt} /> 
                        <Staff pic={items[1].pic} alt={items[1].alt} />
                        <Staff pic={items[0].pic} alt={items[0].alt} />
                </div>
            </div>
        </div>
        <div className='col-md-4'>
            <Card className='d-flex text-start pt-5 mt-5 text-center'>
                <div>
                    <Heading>OUR PROJECTS
                        <div className={styles.line}></div>
                    </Heading>
                    
                    <div className={`text-start pt-3 pb-5 ${styles.project_hdr}`}>
                    Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, 
                    sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam, quis 
                    nostrud <br />exercitation ullamco laboris nisi ut<br /> aliquip ex ea commodo consequat.
                    </div>
                    <Button type='submit'>SEE PORTFOLIO</Button>
                </div>
            </Card>
        </div>
    </section>
  )
}

export default Projects;
