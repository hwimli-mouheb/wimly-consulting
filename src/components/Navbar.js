import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
      console.log(button);
    }
  };

  useEffect(() => {
    showButton();
  },);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        
        <div className='navbar-container'>
          <div className='logoContainer'>
            <Link to='/' className='logoLinkContainer' onClick={closeMobileMenu}>
          <p></p></Link>
          <img className='navbar-logo' src='uploads/images/wimlyLogo.png' alt='#' />
          </div>
          
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/employee'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Find a job
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/employer'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Find Talent
              </Link>
            </li> 
            

            
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;