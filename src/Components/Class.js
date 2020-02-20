import React from 'react';
import { useState} from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import white from '@material-ui/core/colors/purple';


import {useContext} from 'react';
import Stats, { modifyContext } from '../Store';
import { statContext } from '../Store';
import { classContext } from '../Store';
import {css} from 'emotion';
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { blueGrey } from '@material-ui/core/colors';
import barbarian2 from './Img/barbarian2.png';
import {newFeatContext, featsContext, raceModifyContext} from '../Store';

function Class (props)  {
  const [newFeat, setNewFeat] = useContext(newFeatContext);
  const [feats, setFeats] = useContext(featsContext);
  const [characterClass, setCharacterClass] = useContext(classContext)

        const marks = [
          {
            value: 0,
            label: "BARBARIAN",
          },
          {
            value: 11,
            label: 'BARD',
          },
          {
            value: 22,
            label: 'CLERIC',
          },
          {
            value: 33,
            label: 'DRUID',
          },
          {
            value: 44,
            label: 'FIGHTER',
          },
          {
            value: 55,
            label: 'MONK',
          },
          {
            value: 66,
            label: 'RANGER',
          },
          {
            value: 77,
            label: 'SORCCERER',
          },
          {
            value: 88,
            label: 'PALLADIN',
          },
          {
            value: 99,
            label: 'ROGUE',
          },
          {
            value: 110,
            label: 'WIZARD',
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

const barbarian = () => {
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

    <img src={barbarian2} alt="Barbarian" className={css`
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
      <h2> Class Skills </h2>
      <p>
      The barbarian’s class skills are Acrobatics (Dex), Climb (Str), Craft (Int), Handle Animal (Cha), Intimidate (Cha), Knowledge (nature) (Int), Perception (Wis), Ride (Dex), Survival (Wis), and Swim (Str). Skill Ranks per Level: 4 + Int modifier.
 </p>
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
const bard = () => {

}
const cleric = () => {

}
const druid = () => {

}
const fighter = () => {

}
const monk = () => {

}
const ranger = () => {

}
const sorccerer = () => {

}
const palladin = () => {

}
const rogue = () => {

}
const wizard = () => {

}

      const changeContainer = (event, value) => {
          if (value === 0) {
            setCharacterClass("barbarian")
          } else if ( value === 11) {
            setCharacterClass("bard")
          } else if (value === 22) {
            setCharacterClass('cleric')
          } else if (value === 33) {
            setCharacterClass('druid')
          } else if (value ===44) {
            setCharacterClass('fighter')
          } else if (value === 55) {
            setCharacterClass('monk')
          } else if (value === 66) {
            setCharacterClass('ranger')
         
          } else if (value === 77) {
            setCharacterClass('sorccerer')
          } else if (value === 88) {
            setCharacterClass('pallading')
          } else if (value === 99) {
            setCharacterClass('rogue')
          } else if (value === 110) {
          setCharacterClass('wizard')
          } else {
            setCharacterClass("barbarian")
        }
      }

      const changeImage = (characterClass) => {
        if (characterClass === 'barbarian') {
          return (
          <div>
            {barbarian()}
          </div>
          )
        } else if (characterClass === 'bard') {
          return (
            <div>
              {bard()}
            </div>
            )

        } else if (characterClass === 'cleric') {
          return (
            <div>
              {cleric()}
            </div>
            )

        } else if (characterClass === 'druid') {
          return (
            <div>
              {druid()}
            </div>
            )

        } else if (characterClass === 'fighter') {
          return (
            <div>
              {fighter()}
            </div>
            )
      } else if (characterClass === 'monk') {
        return (
          <div>
            {monk()}
          </div>
          )
      }else if (characterClass === 'ranger') {
        return (
          <div>
            {ranger()}
          </div>
          )
      }else if (characterClass === 'sorccerer') {
        return (
          <div>
            {sorccerer()}
          </div>
          )
      }else if (characterClass === 'pallading') {
        return (
          <div>
            {palladin()}
          </div>
          )
      }else if (characterClass === 'rogue') {
        return (
          <div>
            {rogue()}
          </div>
          )
      } else if (characterClass === 'wizard') {
        return (
          <div>
            {wizard()}
          </div>
          ) 
      } else {
        return (
          <div>
            {barbarian()}
          </div>
        )
      }
    }
    return(
        <div>

        <div className={ css`
        margin-bottom: 4em;
        margin-top: 3em;
        box-shadow: inset 0 0 0 1000px rgba(77, 77, 77, 0.4);
        width: 60vw;
      
        margin-left: auto;
        margin-right: auto;


      `}> {changeImage(characterClass)}
      </div>

    <Slider className="character-peaking"
        defaultValue={0}
        getAriaValueText={labelText}
        aria-labelledby="discrete-slider-always"
        step={11}
        marks={marks}
        color='secondary'
        // valueLabelDisplay="on"
        min={0}
        max={110}
        onChangeCommitted={(event, value) => changeContainer(event, value)}      />
        </div>
    )
}

export default Class;