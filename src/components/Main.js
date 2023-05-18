import { useReducer } from 'react';
import {Routes, Route, useNavigate } from "react-router-dom";
import {fetchAPI, submitAPI} from '../api/api';

import './Main.css';

import Homepage from './Homepage';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import BookingPage from './BookingPage';
import Chicago from './Chicago';
import ConfirmedBooking from './ConfirmedBooking';

function initializeTimes() {
  const today = new Date ();
  return { availableTimes: fetchAPI(today) };
}

function updateTimes(state, action) {
  if (action.type === "book a date") {
    const updatedDate = new Date(action.payload);
    return { ...state, availableTimes: fetchAPI(updatedDate)}
  }
}

export { initializeTimes, updateTimes, fetchAPI };

export default function Main() {
  const [state, dispatch] = useReducer(updateTimes,{},initializeTimes);
  const navigate = useNavigate();

  function submitForm(formData) {
    if (submitAPI(formData) === true){
      navigate("/confirmed-booking");
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Specials />} />
        <Route path="/testimonials" element={<CustomersSay />} />
        <Route path="/about" element={<Chicago />} />
        <Route path="/booking" element={<BookingPage availableTimes={state.availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  )
}