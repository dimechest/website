import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../../images/logo.png';
import Facebook from '../../images/fbk.png';
import LinkedIn from '../../images/linkin.png';
import Instagram from '../../images/inst.png';
import Twitter from '../../images/twit.png';

import './footer.css';

const Footer = () => {
  return (
    <>
        <div className='footer-wrapper py-5'>
            <div className='col-md-10 offset-md-1'>
                <div className='row'>
                    <div className='col-md-3'>
                        <img src={Logo} alt='Dimechest Logo' width='150px' />
                    </div>
                    <div className='col-md-9'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='hdr-list'>USEFUL LINKS</div>
                                <ul className='footer-list'>
                                    <li> <i class="bi bi-chevron-right"></i>
                                        <Link to='about'>ABOUT US</Link></li>
                                    <li><i class="bi bi-chevron-right"></i>
                                        <Link to='team'>OUR TEAM</Link></li>
                                    <li><i class="bi bi-chevron-right"></i>
                                        <a href='#careers'>CAREER</a></li>
                                    <li><i class="bi bi-chevron-right"></i>
                                        <Link to='projects'>PROJECTS</Link></li>
                                    <li><i class="bi bi-chevron-right"></i>
                                        <a href='#contact'>CONTACT US</a></li>
                                </ul>
                            </div>
                            <div className='col-md-4'>
                                <div className='hdr-list'>Head office</div>
                                <div className='ftr-add'> 4517 Washington Ave. Manchester, Lagos, Nigeria
                                </div>
                                <div className='ftr-add'>Support@dimechest.com</div>
                                <div className='ftr-add'>+234 813812 1986</div>
                            </div>
                            <div className='col-md-4'>
                                <div className='hdr-list'>opening hour</div>
                                <div className='ftr-add'>Mon - Sat : 8:00 - 17:00</div>
                                <div className='ftr-add'>Sun : Closed</div>
                                <ul className='ftr-list'>
                                    <li><img src={Facebook} alt='facebook' /></li>
                                    <li><img src={LinkedIn} alt='linkedIn' /></li>
                                    <li><img src={Twitter} alt='twitter' /></li>
                                    <li><img src={Instagram} alt='instagram' /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='footer py-3 text-center'>
            <div>Copyright © 2022. All right reserved</div>
        </div>
    </>
  )
}

export default Footer;