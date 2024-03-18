


export function Song ({ title, artist, year, onDoubleClick }) {
  return (
    <div className="song" onDoubleClick={() => onDoubleClick(`Playing: ${title}`)}>
      <h3>{title || 'Unknown Title'}</h3>
      <p>Artist: {artist || 'Unknown Artist'}</p>
      <p>Year: {year || 'Unknown Year'}</p>
    </div>
  );
};


 