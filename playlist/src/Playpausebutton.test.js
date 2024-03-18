import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {PlayPauseButton} from './PlayPauseButton';

describe('PlayPauseButton Component', () => {
  test('displays Pause when isPlaying is true', () => {
    render(<PlayPauseButton isPlaying={true} onClick={() => {}} />);
    expect(screen.getByRole('button', { name: /pause/i })).toBeInTheDocument();
  });

  test('displays Play when isPlaying is false', () => {
    render(<PlayPauseButton isPlaying={false} onClick={() => {}} />);
    expect(screen.getByRole('button', { name: /play/i })).toBeInTheDocument();
  });
});
 