import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { ShuffleButton } from './ShuffleButton'; // Ensure the import path matches the file name exactly, including case sensitivity.

describe('ShuffleButton Component', () => {
  // Define handleClick before using it
  const handleClick = jest.fn();

  test('button renders with correct text', () => {
    render(<ShuffleButton onClick={handleClick} />);
    expect(screen.getByRole('button', {name: /shuffle/i})).toBeInTheDocument();
  });

  test('calls onClick when button is clicked', async () => {
    // Reset the mock function's state before each test to ensure a clean slate
    handleClick.mockReset();
    
    render(<ShuffleButton onClick={handleClick} />);
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
 
