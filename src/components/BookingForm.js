import { useState } from "react";
import "./BookingForm.css";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [bookingData, setData] = useState({
    bookingTime: "",
    guests: 1,
    occasion: "",
  });

  const {bookingTime, guests, occasion} = bookingData;

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(bookingData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        onChange={(e) =>
          dispatch({ type: "book a date", payload: e.target.value })
        }
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        onChange={(e) =>
          setData({
            ...bookingData,
            bookingTime: e.target.value,
          })
        }
        value={bookingTime}
      >
        {availableTimes?.map((reservationTime, index) => {
          return <option key={index}>{reservationTime}</option>;
        })}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={(e) =>
          setData({
            ...bookingData,
            guests: e.target.value,
          })
        }
        value={guests}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        onChange={(e) =>
          setData({
            ...bookingData,
            occasion: e.target.value
          })}
        value={occasion}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Book Now" className="cta" />
    </form>
  );
}
