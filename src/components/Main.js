import './Main.css';
import {Routes, Route} from "react-router-dom";
import { useReducer } from 'react';

import Homepage from './Homepage';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import BookingPage from './BookingPage';
import Chicago from './Chicago';

function initializeTimes() {
  return { availableTimes: ["17:00","18:00","19:00","20:00","21:00","22:00"] };
}

function updateTimes(state, action) {
  if (action.type === "book a date") {
    return { ...state, availableTimes: state.availableTimes}
  }
}

export { initializeTimes, updateTimes };

export default function Main() {
  const [state, dispatch] = useReducer(updateTimes,{},initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Specials />} />
        <Route path="/testimonials" element={<CustomersSay />} />
        <Route path="/about" element={<Chicago />} />
        <Route path="/booking" element={<BookingPage availableTimes={state.availableTimes} dispatch={dispatch} />} />
      </Routes>
    </main>
  )
}