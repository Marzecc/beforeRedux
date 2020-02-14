import React, { useState } from 'react';



function Stats( props ) {

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
  // let sumaPointsFinal ;

  const handleInputChange = (event, field) => {

    // DONE WITH WITH
  
    let { value } = event.target;

    let input = Math.min(value, points+stats[field] );  

    let sumaPoints = Object.values( stats ).reduce((x, y) => x+y , 0);

    let newState = {};
    newState[field] = input;
    setStats({...stats, ...newState});

   
  //  let sumaPoints = stats.strenght + stats.dexterity + stats.intelligence + stats.window + stats.charisma;
   
  setPoints (maxPoints-sumaPoints);

  
  console.log(sumaPoints);

    // console.log(stats);
    // console.log(field);
    // console.log(input);
    // console.log(points);
  
  }

  const inputReturn = (field) => {
    // zapisanie jako funkcja pozwala nam wywołać komponent dalej zmieniając wartość field na nazwę stinga "strenght itp"
    return(

    <input 
      className="stats--input"
      type="number" 
      name ="Stats input"
      min="4" max="18"
      // placeholder = {stats[field]}
      // tak naprawdę piszemy - wstaw tutaj stats z inputu, którego paramter jest stringiem - moglibyśmy zapisać "{stats["strenght"]" itp - ale parametrem możemy to zmienić i wywołać
      value = {stats[field]}
      onChange = {(event) => handleInputChange(event, field)}
      // na onChange wywołaj funkcje o parametrze event (zdarzenie na stronie), która wywoła funkcje dając 
      
      >
        
      </input>

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

export default Stats;

//  można wywołać ten sam komponent jak funkcje z mienną wartością - wystarczy, że będzie od niej zależna (filed)
// niezmienialne jest 30 więc można ją określić zwykłą zmienną