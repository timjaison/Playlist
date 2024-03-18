

export function  PlayPauseButton ({ onClick, isPlaying })  {
  return (
    <button onClick={onClick}>{isPlaying ? 'Pause' : 'Play'}</button>
  );
};

