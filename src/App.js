import React, { useState, useEffect } from 'react';
import { spotifyAuthCheck } from './utils';

function App() {
  useEffect(() => {
    spotifyAuthCheck();
  }, [])

  return (
    <div className="app-container">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
