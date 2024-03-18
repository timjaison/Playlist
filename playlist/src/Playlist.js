// Playlist.js
// Creating an array of songs
import { Song } from './Song';
import { Podcast } from './Podcast';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Status from './Status';

import './playlist.css';

  
  // Creating an array of podcasts
  
    
  
  export function Playlist(){

    // Variables to manage audio, status, and the current audio
   const [audio, setAudioData] = useState([]);
   const [status, setaudioStatus] = useState('');
   const [currentIndex, setCurrentindex] = useState(0);
 
   // useEffect hook with Axios to fetch data from the server with the audio.json file
   useEffect(() => {
    axios.get(process.env.PUBLIC_URL + '/audio_tracks.json')
      .then((response) => {
        console.log('Fetched data:', response.data);
        if (Array.isArray(response.data.tracks)) {
          setAudioData(response.data.tracks);
        } else {
          console.error('Fetched data does not contain an array:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching JSON:', error);
      });
  }, []);

 
   // Handling for double-clicking an audio item (song or podcast)
   const handleDoubleClick = (audioTitle, isPodcast, episodeTitle) => {
     const audioType = isPodcast ? 'Podcast' : 'Song';
     setaudioStatus(`Playing ${audioType}: ${audioTitle || episodeTitle }`);
   };
  
   // Handling for clicking the "Next" button
   const handleNextClick = () => {
     setCurrentindex((previousaudio) => (previousaudio + 1) % audio.length);
     const nextItem = audio[(currentIndex + 1) % audio.length];
     const nextTitle = ('episode' in nextItem) ? nextItem.episodeTitle : nextItem.title;
     const audioType = ('episode' in nextItem) ? 'Podcast' : 'Song';
     setaudioStatus(`Playing ${audioType}: ${nextTitle}`);
   };
 
   // Handler for clicking the "Previous" button
   const handlePreviousClick = () => {
     setCurrentindex((previousaudio) => (previousaudio - 1 + audio.length) % audio.length);
     const previousItem = audio[(currentIndex - 1 + audio.length) % audio.length];
     const previousTitle = ('episode' in previousItem) ? previousItem.episodeTitle : previousItem.title;
     const audioType = ('episode' in previousItem) ? 'Podcast' : 'Song';
     setaudioStatus(`Playing ${audioType}: ${previousTitle}`);
   };
 
   // Here we are handling for clicking the "Play/Pause" button
   const handlePlayPauseClick = () => {
     if (status.includes('Playing')) {
      setaudioStatus('Paused');
     } else if (status.includes('Paused')) {
      setaudioStatus(`Playing: ${audio[currentIndex].title}`);
     }
   };
 
   // Handler for clicking the "Shuffle" button
   const handleShuffleClick = () => {
     // Creating a shuffled copy of the audio array
     const shuffledaudioData = [...audio].sort(() => Math.random() - 0.5);
     setAudioData(shuffledaudioData);  
     setCurrentindex(0);
     setaudioStatus(`Shuffled Playlist`);
   };
 
   // JSX structure for rendering the Playlist component
   return (
     <div>
       <div className="buttons-container">
         {/* Previous button */}
         <button onClick={handlePreviousClick} className="control-button">Previous</button>
         {/* Play/Pause button */}
         <button onClick={handlePlayPauseClick} className="control-button">Play/Pause</button>
         {/* Next button */}
         <button onClick={handleNextClick} className="control-button">Next</button>
         {/* Shuffle button */}
         <button onClick={handleShuffleClick} className="control-button">Shuffle</button>
       </div>
 
       <div className="status-container">
         {/* Status display */}
         <h2>Status:</h2>
         <Status statusText={status} />
       </div>
 
       <div className="playlist-container">
         {/* Mapping through the data array to render audio items */}
         {audio.map((item, setindex) => (
           // Button for handling double-click on an audio item
           <div key={setindex} className="audio-container">
             <button onDoubleClick={() => handleDoubleClick(item.title, 'episode' in item || 'season' in item, item.episodeTitle)} className="audio-button">
               {/* Here we are rendering either the Podcast or Song component based on the item's properties */}
               {('episode' in item || 'season' in item || 'episodeTitle' in item) ? <Podcast {...item} onDoubleClick={handleDoubleClick} /> : <Song {...item} onDoubleClick={handleDoubleClick} />}
             </button>
           </div>
         ))}
       </div>
     </div>
   );

  }

    /***************************************** */

    /*var playlistArray = [
    
       <Podcast season = {3} episode = {21} episodeTitle = "Serial"/>,
       <Podcast season = {4} episode = {24} episodeTitle = "The Dailey"/>,
       <Podcast season = {5} episode = {25} episodeTitle = "Ted Radio Hour"/>,
       <Song title = "Thriller" artist = "Michel Jackson" year = {1982}/>,
       <Song title = "Bohemian Rhapsody" artist = "Queen" year = {1975}/>,
       <Song title = "Let It Be" artist = "The Beatles" year = {1970}/>
     
    ]; 

    var currentTrack = shufflePlaylist(playlistArray) ;
      

    
     return currentTrack[0];
   

  }

  function shufflePlaylist(pArray){

    var playlistArray = pArray;

    let currentIndex = playlistArray.length,  randomIndex;

 
    while (currentIndex > 0) {

 
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex--;

       [playlistArray[currentIndex], playlistArray[randomIndex]] = [
       playlistArray[randomIndex], playlistArray[currentIndex]];
    }

    return playlistArray;
    


  }*/


 