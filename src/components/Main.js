import './Main.css';
import {Routes, Route} from "react-router-dom";
import Homepage from './Homepage';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import BookingPage from './BookingPage';
import Chicago from './Chicago';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Specials />} />
        <Route path="/testimonials" element={<CustomersSay />} />
        <Route path="/about" element={<Chicago />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </main>
  )
}