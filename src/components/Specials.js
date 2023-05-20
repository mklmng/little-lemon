import './Specials.css';
import { Link } from 'react-router-dom';

import greeksalad from '../assets/greek_salad.jpg';
import bruschetta from '../assets/bruschetta.jpg';
import lemondessert from '../assets/lemon_dessert.jpg'

export default function Specials() {
  return (
    <article className="bg-specials">
      <div className="specials-header">
        <div className="specials">
          <h4>This weeks specials!</h4>
          <Link to="/menu" className='cta' aria-label="Link to Menu">Online Menu</Link>
        </div>
      </div>

      <div className="specials-cards">
        <div className="card-container">
          <div className="card">
            <img src={greeksalad} alt="Greek salad" />
            <div className="card-details">
              <h5 className="card-title">Greek salad</h5>
              <span className="card-price">$12.99</span>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished
                with crunchy garlic and rosemary croutons.
              </p>
              <Link to="/menu" className='cta-secondary' aria-label="Link to Menu">Order a delivery</Link>
            </div>
          </div>

          <div className="card">
            <img src={bruschetta} alt="Bruschetta" />
            <div className="card-details">
              <h5 className="card-title">Bruchetta</h5>
              <span className="card-price">$5.99</span>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
              </p>
              <Link to="/menu" className='cta-secondary' aria-label="Link to Menu">Order a delivery</Link>
            </div>
          </div>

          <div className="card">
            <img src={lemondessert} alt="Lemon dessert" />
            <div className="card-details">
              <h5 className="card-title">
                Lemon dessert
              </h5>
              <span className="card-price">$5.00</span>
              <p>
                This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
              </p>
              <Link to="/menu" className='cta-secondary' aria-label="Link to Menu">Order a delivery</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}