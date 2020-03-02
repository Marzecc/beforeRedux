import React from 'react';
import {useState} from 'react';
import StatsTwo from './Components/StatsTwo.js';
import Feature from './Components/Feature.js'
import {createContext} from 'react';
import {useContext} from 'react';
import SliderRace from './Components/SliderRace.js';
import Class from './Components/Class.js';
import Skills from './Components/Skills.js';

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

// Skills postaci 
export const skillsCheckContext = React.createContext({
  acrobatic: false,
  appraise: false,
  bluff: false,
  climb: false,
  craft: false,
  diplomacy: false,
  disableDevice:false,
  disguice:false,
  escapeArtist:false,
  fly:false,
  handleAnimal:false,
  heal:false,
  intimidate:false,
  knowledgeAll:false,
  knowledgeArcana:false,
  knowledgeDungeoneering:false,
  knowledgeGeography:false,
  knowledgeHistory:false,
  knowledgeLocal:false,
  knowledgeNature:false,
  knowledgeNobility:false,
  knowledgePlanes:false,
  knowledgeReligion:false,
  linguistics:false,
  perception:false,
  perform:false,
  profession:false,
  ride:false,
  senseMotive:false,
  sleightOfHand:false,
  spellcraft:false,
  stealth:false,
  survival:false,
  swim:false,
  useMagicDevice:false,
})


export const skillsRankContext = React.createContext({
  acrobatic: 1,
  appraise: 1,
  bluff: 1,
  climb: 1,
  craft: 1,
  diplomacy: 1,
  disableDevice:1,
  disguice:1,
  escapeArtist:1,
  fly:1,
  handleAnimal:1,
  heal:1,
  intimidate:1,
  knowledgeAll:1,
  knowledgeArcana:1,
  knowledgeDungeoneering:1,
  knowledgeGeography:1,
  knowledgeHistory:1,
  knowledgeLocal:1,
  knowledgeNature:1,
  knowledgeNobility:1,
  knowledgePlanes:1,
  knowledgeReligion:1,
  linguistics:1,
  perception:1,
  perform:1,
  profession:1,
  ride:1,
  senseMotive:1,
  sleightOfHand:1,
  spellcraft:1,
  stealth:1,
  survival:1,
  swim:1,
  useMagicDevice:1,
})

export const classSkillsContext = React.createContext({
  classes: {
  barbarian: {
    skills:
    ['acrobatic',
    'climb',
    'craft',
    'handleAnimal',
    'intimidate',
    'knowledgeNature',
    'perception',
    'ride',
    'survival',
    'swim',
    ]}

    ,bard: {
      skills:
      ['acrobatic',
      'bluff',
      'appraise',
      'climb',
      'craft',
      'diplomacy',
      'disguice',
      'escapeArtist',
      'intimidate',
      'knowledgeAll',
      'linguistics',
      'perception',
      'perform',
      'profession',
      'senseMotive',
      'sleightOfHand',
      'spellcraft',
      'stealth',
      'useMagicDevice',
      ]
    }
  }
  });

// Rasa postaci 
export const raceContext = React.createContext("");
// Featsy, które przekazuje się na poziomie wybierania klasy i rasy
export const newFeatContext = React.createContext('');
export const featsContext = React.createContext([]);
export const classContext = React.createContext("");
export const rankPointsLeftContext = React.createContext();

