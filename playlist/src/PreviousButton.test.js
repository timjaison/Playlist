import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import PreviousButton from './PreviousButton';

describe('PreviousButton Component', () => {
  test('calls onClick prop when clicked', async () => {
    const handleClick = jest.fn();
    render(<PreviousButton onClick={handleClick} />);
    await userEvent.click(screen.getByRole('button', { name: /previous/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
