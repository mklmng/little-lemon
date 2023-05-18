import {Link} from "react-router-dom";
import './ConfirmedBooking.css';

export default function ConfirmedBooking() {
  return (
    <article className="bg-confirmation-page">
      <div className="confirmed-booking">
        <span className="message">Your booking has been confirmed.</span>
        <span className="cta cta-big">
        <Link to="/booking">Return to reservations</Link>
      </span>
      </div>
    </article>
  );
}