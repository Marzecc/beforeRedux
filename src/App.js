import React, { useState } from 'react';
import './App.css';
import Stats from './Components/Stats.js';
import StatsTwo from './Components/StatsTwo.js';
import DiceTwo from './Components/DiceTwo.js';
import Store from './Store.js';
import Dice from './Components/Dice.js';
import SliderRace from './Components/SliderRace.js';
import Class from './Components/Class.js';
import Skills from './Components/Skills';
import Feature from './Components/Feature';

function App() {

  

  return(

    <Store>

    <div className="App">

    <div className='race_slider'>
    <div className="header">
        <h1>Race</h1>
      </div>
      {/* <div class='img_info_container'> */}
        
        <SliderRace />
      {/* </div> */}
    </div>

<div className="body--conainer">

      <div className="header">
        <h1>Stats</h1>
      </div>

      <div className="stats-container">
          <div className="points-adjust"> 
            <div className="poinst__adjust__header">
              <h1>Choose</h1>
            </div>

            <StatsTwo />

          </div>
        
      </div>
      
      
    </div>
   
   
    <div className="body--conainer">
    <div className="header">
        <h1>Class</h1>
      </div>

        <Class />
    </div>
   
    <div className="body--conainer">
    <div className="header">
        <h1>Skills </h1>
      </div>

        <Skills />
    </div>
    <div className="body--conainer">
    <div className="header">
        <h1> Feats </h1>
      </div>

        <Feature />
    </div>

    </div>
    </Store>
  )
}

export default App;

