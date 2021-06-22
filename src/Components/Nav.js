import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

function NavBar() {
  return (
    <div>
      <span className='header_original'>
        <Link to='/'>
          <span className="logo_white"></span>
          <span className="home">COAWAY</span>
        </Link>
        <Link to='/local'>
          <span className="menu">지역별현황</span>
        </Link>
        <Link to='/inoculation'>
          <span className="menu">접종현황</span>
        </Link>
        <Link to='/precautions'>
          <span className="menu">예방수칙</span>
        </Link>
        <Link to='/vaccineInfo'>
          <span className="menu">백신정보</span>
        </Link>
      </span>
    </div>
    )
}

export default NavBar;