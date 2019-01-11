import React, { Component } from 'react';
import './App.css';
import Drum from './Drum'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img 
          className='App-logo'
          src="https://vignette.wikia.nocookie.net/glitchtale/images/0/01/314-headphones-skull-minimalism-black_background-eye_patch-black.png/revision/latest?cb=20170502101954"
          alt='spinning skull'
          />
          <Drum />
        </header>
      </div>
    );
  }
}

export default App;
