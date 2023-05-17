import { useState } from 'react';
import './BookingForm.css';

export default function BookingForm({ availableTimes, dispatch }) {
  const [bookingTime, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  return (
    <form className='booking-form'>
      <label htmlFor="res-date">Date</label>
      <input type="date" id="res-date" onChange={
        (e) => dispatch({type:"book a date", payload: e.target.value})} />

      <label htmlFor="res-time">Time</label>
      <select id="res-time" onChange={(e) => setTime(e.target.value)} value={bookingTime}>
        {availableTimes?.map((reservationTime, index) => {
            return (
              <option key={index}>{reservationTime}</option>
            );
          })
        }
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => setGuests(e.target.value)} value={guests} />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" onChange={(e) => setOccasion(e.target.value)} value={occasion}>
          <option>Birthday</option>
          <option>Anniversary</option>
      </select>
      <input type="submit" value="Book Now" className='cta' />
    </form>
  );
}