import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// import Background from './score-bg.png';
import {useContext} from 'react';
import Stats, { raceContext } from '../Store';
import { statContext } from '../Store';
import {modifyContext} from '../Store';
import {css} from 'emotion';
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';
import { useState} from 'react';
import { blueGrey } from '@material-ui/core/colors';
import dwarf2 from './Img/dwarf2.png';
import halfing1 from './Img/halfing1.png';
import elf1 from './Img/elf1.png';
import human1 from './Img/human1.png';
import gnome1 from './Img/gnome1.png';
import halfOgre1 from './Img/halfOgre1.png';
import halfElf1 from './Img/halfElf1.png';
import RacesShow from './RacesShow';
import {newFeatContext, featsContext, raceModifyContext} from '../Store';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function SliderRace(props) {
  const classes = useStyles();


const marks = [
  {
    value: 0,
    label: "DWARF",
  },
  {
    value: 16,
    label: 'HALFING',
  },
  {
    value: 32,
    label: 'ELF',
  },
  {
    value: 48,
    label: 'HUMAN',
  },
  {
    value: 64,
    label: 'GNOME',
  },
  {
    value: 80,
    label: 'HALFOGR',
  },
  {
    value: 96,
    label: 'HALF-ELF',
  },
];

// const races - rasa jest obiektem ,w którym klucz to nazawa rasy a wartościami są oddzielne obiekty, które modyfikują siłę + np. opis

function valuetext(value) {
  return value;
}

function labelText(label) {
    return label;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value);
}

const [newFeat, setNewFeat] = useContext(newFeatContext);
const [feats, setFeats] = useContext(featsContext);
const [ stats, setStats ] = useContext(statContext);
const [raceModify, setRaceModify] = useContext(raceModifyContext);


