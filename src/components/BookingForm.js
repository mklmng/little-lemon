import { useState } from "react";
import "./BookingForm.css";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [bookingData, setData] = useState({
    bookingDate: "",
    bookingTime: "",
    guests: 1,
    occasion: "",
  });

  const [errors, setErrors] = useState({
    dateError: false,
    dateMessage: "You need to select a valid date",
    timeError: false,
    timeMessage: "You need to select a valid time",
    guestsError: false,
    guestsMessage: "You can book for 1 to 10 guests",
    occassionError: false,
    occasionMessage: "You need to select the occasion"
  });


  const {dateError, dateMessage, timeError, timeMessage, guestsError, guestsMessage, occassionError, occasionMessage } = errors;
  const {bookingDate, bookingTime, guests, occasion} = bookingData;
  const isDisabled = guests < 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(bookingData);
  };

  const handleChange = (e) => {
    checkErrors(e.target.id, e.target.value);
  }

  const handleBlur = (e) => {
    checkErrors(e.target.id, e.target.value);
  }

  const checkErrors = (id, value) => {
    switch (id) {
      case "reservation-date":
        const today = new Date();
        const reservationDate = new Date(value);

        if ((today.getFullYear() === reservationDate.getFullYear()) && (today.getMonth() === reservationDate.getMonth()) && (today.getUTCDate() === reservationDate.getUTCDate())){
          setErrors({...errors, dateError: false})
        } else if (reservationDate < today){
          setErrors({...errors, dateError: true})
        } else {
          setErrors({...errors, dateError: false})
        }
        break;

      case "reservation-time":
        if (!value.length){
          setErrors({...errors, timeError: true})
        } else {
          setErrors({...errors, timeError: false})
        }
      break;

      case "guests":
        if ((+value < 1) || (+value > 10)){
          setErrors({...errors, guestsError: true})
        } else {
          setErrors({...errors, guestsError: false})
        }
      break;

      case "occasion":
        if (!value.length){
          setErrors({...errors, occassionError: true})
        } else {
          setErrors({...errors, occassionError: false})
        }
      break;

      default:
        break;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="reservation-date">Choose date*</label>
      <input
        required
        aria-label="Reservation date"
        type="date"
        name="reservation-date"
        id="reservation-date"
        onChange={(e) => {
          handleChange(e);
          setData({
            ...bookingData,
            bookingDate: e.target.value,
          });
          dispatch({ type: "book a date", payload: e.target.value });
          }
        }
        onBlur={(e) => {
          handleBlur(e);
        }}
        value={bookingDate}
      />
      {dateError ? <span className="error">{dateMessage}</span> : null}

      <label htmlFor="res-time">Choose time*</label>
      <select
        required
        aria-label="Reservation time"
        id="res-time"
        onChange={(e) => {
            setData({
              ...bookingData,
              bookingTime: e.target.value,
            })
          }
        }
        onBlur={(e) => {
          handleBlur(e)
        }}
        value={bookingTime}
      >
        {availableTimes?.map((reservationTime, index) => {
          return <option key={index}>{reservationTime}</option>;
        })}
      </select>
      {timeError ? <span className="error">{timeMessage}</span> : null}

      <label htmlFor="guests">Number of guests*</label>
      <input
        required
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
        onBlur={(e) => {
          handleBlur(e)
        }}
        value={guests}
      />
      {guestsError ? <span className="error">{guestsMessage}</span> : null}

      <label htmlFor="occasion">Occasion*</label>
      <select
        required
        id="occasion"
        onChange={(e) =>
          setData({
            ...bookingData,
            occasion: e.target.value
          })}
        onBlur={(e) => {
          handleBlur(e)
        }}
        value={occasion}
      >
        <option value="">Select your occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      {occassionError ? <span aria-labelledby="occasion-error" className="error">{occasionMessage}</span> : null}

      <input type="submit" value="Book Now" className="cta" disabled={isDisabled} />
    </form>
  );
}
