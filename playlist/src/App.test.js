import { render, awaitscreen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = awaitscreen.findByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
