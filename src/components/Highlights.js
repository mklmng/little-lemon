import './Highlights.css';
import greeksalad from '../assets/greek_salad.jpg';
import bruschetta from '../assets/bruschetta.jpg';
import lemondessert from '../assets/lemon_dessert.jpg'

export default function Highlights() {
  return (
    <article className="bg-specials">
      <div className="specials-header">
        <div className="specials">
          <h1>This weeks specials!</h1>
          <a href="/menu" className="cta">
            Online Menu
          </a>
        </div>
      </div>

      <div className="specials-cards">
        <div className="card-container">
          <div className="card">
            <img src={greeksalad} alt="Greek salad" />
            <div className="card-details">
              <h4 className="card-title">
                Greek salad
              </h4>
              <span className="card-price">$12.99</span>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished
                with crunchy garlic and rosemary croutons.
              </p>
              <a href="/order-online" className="cta-secondary">Order a delivery</a>
            </div>
          </div>

          <div className="card">
            <img src={bruschetta} alt="Bruschetta" />
            <div className="card-details">
              <h4 className="card-title">Bruchetta</h4>
              <span className="card-price">$5.99</span>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
              </p>
              <a href="/order-online" className="cta-secondary">Order a delivery</a>
            </div>
          </div>

          <div className="card">
            <img src={lemondessert} alt="Lemon dessert" />
            <div className="card-details">
              <h4 className="card-title">
                Lemon dessert
              </h4>
              <span className="card-price">$5.00</span>
              <p>
                This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
              </p>
              <a href="/order-online" className="cta-secondary">Order a delivery</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}