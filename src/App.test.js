import { fireEvent, render, screen } from '@testing-library/react';

import BookingForm from './components/BookingForm';
import { initializeTimes } from "./components/Main";

test('initializeTimes renders a non empty array after fetching the data', () => {
  const result = initializeTimes();
  const resultLength = result.availableTimes.length;

  expect(Array.isArray(result.availableTimes)).toBe(true);
  expect(resultLength).toBeGreaterThan(0);
})

test("Expect Date input to be required", () => {
  render(<BookingForm />);

  const dateInput = screen.getByLabelText(/Choose date*/);
  expect(dateInput).toBeRequired();
});

test("Expect Times input to be required", () => {
  render(<BookingForm />);

  const timeInput = screen.getByLabelText(/Choose time*/);
  expect(timeInput).toBeRequired();
});

test("Expect guests input to be required", () => {
  render(<BookingForm />);

  const guestsInput = screen.getByLabelText(/Number of guests*/);
  expect(guestsInput).toBeRequired();
});

test("Expect occasion input to be required", () => {
  render(<BookingForm />);

  const occassionInput = screen.getByLabelText(/Occasion*/);
  expect(occassionInput).toBeRequired();
});

test("Expect guests input to be valid with 1 guest", () => {
  render(<BookingForm />);

  const guestsInput = screen.getByLabelText(/Number of guests*/);

  fireEvent.change(guestsInput, { target: { value: "1"}});

  expect(guestsInput.value).toBe("1");
  expect(guestsInput).toBeValid();
});

test("Expect occasion input to be valid if no valid option is selected", () => {
  render(<BookingForm />);

  const occassionInput = screen.getByLabelText(/Occasion*/);
  expect(occassionInput).toBeInvalid();
});

test("Expect occasion input to be valid if a valid option is selected", () => {
  render(<BookingForm />);

  const occassionInput = screen.getByLabelText(/Occasion*/);

  fireEvent.change(occassionInput, { target: { value: "Birthday"}});
  expect(occassionInput).toBeValid();
});

test("Expect form to need at least 1 guest to submit", () => {
  render(<BookingForm />);

  const guestsInput = screen.getByLabelText(/Number of guests*/);
  const submitButton = screen.getByRole("button");

  fireEvent.change(guestsInput, { target: { value: "0"}});

  expect(guestsInput.value).toBe("0");
  expect(submitButton).toBeDisabled();
});