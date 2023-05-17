import BookingForm from "./BookingForm";
import './BookingPage.css';

export default function BookingPage({availableTimes, dispatch}) {
  return (
    <article className="bg-reservations">
      <h3>Book your reservation</h3>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </article>
  )
}