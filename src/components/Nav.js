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
        <li>
          <Link to="/" aria-label="Link to Homepage">Home</Link>
        </li>
        <li>
          <Link to="/about" aria-label="Link to About">About</Link>
        </li>
        <li>
          <Link to="/menu" aria-label="Linkt to Menu">Menu</Link>
        </li>
        <li>
          <Link to="/booking" aria-label="Link to Reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/testimonials" aria-label="Link to Testimonials">Testimonials</Link>
        </li>
      </ul>
      <div id="mobile-nav">
        <img id="burger" src={hamburger} alt="hamburger menu" className="hamburger-menu" onClick={switchDeviceView} />
      </div>
      <div id="mobile-menu" className={mobile ? 'animated' : null}>
        <ul>
          <li>
            <Link to="/" aria-label="Link to Homepage">Home</Link>
          </li>
          <li>
            <Link to="/about" aria-label="Link to About">About</Link>
          </li>
          <li>
            <Link to="/menu" aria-label="Linkt to Menu">Menu</Link>
          </li>
          <li>
            <Link to="/booking" aria-label="Link to Reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/testimonials" aria-label="Link to Testimonials">Testimonials</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}