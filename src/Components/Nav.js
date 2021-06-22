import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

function NavBar() {
  return (
    <div>
      <span className='header_original'>
        <Link to='/home'>
          <span className="logo_white"></span>
          <span className="header">COAWAY</span>
        </Link>
      </span>
    </div>
    )
}

export default NavBar;