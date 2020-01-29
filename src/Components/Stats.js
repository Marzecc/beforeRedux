import React, { useState } from 'react';



function Stats( props ) {

  // const [ stats, setStats ] = useState({

  //   points: 60,
  //   dice: 24,
    
  //   strenght: 10,
  //   dexterity: 10,
  //   intelligence:  10,
  //   winsdom: 10,
  //   charisma:  10,  

  //   inputValue: Number,
  // });

  const [ points, setPoints ] = useState(30);
  const [ statsInput, setstatsInput ] = useState(10);
  const totalPoints = 30;
  
  const handleInputChange = (event) => {
    const { value } = event.target;
    if ( value > 18){
      setstatsInput(18);
      return;
    } 
    if ( value < 4 ){
      setstatsInput(4);
      return;
    }

    setstatsInput(value);
    setPoints(totalPoints-value);


  }


  return(
    <div className="Stats">
   
    <div> {points} </div>

      <input type="number" 
      name ="Stats input"
      placeholder = {statsInput}
      value = {statsInput}
      onChange = {handleInputChange}
      
      
      >
        
      </input>

      <input type="number" 
      name ="Stats input"
      placeholder = {statsInput}
      value = {statsInput}
      onChange = {handleInputChange}
      
      
      >
        
      </input>

    </div>
  )
}

export default Stats;

