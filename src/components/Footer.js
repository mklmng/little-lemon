import './Footer.css';
import restaturant from '../assets/restaurant.jpg'

export default function Footer() {
  return (
    <footer>
      <div className="footer-image">
        <img src={restaturant} alt="restaurant" />
      </div>
      <div className="footer-info">
        <div className="doormat-nav">
          <h5>Doormat navigation</h5>
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