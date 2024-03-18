// In song.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import {Song} from './Song';  

describe('Song Component', () => {
  test('renders correctly with valid props', () => {
    render(<Song title="Friday" artist="Rebecca Black" year={2011} />);
    expect(screen.getByText('Friday')).toBeInTheDocument();
    expect(screen.getByText(/Rebecca Black/)).toBeInTheDocument();
    expect(screen.getByText('Artist: Rebecca Black')).toBeInTheDocument();
  });
});

