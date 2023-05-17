import { render, screen } from '@testing-library/react';

import BookingForm from './components/BookingForm';
import { initializeTimes } from "./components/Main"

test('Renders the Date input label', () => {
  render(<BookingForm />);
  const labelElement = screen.getByText("Date");
  expect(labelElement).toBeInTheDocument();
})

test('initializeTimes renders the correct values', () => {
  const initialData = { availableTimes: ["17:00","18:00","19:00","20:00","21:00","22:00"] };
  expect(initializeTimes()).toEqual(initialData);
})