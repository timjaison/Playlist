import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {NextButton} from './nextbutton';

describe('NextButton Component', () => {
  test('calls onClick prop when clicked', async () => {
    const handleClick = jest.fn();
    render(<NextButton onClick={handleClick} />);
    await userEvent.click(screen.getByRole('button', { name: /next/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
