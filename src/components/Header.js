import React from 'react';
import react_logo from '../images/logo512.png'

export default function Header(){
    return (
      <header>
        <nav className='nav'>
          <span>
            <img src={react_logo} className='nav-logo' alt='react logo'/>
            <span className='logo_char'>React Facts</span>
          </span>
          <ul className='nav-items'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
}

// export default Header;
