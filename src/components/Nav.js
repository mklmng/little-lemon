import { useState } from 'react';
import hamburger from '../assets/icon-hamburger-menu.svg';
import './Nav.css';

export default function Nav() {
  const [mobile, setMobile] = useState(false);

  const switchDeviceView = () => {
    setMobile(prevMobile => !prevMobile);
  }

  return (
    <nav>
      <ul>
        <li>
          <a href="/" target="_self">Home</a>
        </li>
        <li>
          <a href="/about" target="_self">About</a>
        </li>
        <li>
          <a href="/menu" target="_self">Menu</a>
        </li>
        <li>
          <a href="/reservations" target="_self">Reservations</a>
        </li>
        <li>
          <a href="/order-online" target="_self">Order Online</a>
        </li>
        <li>
          <a href="/login" target="_self">Login</a>
        </li>
      </ul>
      <div id="mobile-nav">
        <img id="burger" src={hamburger} alt="hamburger menu" className="hamburger-menu" onClick={switchDeviceView} />
      </div>
      <div id="mobile-menu" className={mobile ? 'animated' : null}>
        <ul>
          <li>
            <a href="/" target="_self">Home</a>
          </li>
          <li>
            <a href="/about" target="_self">About</a>
          </li>
          <li>
            <a href="/menu" target="_self">Menu</a>
          </li>
          <li>
            <a href="/reservations" target="_self">Reservations</a>
          </li>
          <li>
            <a href="/order-online" target="_self">Order Online</a>
          </li>
          <li>
            <a href="/login" target="_self">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}