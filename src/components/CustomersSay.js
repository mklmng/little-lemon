import './CustomersSay.css';
import placeholder from '../assets/placeholder.jpg'

export default function CustomersSay () {
  return (
    <article className="bg-testimonials">
      <div className="testimonials-header">
        <h3>Testimonials</h3>
      </div>
      <div className="testimonials-boxes">
        <div className="box">
          <span>Rating</span>
          <img src={placeholder} alt="testimony 1" />
          <span>Name</span>
          <p>Review text</p>
        </div>

        <div className="box">
          <span>Rating</span>
          <img src={placeholder} alt="testimony 2" />
          <span>Name</span>
          <p>Review text</p>
        </div>

        <div className="box">
          <span>Rating</span>
          <img src={placeholder} alt="testimony 3" />
          <span>Name</span>
          <p>Review text</p>
        </div>

        <div className="box">
          <span>Rating</span>
          <img src={placeholder} alt="testimony 4" />
          <span>Name</span>
          <p>Review text</p>
        </div>
      </div>
    </article>
  );
}