import { render, screen } from '@testing-library/react';

import BookingForm from './components/BookingForm';
import { initializeTimes } from "./components/Main"

test('Renders the Date input label', () => {
  render(<BookingForm />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
})

test('initializeTimes renders a non empty array after fetching the data', () => {
  const result = initializeTimes();
  const resultLength = result.availableTimes.length;

  expect(Array.isArray(result.availableTimes)).toBe(true);
  expect(resultLength).toBeGreaterThan(0);
})