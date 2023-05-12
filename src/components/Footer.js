import './Footer.css';
import { Link } from 'react-router-dom';
import restaurant from '../assets/restaurant.jpg'

export default function Footer() {
  return (
    <footer>
      <div className="footer-image">
        <img src={restaurant} alt="restaurant" />
      </div>
      <div className="footer-info">
        <div className="doormat-nav">
          <h5>Doormat navigation</h5>
          <nav>
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
          </nav>
        </div>
        <div className="contact">
          <h5>Contact</h5>
          <ul>
            <li>
              <address>Address</address>
            </li>
            <li>
              Phone number
            </li>
            <li>
              email
            </li>
          </ul>
        </div>
        <div className="social-media">
          <h5>Social media links</h5>
          <ul>
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}