import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <div className="header-wrapper">
            <div className="header-inner-wrapper">
                <div className="logo">
                    <Link to="/">
                        <img src="/assets/riaf-logo.jpg" alt="logo" />
                    </Link>
                </div>
                <nav className='nav-container'>
                    <ul>
                        <Link to="/issue">
                            <li>The Issues</li>
                        </Link>
                        <Link to="/about">
                            <li>About us</li>
                        </Link>
                        <Link to="/our-impact">
                            <li>Our impact</li>
                        </Link>
                        <Link to="/get-involved">
                            <li>Get involved</li>
                        </Link>
                        <Link to="/training">
                            <li>Trainings</li>
                        </Link>
                    </ul>
                </nav>
                <div className="cta">
                    <button href="/call-us" className="btn">Call us</button>
                    <button href="/donate" className="btn">Donate</button>
                </div>
                <div className="hamburger-menu">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    </header>
  );
}  
export default Header;