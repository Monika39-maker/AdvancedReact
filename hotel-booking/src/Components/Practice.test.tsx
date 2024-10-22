import { render, screen } from '@testing-library/react';
import Practice from './Practice';

test('Greets', () => {
  
  render(<Practice />);
  const greetMessage = screen.getByText("Helloo")
  expect(greetMessage).toBeInTheDocument();
});

test('Greets by name', () => {
  
  render(<Practice user="Rohit"/>);
  const userName = screen.getByText("Rohit")
  expect(userName).toBeInTheDocument();
});