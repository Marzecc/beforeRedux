import React, { useState } from 'react';
import './App.css';
import Stats from './Components/Stats.js';
import StatsTwo from './Components/StatsTwo.js';
import DiceTwo from './Components/DiceTwo.js';
import Store from './Store.js';

import Dice from './Components/Dice.js';
import SliderRace from './Components/SliderRace.js';

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
          <div className="dice-adjust">
            <div className="poinst__adjust__header">
              <h1>Roll</h1>
            </div>
            {/* <Dice />   */}
          </div>
      </div>
      
      
    </div>
   
   
    
   
   

    </div>
    </Store>
  )
}

export default App;

