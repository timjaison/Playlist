import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Status from './Status';

describe('Status Component', () => {
  test('displays correct statusText', () => {
    render(<Status statusText="Playing now" />);
    expect(screen.getByText('Playing now')).toBeInTheDocument();
  });

  test('displays default message when statusText is empty', () => {
    render(<Status />);
    expect(screen.getByText('No status')).toBeInTheDocument();
  });
})
 