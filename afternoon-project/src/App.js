import React from 'react';
import './App.css';
import CardComponent from './Component/CardComponent';

function App() {
  return (
    <div className="app">
      <header>
        Home
      </header>
      <div className="contentCard">
        <CardComponent />
      </div>
    </div>
  );
}

export default App;
