import React, { useState } from 'react';
import './App.css';
import Stats from './Components/Stats.js';
import StatsTwo from './Components/StatsTwo.js';
import DiceTwo from './Components/DiceTwo.js';

import Dice from './Components/Dice.js';
import SliderRace from './Components/SliderRace.js';

function App() {

  

  return(
    <div className="App">

<div class="body--conainer">

      <div class="header">
        <h1>Stats</h1>
      </div>

      <div class="stats-container">
          <div class="points-adjust"> 
            <div class="poinst__adjust__header">
              <h1>Choose</h1>
            </div>
            <StatsTwo />
          </div>
          <div class="dice-adjust">
            <div class="poinst__adjust__header">
              <h1>Roll</h1>
            </div>
            <Dice />  
            {/* <DiceTwo /> */}
          </div>
          {/* <Stats /> */}
      </div>
      
      
    </div>
   
    <div class='race_slider'>
    <div class="header">
        <h1>Race</h1>
      </div>
      {/* <div class='img_info_container'> */}
        
        <SliderRace />
      {/* </div> */}
    </div>
    
   
   

    </div>

  )
}

export default App;

