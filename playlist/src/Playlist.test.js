import { render, screen } from '@testing-library/react';
import Playlist from './playlist';

describe('Playlist Component', () => {
  test('renders songs when list is not empty', () => {
    const songs = ['Song 1', 'Song 2', 'Song 3'];
    render(<Playlist songs={songs} />);
    songs.forEach(song => {
      expect(screen.getByText(song)).toBeInTheDocument();
    });
  });

  test('displays message when song list is empty', () => {
    render(<Playlist songs={[]} />);
    expect(screen.getByText('No songs in playlist')).toBeInTheDocument();
  });

  test('highlights the current song being played', () => {
    const songs = ['Song 1', 'Song 2', 'Song 3'];
    const currentSong = 'Song 2';
    render(<Playlist songs={songs} currentSong={currentSong} />);
    const currentSongElement = screen.getByText(currentSong);
    expect(currentSongElement).toHaveClass('current-song');
    // Assuming that the "current-song" class is used to highlight the current song
  });
});

