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
import dwarf2 from './dwarf2.png';
import RacesShow from './RacesShow';
import dwarf from './RacesShow';



function SliderRace(props) {
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

function valuetext(value) {
  return value;
}

function labelText(label) {
    return label;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value);
}


const [ stats, setStats ] = useContext(statContext);

const [race, setRace] = useContext(raceContext);

const [background, setBackground] = useState("url(score-bg.png)");



  // const raceImgStyle = css`
  // width: 30vw;
  // height: 30vh;
  // padding: 3em;
  // margin-left: 15.5em;
  // margin-top: 5em;
  // margin-bottom: 15em;
  // background-repeat:  no-repeat;
  // background-size: cover;
  // background-image: ${background};
  // `;

  // const raceTextStyle = css`

  // color: white;
  // text-align: left;
  // font-size: 0.9em;
  // width: 40vw;
  // margin-left: 30vw;
  // `;

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
        <h3> +2 Constitution, +2 Wisdom, –2 Charisma: Dwarves are both tough and wise, but also a bit gruff. </h3>
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



  const changeContainer = (event, value) => {
    let newState = {};
    
    if (value > 10) {
  
      newState = setStats(stats.strengtht + 2);
      setStats({...stats, ...newState});
    console.log("dua");

      return(
        <div>
          <h1>Dupa</h1>
          
        </div>
      )
    } else {
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
            <h3> +2 Constitution, +2 Wisdom, –2 Charisma: Dwarves are both tough and wise, but also a bit gruff. </h3>
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
  } 

   
  
  


// const sectionStyle = {

//   width: "30vw",
//   height: "30vh",
//   padding: "3em",
//   marginLeft: "15.5em",
//   marginTop: "10em",
//   marginBottom: "5em",
//   backgroundRepeat:  "no-repeat",
//   backgroundSize: "cover",
//   backgroundImage: "url(" + Background + ")"

// };



  return (
    <div >
      <div className={css`
      margin-bottom: 4em;
      margin-top: 3em;
      box-shadow: inset 0 0 0 1000px rgba(77, 77, 77, 0.4);
      width: 60vw;
      margin-left: auto;
      margin-right: auto;


      `}> {changeContainer()}
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