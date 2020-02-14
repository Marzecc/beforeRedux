import React from 'react';
import {useState} from 'react';
import StatsTwo from './Components/StatsTwo.js';
import Feature from './Components/Feature.js'
import {createContext} from 'react';
import {useContext} from 'react';
import SliderRace from './Components/SliderRace.js';
import Class from './Components/Class.js';

// Statystyki
export const statContext = React.createContext({
    strenght: 10,
    consituition: 10,
    dexterity: 10,
    intelligence:  10,
    winsdom: 10,
    charisma:  10, 
});
// Modyfikatory z stattystyk
export const modifyContext = React.createContext({

  strenght: 0,
  consituition: 0,
  dexterity: 0,
  intelligence: 0,
  winsdom: 0,
  charisma: 0

});
// modyfikator z rasy
export const raceModifyContext = React.createContext({

  strenght: 0,
  consituition: 0,
  dexterity: 0,
  intelligence: 0,
  winsdom: 0,
  charisma: 0

})

// Rasa postaci 
export const raceContext = React.createContext("");
// Featsy, które przekazuje się na poziomie wybierania klasy i rasy
export const newFeatContext = React.createContext('');
export const featsContext = React.createContext([]);
export const classContext = React.createContext("");


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


    const [raceModify, setRaceModify] = useState({

        strenght: 0,
        consituition: 0,
        dexterity: 0,
        intelligence: 0,
        winsdom: 0,
        charisma: 0
      
      });

      const [race, setRace] = useState("");
      const [newFeat, setNewFeat] = useState('');
      const [feats, setFeats] = useState([]);
      const [characterClass, setCharacterClass] = useState("");

      return (
        <statContext.Provider value={[stats, setStats]}>
          <raceContext.Provider value={[race,setRace]}>
             <modifyContext.Provider value={[modify, setModify]}>
             <featsContext.Provider value ={[feats, setFeats]}>
                <newFeatContext.Provider value={[newFeat, setNewFeat]}>
                <raceModifyContext.Provider value ={[raceModify, setRaceModify]}>
                  <classContext.Provider value={[characterClass, setCharacterClass]}>
                        {children}
                  </classContext.Provider>
                  </raceModifyContext.Provider>
                </newFeatContext.Provider>
                </featsContext.Provider>
             </modifyContext.Provider>
          </raceContext.Provider>
        </statContext.Provider>
       
      );
}




export default Store;