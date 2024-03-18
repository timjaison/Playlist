// In ./playlist.js
export function Podcast({ episode, episodeTitle, season }) {
  return (
    <div>
      <p>Episode Title: {episodeTitle}</p>
      <p>Episode: {episode}</p>
      <p>Season: {season || "N/A"}</p>
    </div>
  );
}

