import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Podcast} from './Podcast';

describe('Podcast Component', () => {
  test('renders correctly with season and episode', () => {
    render(<Podcast episodeTitle="A Great Episode" season={1} episode={1} />);
    expect(screen.getByText("A Great Episode")).toBeInTheDocument();
    expect(screen.getByText("Season: 1")).toBeInTheDocument();
    expect(screen.getByText("Episode: 1")).toBeInTheDocument();  
  });

  test('renders "Season: N/A" when no season is provided', () => {
  render(<Podcast episodeTitle="A Great Episode" episode={1} />);
  expect(screen.getByText("Season: N/A")).toBeInTheDocument();
  expect(screen.getByText("Episode: 1 ")).toBeInTheDocument();  
  });
});

export default function Podcast({ episodeTitle, episode, season }) {       


}

