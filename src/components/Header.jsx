import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
