import React from 'react';
import FloorPlan from './components/FloorPlan';
import ThreeDModel from './components/ThreeDModel';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Centro de Educação e Tecnologia Sesi Alagoas</h1>
      <div className="container">
        <FloorPlan />
        <ThreeDModel />
      </div>
    </div>
  );
}

export default App;
