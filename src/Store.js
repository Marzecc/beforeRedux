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

export const modifyContext = React.createContext({

  strenght: 0,
  consituition: 0,
  dexterity: 0,
  intelligence: 0,
  winsdom: 0,
  charisma: 0

})

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



      const [modify, setModify] = useState({

        strenght: 0,
        consituition: 0,
        dexterity: 0,
        intelligence: 0,
        winsdom: 0,
        charisma: 0
      })

      const [race, setRace] = useState("");

      return (
        <statContext.Provider value={[stats, setStats]}>
        <raceContext.Provider value={[race,setRace]}>
          <modifyContext.Provider value={[modify, setModify]}>
            {children}
            </modifyContext.Provider>
        </raceContext.Provider>
        </statContext.Provider>
       
      );
}




export default Store;