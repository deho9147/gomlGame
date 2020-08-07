import React from 'react';
import logo from './logo.svg';
import './App.css';
import Seekbar from './components/seekbar'
import ShowLevel from './components/showLevel'

function App() {
  return (
    <div className="App">
      <Seekbar/>
      <ShowLevel/>
    </div>
  );
}

export default App;
