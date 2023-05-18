import BookingForm from './BookingForm';
import './BookingPage.css';

export default function BookingPage({availableTimes, dispatch, submitForm}) {
  return (
    <article className='bg-reservations'>
      <div className="booking-form">
        <h3>Book your reservation</h3>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      </div>
    </article>
  );
}