const Store = ({children}) => {
  // Statystyki
    const [ stats, setStats ] = useState({
      
      
        strenght: 10,
        consituition: 10,
        dexterity: 10,
        intelligence:  10,
        winsdom: 10,
        charisma:  10,  
  
      });



    const [modify, setModify] = useState({
// Modyfikator
        strenght: 0,
        consituition: 0,
        dexterity: 0,
        intelligence: 0,
        winsdom: 0,
        charisma: 0
      })


    const [raceModify, setRaceModify] = useState({
// Modyfikator z rasy - niepotrzebny
        strenght: 0,
        consituition: 0,
        dexterity: 0,
        intelligence: 0,
        winsdom: 0,
        charisma: 0
      
      });
// Rasa
      const [race, setRace] = useState("");
      // Oba potrzebne do tworzenia featwów
      const [newFeat, setNewFeat] = useState('');
      const [feats, setFeats] = useState([]);
      // klasa postaci
      const [characterClass, setCharacterClass] = useState("");
      const [rankPointsLeft, setRankPointsLeft] = useState(0);

// Dostępne skills dla postaci
   const [skillsCheck, setSkillsCheck] = React.useState({
        acrobatic: false,
        appraise: false,
        bluff: false,
        climb: false,
        craft: false,
        diplomacy: false,
        disableDevice:false,
        disguice:false,
        escapeArtist:false,
        fly:false,
        handleAnimal:false,
        heal:false,
        intimidate:false,
        knowledgeAll:false,
        knowledgeArcana:false,
        knowledgeDungeoneering:false,
        knowledgeGeography:false,
        knowledgeHistory:false,
        knowledgeLocal:false,
        knowledgeNature:false,
        knowledgeNobility:false,
        knowledgePlanes:false,
        knowledgeReligion:false,
        linguistics:false,
        perception:false,
        perform:false,
        profession:false,
        ride:false,
        senseMotive:false,
        sleightOfHand:false,
        spellcraft:false,
        stealth:false,
        survival:false,
        swim:false,
        useMagicDevice:false,
      })

      const [classSkills, setClassSkills] = React.useState({
        
          barbarian: 
          ['acrobatic',
            'climb',
            'craft',
            'handleAnimal',
            'intimidate',
            'knowledgeNature',
            'perception',
            'ride',
            'survival',
            'swim',
            ]
          
        
            ,bard: 
              
              ['acrobatic',
              'bluff',
              'appraise',
              'climb',
              'craft',
              'diplomacy',
              'disguice',
              'escapeArtist',
              'intimidate',
              'knowledgeAll',
              'linguistics',
              'perception',
              'perform',
              'profession',
              'senseMotive',
              'sleightOfHand',
              'spellcraft',
              'stealth',
              'useMagicDevice',
              ]
            
          
      })


    const [skillsRank, setSkillsRank] = React.useState({
        acrobatic: 1,
        appraise: 1,
        bluff: 1,
        climb: 1,
        craft: 1,
        diplomacy: 1,
        disableDevice:1,
        disguice:1,
        escapeArtist:1,
        fly:1,
        handleAnimal:1,
        heal:1,
        intimidate:1,
        knowledgeAll:1,
        knowledgeArcana:1,
        knowledgeDungeoneering:1,
        knowledgeGeography:1,
        knowledgeHistory:1,
        knowledgeLocal:1,
        knowledgeNature:1,
        knowledgeNobility:1,
        knowledgePlanes:1,
        knowledgeReligion:1,
        linguistics:1,
        perception:1,
        perform:1,
        profession:1,
        ride:1,
        senseMotive:1,
        sleightOfHand:1,
        spellcraft:1,
        stealth:1,
        survival:1,
        swim:1,
        useMagicDevice:1,
      })

      return (
        <statContext.Provider value={[stats, setStats]}>
          <raceContext.Provider value={[race,setRace]}>
             <modifyContext.Provider value={[modify, setModify]}>
             <featsContext.Provider value ={[feats, setFeats]}>
                <newFeatContext.Provider value={[newFeat, setNewFeat]}>
                <raceModifyContext.Provider value ={[raceModify, setRaceModify]}>
              
                  <classContext.Provider value={[characterClass, setCharacterClass]}>
                    <skillsCheckContext.Provider value={[skillsCheck, setSkillsCheck]}>
                      <skillsRankContext.Provider value ={[skillsRank, setSkillsRank]}>
                        <classSkillsContext.Provider value={[classSkills, setClassSkills]}>
                          <rankPointsLeftContext.Provider value ={[rankPointsLeft, setRankPointsLeft]}> 
                        {children}
                        </rankPointsLeftContext.Provider>
                        </classSkillsContext.Provider>
                        </skillsRankContext.Provider>
                      </skillsCheckContext.Provider>
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