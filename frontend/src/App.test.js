import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const headerElement = screen.getByTestId('header');
  const animRoutesElement = screen.getByTestId('anim-routes');
  const footerElement = screen.getByTestId('footer');
  expect(headerElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});