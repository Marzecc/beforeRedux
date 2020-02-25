  import React, { useState } from 'react';
  import {useContext} from 'react';
  import Stats, { modifyContext } from '../Store';
  import { statContext } from '../Store';
  import styled from '@emotion/styled';
  import { css, jsx } from '@emotion/core';

  



  function StatsTwo( props ) {


    const [ stats, setStats ] = useContext(statContext);
    const [ modify, setModify] = useContext(modifyContext);

    const [ points, setPoints ] = useState(30);



    // modyfikator powinien być pobierany/ obliczany na bierząco! "get.modify" - nie trzymać go

    


    const modifyValue = (field) => {
      let newState = {};
      if (stats[field] >= 12 && stats[field] <= 14 ) {
        newState[field] = modify[field] = 1;
        setModify({...modify, ...newState});
        console.log(modify);
      }
      
    }
// Dokończyć warunki + / -

  const reduceStat = (field) => {
    
    let newState = {};
    if (stats[field] > 4 ) { 
    newState[field] = stats[field] - 1;
    setStats({...stats, ...newState});
    setPoints(points+1);
    modifyValue(field);
    } else {
      return;
    }
  }

  const riseStat = (field) => {
    let newState = {};
    if (stats[field] < 18 && points > 0) {
    newState[field] = stats[field] += 1 ;
    setStats({...stats, ...newState});
    setPoints(points-1);
    console.log(stats[field]);
    modifyValue(field);
 
      

    } else if (stats[field] === 18 ){
      return
    } else {
      return
    }
    
   
  }



var vertical = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  
}


    const inputReturn = (field) => {
      // zapisanie jako funkcja pozwala nam wywołać komponent dalej zmieniając wartość field na nazwę stinga "strenght itp"
  return(
      <div>
     

              <div style={vertical}>
                  <button 
                  onClick={() => {reduceStat(field)}}
                  
                  > - </button>
                   <div>{stats[field]}</div>
                  <button 
                  onClick= {() => {riseStat(field)}}
                  
                  > + </button>
                  
              <div> Modyfication:  {modify[field]} </div>
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
        <h2>Consituition</h2>
        {inputReturn("consituition")} <br />
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