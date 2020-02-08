import React from 'react';
import {useState} from 'react';
import StatsTwo from './Components/StatsTwo.js';
import {createContext} from 'react';
import {useContext} from 'react';

export const statContext = React.createContext({
    strenght: 10,
    consituition: 10,
    dexterity: 10,
    intelligence:  10,
    winsdom: 10,
    charisma:  10, 
});



export const raceContext = React.createContext("");

const Store = ({children}) => {
    const [ stats, setStats ] = useState({
      
      
        strenght: 10,
        consituition: 10,
        dexterity: 10,
        intelligence:  10,
        winsdom: 10,
        charisma:  10,  
  
      });

      const [race, setRace] = useState("");

      return (
        <statContext.Provider value={[stats, setStats]}>
        <raceContext.Provider value={[race,setRace]}>
            {children}
        </raceContext.Provider>
        </statContext.Provider>
       
      );
}




export default Store;