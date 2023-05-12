import { useState } from 'react';
import { Link } from 'react-router-dom';

import hamburger from '../assets/icon-hamburger-menu.svg';
import './Nav.css';

export default function Nav() {
  const [mobile, setMobile] = useState(false);

  const switchDeviceView = () => {
    setMobile(prevMobile => !prevMobile);
  }

  return (
    <nav className="main-nav">
      <ul>
      <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/booking">Reservations</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
        </ul>
      </ul>
      <div id="mobile-nav">
        <img id="burger" src={hamburger} alt="hamburger menu" className="hamburger-menu" onClick={switchDeviceView} />
      </div>
      <div id="mobile-menu" className={mobile ? 'animated' : null}>
        <ul>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/booking">Reservations</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
        </ul>
        </ul>
      </div>
    </nav>
  );
}