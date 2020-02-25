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

     
      <p>   <b>Role: </b> Barbarians excel in combat, possessing the martial prowess and fortitude to take on foes seemingly far superior to themselves. With rage granting them boldness and daring beyond that of most other warriors, barbarians charge furiously into battle and ruin all who would stand in their way. </p>
      <p><b>Alignment: </b>Any nonlawful.  </p>
      <p><b>Hit Die: </b>d12.  </p>
      <p>
      The barbarian’s class skills are Acrobatics (Dex), Climb (Str), Craft (Int), Handle Animal (Cha), Intimidate (Cha), Knowledge (nature) (Int), Perception (Wis), Ride (Dex), Survival (Wis), and Swim (Str). Skill Ranks per Level: 4 + Int modifier.
      </p>
     
     
     
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
            setCharacterClass("barbarian");
            setFeats ([...feats, {id: 1, text: "BARBARIAN"}]);
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