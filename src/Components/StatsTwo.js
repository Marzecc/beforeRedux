  import React, { useState } from 'react';
  import Stats from './Stats';



  function StatsTwo( props ) {


    const [ stats, setStats ] = useState({
      
      
      strenght: 10,
      dexterity: 10,
      intelligence:  10,
      winsdom: 10,
      charisma:  10,  

    });

    const [ points, setPoints ] = useState(30);
    // punkty do wydania
    
    let maxPoints = 80;



  const reduceStat = (field) => {
    

    let newState = {};
    newState[field] = stats[field] - 1;
    setStats({...stats, ...newState});

    console.log(stats );
    console.log(newState);
    console.log({...stats, ...newState})

    setPoints(points+1);
    
  }

  const riseStat = (field) => {
    
    let newState = {};
    newState[field] = stats[field] +1;
    setStats({...stats, ...newState});

    console.log(newState);



     setPoints(points-1);
  }




    const inputReturn = (field) => {
      // zapisanie jako funkcja pozwala nam wywołać komponent dalej zmieniając wartość field na nazwę stinga "strenght itp"
  return(
      <div>
      <div>{stats[field]}</div>

              <div>
                  <button 
                  onClick={() => {reduceStat(field)}}
                  
                  > - </button>
                  <button 
                  onClick= {() => {riseStat(field)}}
                  
                  > + </button>

              </div>
      


      </div>
      )
    }


    return(
      <div className="stats__input__conatiner">
    
    
      <div classname="points--display"> Points Left: {points} </div>

        <div className="stats__input__holder">
        <h2>Strenght</h2>  
        { inputReturn("strenght") } < br />
        <h2>Dexterity</h2>
        { inputReturn("dexterity") } < br />
        <h2>Intelligence</h2>
        { inputReturn("intelligence") } < br />
        <h2>Winsdom</h2>
        { inputReturn("winsdom") } < br />
        <h2>Charisma</h2>
        { inputReturn("charisma") } < br />
        </div>

      </div>
    )
  }

  export default StatsTwo;

  //  można wywołać ten sam komponent jak funkcje z mienną wartością - wystarczy, że będzie od niej zależna (filed)
  // niezmienialne jest 30 więc można ją określić zwykłą zmienną