
import { Playlist } from './Playlist';
import './playlist.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

//export function App;

function displayPlaylist(){

  return(
  
    <>
        <h1>Playlist</h1>
        <div className = "playlistDiv">

           <Playlist/>

        </div>
    </>
  
  )
}

export default displayPlaylist;