const [race, setRace] = useContext(raceContext);
// Zawartośc pudełek - zdjęcie - tekst - buttony
  const dwarf = () => {
    return (
      <div className={css`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 2em;
    
    
     `}>

   <div className={css`
     width: 20vw;
     height: 50vh;
     `}>

      <img src={dwarf2} alt="Dwarf" className={css`
     width: auto;
     height: 40vh;
     margin-top: 2em;
     margin-left: -4em;
     `}></img>
      
     </div> 

      <div className={css`
      font-size: 0.72em;
      color: white;
      text-align: justify;
      width: 30vw;
      height: 30vh;
      `}>
        {/* Text */}
        <h2> Dwarf Racial Traits </h2>
        <h3> <b>+2 Constitution, +2 Wisdom, –2 Charisma: </b>Dwarves are both tough and wise, but also a bit gruff. </h3>
        <p>
        <b>Medium:</b> Dwarves are Medium creatures and have no bonuses or penalties due to their size. </p>
        <p>   <b>Slow and Steady:</b> Dwarves have a base speed of 20 feet, but their speed is never modified by armor
            or encumbrance.</p>
        <p><b>Darkvision</b>Dwarves can see in the dark up to 60 feet. </p>
        <p><b>Defensive Training:</b>Dwarves get a +4 dodge bonus to AC against monsters of the giant subtype.
        </p>
        <p><b>Greed:</b> Dwarves receive a +2 racial bonus on Appraise skill checks made to determine the price
        of nonmagical goods that contain precious metals or gemstones.
        </p>
        <p><b>Hatred:</b> Dwarves receive a +1 bonus on attack rolls against humanoid creatures of the orc and
        goblinoid subtypes due to special training against these hated foes.
        </p>
        <p><b>Hardy</b> Dwarves receive a +2 racial bonus on saving throws against poison, spells, and
        spell-like abilities.
        </p>
        <p><b>Stability:</b>Dwarves receive a +4 racial bonus to their Combat Maneuver Defense when resisting a
        bull rush or trip attempt while standing on the ground.
        </p>
        <p><b>Stonecunning: </b>Dwarves receive a +2 bonus on Perception checks to potentially notice unusual
        stonework, such as traps and hidden doors located in stone walls or floors. They receive a
        check to notice such features whenever they pass within 10 feet of them, whether or not they are
        actively looking.
        </p>
        <p><b>Weapon Familiarity</b>Dwarves are proficient with battleaxes, heavy picks, and warhammers, and treat
        any weapon with the word “dwarven” in its name as a martial weapon.
        </p>
        <p><b>Languages:</b> Dwarves begin play speaking Common and Dwarven. Dwarves with high Intelligence
        scores can choose from the following: Giant, Gnome, Goblin, Orc, Terran, and Undercommon.</p>

       
      </div>

      </div>
      )
  }
  const halfing = () => {
    return (
      <div className={css`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 2em;
    
    
     `}>

   <div className={css`
     width: 20vw;
     height: 50vh;
     `}>

      <img src={halfing1} alt="halfing" className={css`
     width: auto;
     height: 40vh;
     margin-top: 2em;
     margin-left: -4em;
     `}/>
      
     </div> 

      <div className={css`
      font-size: 0.72em;
      color: white;
      text-align: justify;
      width: 30vw;
      height: 30vh;
      `}>
        {/* Text */}
        <h2> Halfing Racial Traits </h2>
        <h3><b> +2 Constitution, +2 Charisma, –2 Strength: </b>Gnomes are physically weak but surprisingly hardy, and their attitude makes them naturally agreeable. </h3>
        <p>
        <b>Small</b>  Gnomes are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, 
        a –1 penalty to their Combat Maneuver Bonus and Combat Maneuver Defense, and a +4 size bonus on Stealth checks. </p>
        
        <p><b>Slow Speed: </b> Gnomes have a base speed of 20 feet.  </p>
        <p><b>Low-Light Vision:</b> Gnomes can see twice as far as humans in conditions of dim light. See Chapter 7.
        </p>
        <p><b>Defensive Training:</b> Gnomes get a +4 dodge bonus to AC against monsters of the giant subtype. 
        </p>
        <p><b>Gnome Magic:</b> Gnomes add +1 to the DC of any saving throws against illusion spells that they cast. Gnomes with 
        a Charisma of 11 or higher also gain the following spell-like abilities: 1/day—dancing lights, ghost sound, prestidigitation, 
        and speak with animals. The caster level for these effects is equal to the gnome’s level. The DC for these spells is equal to 10 + 
        the spell’s level + the gnome’s Charisma modifier. 
        </p>
        <p><b>Hatred:</b> Gnomes receive a +1 bonus on attack rolls against humanoid creatures of the reptilian and goblinoid subtypes due to special training against these hated foes. 
        </p>
        <p><b>Illusion Resistance</b> Gnomes get a +2 racial saving throw bonus against illusion spells and effects
        </p>
        <p><b>Keen Senses:</b>  Gnomes receive a +2 racial bonus on Perception skill checks. 
        </p>
        <p><b>Obsessive:</b> Gnomes receive a +2 racial bonus on a Craft or Profession skill of their choice.
        </p>
        <p><b>Weapon Familiarity:</b> Gnomes treat any weapon with the word “gnome” in its name as a martial weapon.</p>
        <p><b>Languages: </b>  Gnomes begin play speaking Common, Gnome, and Sylvan. Gnomes with high Intelligence scores can choose from the following: Draconic, Dwarven, Elven, Giant, Goblin, and Orc.
</p>
       
      </div>

      </div>
      )
  }
  const elf = () => {
    return (
      <div className={css`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 2em;
    
    
     `}>

   <div className={css`
     width: 20vw;
     height: 50vh;
     `}>

      <img src={elf1} alt="ELF" className={css`
     width: auto;
     height: 40vh;
     margin-top: 2em;
     margin-left: -4em;
     `}/>
      
     </div> 

      <div className={css`
      font-size: 0.72em;
      color: white;
      text-align: justify;
      width: 30vw;
      height: 30vh;
      `}>
        {/* Text */}
        <h2> Elf Racial Traits </h2>
        <h3> <b>+2 Dexterity, +2 Intelligence, –2 Constitution:</b>Elves are nimble, both in body and mind, but their form is frail. </h3>
        <p>
        <b>Medium: </b>   Elves are Medium creatures and have no bonuses or penalties due to their size. </p>
        
        <p><b>Normal Speed: </b> Elves have a base speed of 30 feet.   </p>
        <p><b>Low-Light Vision:</b>  Elves can see twice as far as humans in conditions of dim light
        </p>
        <p><b>Elven Immunities: </b> Elves are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects. 
        </p>
        <p><b>Elven Magic: </b>  Elves receive a +2 racial bonus on caster level checks made to overcome spell resistance. In addition, 
        elves receive a +2 racial bonus on Spellcraft skill checks made to identify the properties of magic items. 
        </p>
        <p><b>Keen Senses:</b>  Elves receive a +2 racial bonus on Perception skill checks.
        </p>
        <p><b>Weapon Familiarity:</b>  Elves are proficient with longbows (including composite longbows), longswords, 
        rapiers, and shortbows (including composite shortbows), and treat any weapon with the word “elven” in its name as a martial weapon. 
        </p>
        <p><b>Languages:</b>  Elves begin play speaking Common and Elven. Elves with high Intelligence scores can choose from the following: Celestial, Draconic, Gnoll, Gnome, Goblin, Orc, and Sylvan.

        </p>
      
       
      </div>

      </div>
      )
  }
  const human = () => {
    return (
      <div className={css`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 2em;
    
    
     `}>

   <div className={css`
     width: 20vw;
     height: 50vh;
     `}>

      <img src={human1} alt="ELF" className={css`
     width: auto;
     height: 40vh;
     margin-top: 2em;
     margin-left: -4em;
     `}/>
      
     </div> 

      <div className={css`
      font-size: 0.72em;
      color: white;
      text-align: justify;
      width: 30vw;
      height: 30vh;
      `}>
        {/* Text */}
        <h2> Human Racial Traits </h2>
        <h3> <b> +2 to One Ability Score: </b> Elves are nimble, both in body and mind, but their form is frail. </h3>
        <p>
        <b>Medium:  </b>    Humans are Medium creatures and have no bonuses or penalties due to their size. . </p>
        
        <p><b>Normal Speed: </b> Humans have a base speed of 30 feet.    </p>
        <p><b>Bonus Feat:</b>   Humans select one extra feat at 1st level.
        </p>
        <p><b>Skilled:  </b> Humans gain an additional skill rank at 1st level and one additional rank whenever they gain a level.  
        </p>
        <p><b>Languages: </b>  Humans begin play speaking Common. Humans with high Intelligence scores can choose any languages they want (except secret languages, such as Druidic).
        </p>

        <p> <b>Bonus to Ability Score</b></p>
        <ButtonGroup size= "small" variant="contained" color="primary" aria-label="contained primary button group"
        >
        <Button>Strength</Button>
        <Button>Constitution</Button>
        <Button>Dexterity</Button>
        <Button>Intelligence</Button>
        <Button>Winsdom</Button>
        <Button>Charisma</Button>
        </ButtonGroup>
       {/* Zmienić na 1. funkcje, która blokuje się po kliknięciu */}
      </div>

      </div>
      )
  }
  const gnome = () => {
    return (
      <div className={css`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 2em;
    
    
     `}>

   <div className={css`
     width: 20vw;
     height: 50vh;
     `}>

      <img src={gnome1} alt="ELF" className={css`
     width: auto;
     height: 40vh;
     margin-top: 2em;
     margin-left: -4em;
     `}/>
      
     </div> 

      <div className={css`
      font-size: 0.72em;
      color: white;
      text-align: justify;
      width: 30vw;
      height: 30vh;
      `}>
        {/* Text */}
        <h2> Gnome Racial Traits </h2>
        <h3> <b>+2 Constitution, +2 Charisma, –2 Strength:</b>Elves are nimble, both in body and mind, but their form is frail. </h3>
        <p>
        <b>Small: </b>   Gnomes are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, 
        a –1 penalty to their Combat Maneuver Bonus and Combat Maneuver Defense, and a +4 size bonus on Stealth checks.  </p>
        
        <p><b>Slow Speed:  Gnomes have a base speed of 20 feet. </b> Elves have a base speed of 30 feet.   </p>
        <p><b>Low-Light Vision:</b>   Gnomes can see twice as far as humans in conditions of dim light. 
        </p>
        <p><b>Defensive Training: </b> Gnomes get a +4 dodge bonus to AC against monsters of the giant subtype.
        </p>
        <p><b>Gnome Magic:</b>  Gnomes add +1 to the DC of any saving throws against illusion spells that they cast. 
        Gnomes with a Charisma of 11 or higher also gain the following spell-like abilities: 1/day—dancing lights, 
        ghost sound, prestidigitation, and speak with animals. The caster level for these effects is equal to the gnome’s level. 
        The DC for these spells is equal to 10 + the spell’s level + the gnome’s Charisma modifier. 
        </p>
        <p><b>Hatred: </b>   Gnomes receive a +1 bonus on attack rolls against humanoid creatures
         of the reptilian and goblinoid subtypes due to special training against these hated foes. 
        </p>
        <p><b>Illusion Resistance:</b>  Gnomes get a +2 racial saving throw bonus against illusion spells and effects.
        </p>
        <p><b>Keen Senses:</b>   Gnomes receive a +2 racial bonus on Perception skill checks.

        </p>
        <p><b>Obsessive: </b>   Gnomes receive a +2 racial bonus on a Craft or Profession skill of their choice.

        </p>
        <p><b>Weapon Familiarity: </b>   Gnomes treat any weapon with the word “gnome” in its name as a martial weapon. 

        </p>

        <p><b>Languages: </b>    Gnomes begin play speaking Common, Gnome, and Sylvan. Gnomes with high Intelligence scores can choose from the following: Draconic, Dwarven, Elven, Giant, Goblin, and Orc.


        </p>
      
       
      </div>

      </div>
      )
  }
  const halfOgre = () => {
    return (
      <div className={css`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 2em;
    
    
     `}>

   <div className={css`
     width: 20vw;
     height: 50vh;
     `}>

      <img src={halfOgre1} alt="ELF" className={css`
     width: auto;
     height: 40vh;
     margin-top: 2em;
     margin-left: -4em;
     `}/>
      
     </div> 

      <div className={css`
      font-size: 0.72em;
      color: white;
      text-align: justify;
      width: 30vw;
      height: 30vh;
      `}>
        {/* Text */}
        <h2> Half Ogre Racial Traits </h2>
        <h3> <b>+2 to One Ability Score: </b>Half-orc characters get a +2 bonus to one ability score of their choice at creation to represent their varied nature. </h3>
        <p>
        <b>Medium: </b>   Half-orcs are Medium creatures and have no bonuses or penalties due to their size. </p>
        
        <p><b>Normal Speed: </b>  Half-orcs have a base speed of 30 feet.    </p>
        <p><b>Darkvision:</b>  Half-orcs can see in the dark up to 60 feet.
        </p>
        <p><b>Intimidating:  </b>  Half-orcs receive a +2 racial bonus on Intimidate skill checks due to their fearsome nature. 
        </p>
        <p><b>Orc Blood: </b> Half-orcs count as both humans and orcs for any effect related to race.
        </p>
        <p><b>Orc Ferocity:</b>   Once per day, when a half-orc is brought below 0 hit points but not killed, he can fight on for one more round as if disabled. At the end of his next turn, unless brought to above 0 hit points, he immediately falls unconscious and begins dying. 
        </p>
        <p><b>Weapon Familiarity:</b>   Half-orcs are proficient with greataxes and falchions and treat any weapon with the word “orc” in its name as a martial weapon. 
        </p>
        <p><b>Languages:</b>   Half-orcs begin play speaking Common and Orc. Half-orcs with high Intelligence scores can choose from the following: Abyssal, Draconic, Giant, Gnoll, and Goblin.


        </p>
      
       
      </div>

      </div>
      )
  }
  const halfElf = () => {
    return (
      <div className={css`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 2em;
    
    
     `}>

   <div className={css`
     width: 20vw;
     height: 50vh;
     `}>

      <img src={halfElf1} alt="ELF" className={css`
     width: auto;
     height: 40vh;
     margin-top: 2em;
     margin-left: -4em;
     `}/>
      
     </div> 

      <div className={css`
      font-size: 0.72em;
      color: white;
      text-align: justify;
      width: 30vw;
      height: 30vh;
      `}>
        {/* Text */}
        <h2> Half Elf Racial Traits </h2>
        <h3> <b>+2 to One Ability Score: </b>Half-elf characters get a +2 bonus to one ability score of their choice at creation to represent their varied nature. </h3>
        <p>
        <b>Medium: </b>   Half-elves are Medium creatures and have no bonuses or penalties due to their size.  </p>
        
        <p><b>Normal Speed: </b>  Half-elves have a base speed of 30 feet.   </p>
        <p><b>Low-Light Vision:</b>  E Half-elves can see twice as far as humans in conditions of dim light. 
        </p>
        <p><b>Adaptability:</b>  Half-elves receive Skill Focus as a bonus feat at 1st level.  
        </p>
        <p><b>Elf Blood:</b>   Half-elves count as both elves and humans for any effect related to race. 
        </p>
        <p><b>Elven Immunities:</b>  Half-elves are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects. 
        </p>
        <p><b>Keen Senses:</b>  Half-elves receive a +2 racial bonus on Perception skill checks. 
        </p>
        <p><b>Multitalented:</b>  Half-elves choose two favored classes at first level and gain +1 hit point or +1 skill point whenever they take a level in either one of those classes. See Chapter 3 for more information about favored classes. 

        </p>
        <p><b>Languages:</b>   Half-elves begin play speaking Common and Elven. Half-elves with high Intelligence scores can choose any languages they want (except secret languages, such as Druidic).


        </p>
      
       
      </div>

      </div>
      )
  }
  // changeImage - patrzy na rasę, która jest zmieniana w changeContainer
  // staty dalej są stale zrobione + 2 PRZY WYŚWIETLENIU!




  const changeContainer = (event, value) => {
      let newState = {};

      if (value === 0) {
  // DWARF

        newState.consituition = raceModify.consituition = 2;
        setRaceModify({...raceModify, ...newState});

        newState.winsdom = raceModify.winsdom = 2;
        setRaceModify({...raceModify, ...newState});

        newState.charisma = raceModify.charisma = 2;
        setRaceModify({...raceModify,...newState});


        setRace("dwarf");

        setFeats([...feats, {id: 1, text: "FEATS KRASNALA"}]);

      } else if ( value === 16 ) {
    // HALGING
        newState.consituition = raceModify.consituition = 2;
        setRaceModify({...raceModify, ...newState});

        newState.charisma = raceModify.charisma = 2;
        setRaceModify({...raceModify, ...newState});

        newState.strenght = raceModify.strenght = -2;
        setRaceModify({...raceModify,...newState});

        setRace("halfing");

      } else if ( value === 32 ) {
        // ELF

        newState.dexterity = raceModify.dexterity = 2;
        setRaceModify({...raceModify, ...newState});

        newState.intelligence = raceModify.intelligence = 2;
        setRaceModify({...raceModify, ...newState});

        newState.consituition = raceModify.consituition = -2;
        setRaceModify({...raceModify,...newState});

        setRace("elf");
      } else if ( value === 48 ) {
  // HUMAN


        setRace("human");
      } else if ( value === 64) {
  // GNOME
        newState.consituition = raceModify.consituition = 2;
        setRaceModify({...raceModify, ...newState});

        newState.charisma = raceModify.charisma = 2;
        setRaceModify({...raceModify, ...newState});

        newState.strenght = raceModify.strenght = -2;
        setRaceModify({...raceModify,...newState});

        setRace("gnome")
      } else if ( value === 80) {
        // HALF OGRE - button selet

        
        setRace("halfOgre")
      } else if (value === 96) {
        // Button select
        setRace('halfElf');
      } else {
        // DWARF - defoult
        newState.consituition = raceModify.consituition = 2;
        setRaceModify({...raceModify, ...newState});

        newState.charisma = raceModify.charisma = 2;
        setRaceModify({...raceModify, ...newState});

        newState.strenght = raceModify.strenght = -2;
        setRaceModify({...raceModify,...newState});
        setRace('dwarf');
      }
    } 

    const changeImage = (race) => {
      if ( race === "dwarf" ) {
        return (
          <div>
            {dwarf()}
          </div>
        )
      } else if ( race === "halfing") {
        return (
          <div>
            {halfing()}
          </div>
        )
      } else if ( race === 'elf') {
        return (
          <div>
            {elf()}
          </div>
        )
      } else if ( race === "human") {
        return (
          <div>
            {human()}
          </div>
        )
      } else if ( race === "gnome") {
        return (
          <div>
            {gnome()}
          </div>
        )
      } else if ( race === "halfOgre") {
        return (
          <div>
            {halfOgre()}
          </div>
        )
    } else if ( race === "halfElf") {
      return (
        <div>
          {halfElf()}
        </div>
      )
    } else  {
      return (
        <div>
        {dwarf()}
        </div>
      )
    }

  }

  
  return (
    <div >
      <div className={css`
      margin-bottom: 4em;
      margin-top: 3em;
      box-shadow: inset 0 0 0 1000px rgba(77, 77, 77, 0.4);
      width: 60vw;
      margin-left: auto;
      margin-right: auto;


      `}> {changeImage(race)}
      </div>

      <Slider className="character-peaking"
        defaultValue={0}
        getAriaValueText={labelText}
        aria-labelledby="discrete-slider-always"
        step={16}
        marks={marks}
        color="secondary"
        // valueLabelDisplay="on"
        min={0}
        max={96}
        onChangeCommitted={(event, value) => changeContainer(event, value)}
      />
    </div>
  );
}

export default SliderRace;


// Dodwanie raceModyfy przy człowkieku, pół elfie i pól orku
// Dodawanie featsów na końcu ras - zabieranie ich po zmianie postaci i dodwania nowych