import './CallToAction.css';
import restaurantfood from '../assets/restauranfood.jpg';

export default function CallToAction() {
  return (
    <article className="bg-hero">
      <div className="hero-header">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className='homepage-text'>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <a href="/reservations" className="cta">
          Reserve a Table
        </a>
      </div>
      <div className="hero-image">
        <img className="overlay" src={restaurantfood} alt="restaurant food" />
      </div>
    </article>
  );
}