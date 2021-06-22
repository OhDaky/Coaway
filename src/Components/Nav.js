import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

function NavBar() {
  return (
    <div>
      <span className='header_original'>
        <img className="logo_white"></img>
        <p className="header">COAWAY</p>
      </span>
    </div>
    )
}

export default NavBar;