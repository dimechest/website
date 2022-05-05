import React from 'react';
import { Link } from 'react-scroll';

import Button from '../button/button';
import Icon from '../../images/Vector.png';
import Logo from '../../images/logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar px-4' style={{ margin: '0 10px 0 10px' }}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="home">
            <img src={Logo} alt='Dimechest Logo' width='250px' />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
            </ul>
            <div className="d-flex">
              <ul className='navbar-nav mb-2 pr-5 mb-lg-0'>
                <li className="nav-item mx-4">
                  <Link className="nav-link active" aria-current="page" to="about">About Us</Link>
                </li>
                <li className="nav-item mx-4">
                  <Link className="nav-link" to="services">Services</Link>
                </li>
                <li className="nav-item mx-4">
                  <Link className="nav-link" to="careers">Careers</Link>
                </li>
              </ul>
              <Button type='submit'>
                <img className='btn-icon' src={Icon} alt={'Button icon'} /> 
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
