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
import {classSkillsContext} from '../Store';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { blueGrey } from '@material-ui/core/colors';
import barbarian2 from './Img/barbarian2.png';
import bard1 from './Img/bard1.png';
import {newFeatContext, featsContext, raceModifyContext} from '../Store';
import {skillsCheckContext} from '../Store';
import {rankPointsLeftContext} from '../Store';



function Class (props)  {
  const [newFeat, setNewFeat] = useContext(newFeatContext);
  const [feats, setFeats] = useContext(featsContext);
  const [characterClass, setCharacterClass] = useContext(classContext);
  const [skillsCheck, setSkillsCheck] = useContext(skillsCheckContext);
  const [ modify, setModify] = useContext(modifyContext);
  const [classSkills, setClassSkills] = useContext(classSkillsContext);
  const [rankPointsLeft, setRankPointsLeft] = useContext(rankPointsLeftContext);



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
      <p><b>Class Skills </b> </p>
      <p>
      The barbarian’s class skills are Acrobatics (Dex), Climb (Str), Craft (Int), Handle Animal (Cha), Intimidate (Cha), Knowledge (nature) (Int), Perception (Wis), Ride (Dex), Survival (Wis), and Swim (Str). Skill Ranks per Level: 4 + Int modifier.
      </p>
      <p><b> Skill rank per Level: </b>  4 + Int. modifier <b>({modify.intelligence})</b>.
 </p>

     
     
    </div>

    </div>
    )
}
const bard = () => {
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

    <img src={bard1} alt="Barbarian" className={css`
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

     
      <p><b>Role: </b> Bards capably confuse and confound their foes while inspiring their allies to ever-greater daring. While accomplished with both weapons and magic, the true strength of bards lies outside melee, where they can support their companions and undermine their foes without fear of interruptions to their performances.  </p>
      <p><b>Alignment: </b> Any.   </p>
      <p><b>Hit Die: </b>d8.  </p>
      <p><b>Class Skills </b> </p>

      <p>
      The bard’s class skills are Acrobatics (Dex), Appraise (Int), Bluff (Cha), Climb (Str), Craft (Int), Diplomacy (Cha), Disguise (Cha), Escape Artist (Dex), Intimidate (Cha), Knowledge (all) (Int), Linguistics (Int), Perception (Wis), Perform (Cha), Profession (Wis), Sense Motive (Wis), Sleight of Hand (Dex), Spellcraft (Int), Stealth (Dex), and Use Magic Device (Cha).       </p>
      <p><b> Skill rank per Level: </b>  6 +  Int. modifier <b>({modify.intelligence})</b>. </p>

     
     
    </div>

    </div>
    )
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
        let newState = {};
          if (value === 0) {

            setCharacterClass("barbarian");

            // setClassSkills(barbarian);
            
            setRankPointsLeft( 4 + modify.intelligence);

            
              // Można wywalić skillsCheck wszędzie
              newState.acrobatic =  true;
              newState.appraise =  false;
              newState.bluff =  false;
              newState.climb =  true;
              newState.craft =  true;
              newState.diplomacy =  false;
              newState.disableDevice =  false;
              newState.disguice =  false;
              newState.escapeArtist =  false;
              newState.fly = false;
              newState.handleAnimal = false;
              newState.heal =  false;
              newState.intimidate = true;
              newState.knowledgeAll = false;
              newState.knowledgeArcana =  false;
              newState.knowledgeDungeoneering = false;
              newState.knowledgeGeography = false;
              newState.knowledgeHisotry =  false;
              newState.knowledgeLocal =  false;
              newState.knowledgeNautre =  true;
              newState.knowledgeNobility =  false;
              newState.knowledgePlanes =  false;
              newState.knowledgeReligion =  false;
              newState.linguistics =  false;
              newState.perception =  true;
              newState.perform =  false;
              newState.profession =  false;
              newState.ride =  true;
              newState.senseMotive =  false;
              newState.sleightOfHand =  false;
              newState.spellcraft =  false;
              newState.stealth =  false;
              newState.survival =  true;
              newState.swim =  true;
              newState.useMagicDevice = false;

              setClassSkills(barbarian)
              setSkillsCheck({...skillsCheck, ...newState});


          } else if ( value === 11) {
            setCharacterClass("bard");

            setFeats ([...feats, {id: 1, text: "BARD"}]);


            newState.acrobatic =  true;
            newState.appraise =  true;
            newState.bluff =  true;
            newState.climb =  true;
            newState.craft =  true;
            newState.diplomacy =  true;
            newState.disableDevice = false;
            newState.disguice =  true;
            newState.escapeArtist =  true;
            newState.fly =  false;
            newState.handleAnimal =  false;
            newState.heal = false;
            newState.intimidate =  true;
            newState.knowledgeAll = true;
            newState.knowledgeArcana = false;
            newState.knowledgeDungeoneering =  false;
            newState.knowledgeGeography =  false;
            newState.knowledgeHisotry =  false;
            newState.knowledgeLocal =  false;
            newState.knowledgeNautre =  true;
            newState.knowledgeNobility =  false;
            newState.knowledgePlanes =  false;
            newState.knowledgeReligion =false;
            newState.linguistics =  true;
            newState.perception =  true;
            newState.perform =  true;
            newState.profession =  true;
            newState.ride = false;
            newState.senseMotive =  true;
            newState.sleightOfHand =  true;
            newState.spellcraft =  true;
            newState.stealth =  true;
            newState.survival =  false;
            newState.swim =  false;
            newState.useMagicDevice = true;

            setSkillsCheck({...skillsCheck, ...newState});

            console.log(Object.keys(skillsCheck));
            // for (Object.keys(skillsCheck)) {
              
            // }

          } else if (value === 22) {

            newState.acrobatic =  true;
            newState.appraise =  true;
            newState.bluff =  true;
            newState.climb =  true;
            newState.craft =  true;
            newState.diplomacy =  true;
            newState.disableDevice = false;
            newState.disguice =  true;
            newState.escapeArtist =  true;
            newState.fly =  false;
            newState.handleAnimal =  false;
            newState.heal = false;
            newState.intimidate =  true;
            newState.knowledgeAll = true;
            newState.knowledgeArcana = false;
            newState.knowledgeDungeoneering =  false;
            newState.knowledgeGeography =  false;
            newState.knowledgeHisotry =  false;
            newState.knowledgeLocal =  false;
            newState.knowledgeNautre =  true;
            newState.knowledgeNobility =  false;
            newState.knowledgePlanes =  false;
            newState.knowledgeReligion =false;
            newState.linguistics =  true;
            newState.perception =  true;
            newState.perform =  true;
            newState.profession =  true;
            newState.ride = false;
            newState.senseMotive =  true;
            newState.sleightOfHand =  true;
            newState.spellcraft =  true;
            newState.stealth =  true;
            newState.survival =  false;
            newState.swim =  false;
            newState.useMagicDevice = true;

            setSkillsCheck({...skillsCheck, ...newState});



            setCharacterClass('cleric')
          } else if (value === 33) {

            newState.acrobatic =  false;
            newState.appraise =  true;
            newState.bluff = false;
            newState.climb = false;
            newState.craft =  false;
            newState.diplomacy =  true;
            newState.disableDevice = false;
            newState.disguice =  true;
            newState.escapeArtist = false;
            newState.fly =  false;
            newState.handleAnimal =  false;
            newState.heal = true;
            newState.intimidate =  false;
            newState.knowledgeAll =false;
            newState.knowledgeArcana = true;
            newState.knowledgeDungeoneering =  false;
            newState.knowledgeGeography =  false;
            newState.knowledgeHisotry = true;
            newState.knowledgeLocal =  false;
            newState.knowledgeNautre =  true;
            newState.knowledgeNobility =  true;
            newState.knowledgePlanes =  true;
            newState.knowledgeReligion = true;
            newState.linguistics =  true;
            newState.perception =  false;
            newState.perform =  false;
            newState.profession =  true;
            newState.ride = false;
            newState.senseMotive =  true;
            newState.sleightOfHand =  false;
            newState.spellcraft = false;
            newState.stealth =  false;
            newState.survival =  false;
            newState.swim =  false;
            newState.useMagicDevice = false;
            setSkillsCheck({...skillsCheck, ...newState});

            setCharacterClass('druid')
          } else if (value ===44) {

            newState.acrobatic =  false;
            newState.appraise =  false;
            newState.bluff =  false;
            newState.climb =  true;
            newState.craft =  true;
            newState.diplomacy =  false;
            newState.disableDevice = false;
            newState.disguice =  false;
            newState.escapeArtist =  false;
            newState.fly =  true;
            newState.handleAnimal =  true;
            newState.heal = true;
            newState.intimidate =  false;
            newState.knowledgeAll = false;
            newState.knowledgeArcana = false;
            newState.knowledgeDungeoneering =  false;
            newState.knowledgeGeography =  true;
            newState.knowledgeHisotry =  false;
            newState.knowledgeLocal =  false;
            newState.knowledgeNautre =  true;
            newState.knowledgeNobility =  false;
            newState.knowledgePlanes =  false;
            newState.knowledgeReligion =false;
            newState.linguistics =  false;
            newState.perception =  true;
            newState.perform =  false;
            newState.profession =  true;
            newState.ride = true;
            newState.senseMotive =  false;
            newState.sleightOfHand =  false;
            newState.spellcraft =  true;
            newState.stealth =  false;
            newState.survival =  true;
            newState.swim = true;
            newState.useMagicDevice = false;
            setSkillsCheck({...skillsCheck, ...newState});

            setCharacterClass('fighter')
          } else if (value === 55) {
            
            newState.acrobatic =  false;
            newState.appraise =  false;
            newState.bluff =  false;
            newState.climb =  true;
            newState.craft =  true;
            newState.diplomacy =  false;
            newState.disableDevice = false;
            newState.disguice =  false;
            newState.escapeArtist =  false;
            newState.fly =  false;
            newState.handleAnimal =  true;
            newState.heal = false;
            newState.intimidate =  true;
            newState.knowledgeAll = false;
            newState.knowledgeArcana = false;
            newState.knowledgeDungeoneering =  true;
            newState.knowledgeGeography =  false;
            newState.knowledgeHisotry =  false;
            newState.knowledgeLocal =  false;
            newState.knowledgeNautre =  false;
            newState.knowledgeNobility =  false;
            newState.knowledgePlanes =  false;
            newState.knowledgeReligion =false;
            newState.linguistics =  false;
            newState.perception =  false;
            newState.perform =  false;
            newState.profession =  true;
            newState.ride = true;
            newState.senseMotive =  false;
            newState.sleightOfHand =  false;
            newState.spellcraft =  false;
            newState.stealth =  false;
            newState.survival =  true;
            newState.swim =  true;
            newState.useMagicDevice = false;
            setSkillsCheck({...skillsCheck, ...newState});

            setCharacterClass('monk')
          } else if (value === 66) {

            newState.acrobatic =  true;
            newState.appraise =  false;
            newState.bluff =  false;
            newState.climb =  true;
            newState.craft =  true;
            newState.diplomacy =  false;
            newState.disableDevice = false;
            newState.disguice =  false;
            newState.escapeArtist =  true;
            newState.fly =  false;
            newState.handleAnimal =  false;
            newState.heal = false;
            newState.intimidate =  true;
            newState.knowledgeAll = false;
            newState.knowledgeArcana = false;
            newState.knowledgeDungeoneering =  false;
            newState.knowledgeGeography =  false;
            newState.knowledgeHisotry =  true;
            newState.knowledgeLocal =  false;
            newState.knowledgeNautre =  false;
            newState.knowledgeNobility =  false;
            newState.knowledgePlanes =  false;
            newState.knowledgeReligion =true;
            newState.linguistics =  false;
            newState.perception =  true;
            newState.perform =  true;
            newState.profession =  false;
            newState.ride = true;
            newState.senseMotive =  true;
            newState.sleightOfHand =  false;
            newState.spellcraft =  false;
            newState.stealth =  true;
            newState.survival =  false;
            newState.swim =  true;
            newState.useMagicDevice = false;
            setSkillsCheck({...skillsCheck, ...newState});

            setCharacterClass('ranger')
          } else if (value === 77) {

            newState.acrobatic =  true
            newState.appraise =  true;
            newState.bluff =  true;
            newState.climb =  true;
            newState.craft = true;
            newState.diplomacy =  false;
            newState.disableDevice = false;
            newState.disguice =  false;
            newState.fly =  false;
            newState.handleAnimal =  false;
            newState.heal = false;
            newState.intimidate =  true;
            newState.knowledgeAll = false;
            newState.knowledgeArcana = false;
            newState.knowledgeDungeoneering =  true;
            newState.knowledgeGeography =  false;
            newState.knowledgeHisotry =  false;
            newState.knowledgeLocal =  true;
            newState.knowledgeNautre =  false;
            newState.knowledgeNobility =  false;
            newState.knowledgePlanes =  false;
            newState.knowledgeReligion =false;
            newState.linguistics =   true;
            newState.perception =  true;
            newState.perform =   true;
            newState.profession =   true;
            newState.ride = false;
            newState.senseMotive =   true;
            newState.sleightOfHand =   true;
            newState.spellcraft =  false;
            newState.stealth =   true;
            newState.survival =  false;
            newState.swim =  true;
            newState.useMagicDevice = true;
            setSkillsCheck({...skillsCheck, ...newState});

            setCharacterClass('sorccerer')
          } else if (value === 88) {

            newState.acrobatic =  false;
            newState.appraise =  false;
            newState.bluff =  false;
            newState.climb =  false;
            newState.craft =  true;
            newState.diplomacy =  true;
            newState.disableDevice = false;
            newState.disguice =  false;
            newState.escapeArtist =  false;
            newState.fly =  false;
            newState.handleAnimal =  true;
            newState.heal = true;
            newState.intimidate =  false;
            newState.knowledgeAll = false;
            newState.knowledgeArcana = false;
            newState.knowledgeDungeoneering =  false;
            newState.knowledgeGeography =  false;
            newState.knowledgeHisotry =  false;
            newState.knowledgeLocal =  false;
            newState.knowledgeNautre =  false;
            newState.knowledgeNobility = true;
            newState.knowledgePlanes =  false;
            newState.knowledgeReligion =true;
            newState.linguistics =  false;
            newState.perception =  false;
            newState.perform =  false;
            newState.profession =  true;
            newState.ride = true;
            newState.senseMotive =  true;
            newState.sleightOfHand =  false;
            newState.spellcraft =  true;
            newState.stealth =  false;
            newState.survival =  false;
            newState.swim =  false;
            newState.useMagicDevice = false;
            setSkillsCheck({...skillsCheck, ...newState});

            setCharacterClass('palladin')
          } else if (value === 99) {

            newState.acrobatic =  false;
            newState.appraise =  true;
            newState.bluff =  true;
            newState.climb =  true;
            newState.craft =  true;
            newState.diplomacy =  false;
            newState.disableDevice = false;
            newState.disguice =  false;
            newState.escapeArtist =  false;
            newState.fly =   true;
            newState.handleAnimal =  true;
            newState.heal = true;
            newState.intimidate =  true;
            newState.knowledgeAll = false;
            newState.knowledgeArcana =  true;
            newState.knowledgeDungeoneering =  true;
            newState.knowledgeGeography =  true;
            newState.knowledgeHisotry =  false;
            newState.knowledgeLocal =  false;
            newState.knowledgeNautre =  true;
            newState.knowledgeNobility =  false;
            newState.knowledgePlanes =  false;
            newState.knowledgeReligion =false;
            newState.linguistics =  false;
            newState.perception = true;
            newState.perform =  false;
            newState.profession =  true;
            newState.ride = false;
            newState.senseMotive =  false;
            newState.sleightOfHand =  false;
            newState.spellcraft =  true;
            newState.stealth =  false;
            newState.survival =  false;
            newState.swim = false;
            newState.useMagicDevice = false;
        
            setSkillsCheck({...skillsCheck, ...newState});

            setCharacterClass('rogue')
          } else if (value === 110) {


            newState.acrobatic =  false;
            newState.appraise =  false;
            newState.bluff =  false;
            newState.climb =  false;
            newState.craft =  false;
            newState.diplomacy =  false;
            newState.disableDevice = false;
            newState.disguice =  false;
            newState.escapeArtist =  false;
            newState.fly =  false;
            newState.handleAnimal =  false;
            newState.heal = false;
            newState.intimidate =  false;
            newState.knowledgeAll = false;
            newState.knowledgeArcana = false;
            newState.knowledgeDungeoneering =  false;
            newState.knowledgeGeography =  false;
            newState.knowledgeHisotry =  false;
            newState.knowledgeLocal =  false;
            newState.knowledgeNautre =  false;
            newState.knowledgeNobility =  false;
            newState.knowledgePlanes =  false;
            newState.knowledgeReligion =false;
            newState.linguistics =  false;
            newState.perception =  false;
            newState.perform =  false;
            newState.profession =  false;
            newState.ride = false;
            newState.senseMotive =  false;
            newState.sleightOfHand =  false;
            newState.spellcraft =  false;
            newState.stealth =  false;
            newState.survival =  false;
            newState.swim =  false;
            newState.useMagicDevice = false;
            setSkillsCheck({...skillsCheck, ...newState});

          setCharacterClass('wizard')
          } else {

            newState.acrobatic =  true;
              newState.appraise =  false;
              newState.bluff =  false;
              newState.climb =  true;
              newState.craft =  true;
              newState.diplomacy =  false;
              newState.disableDevice =  false;
              newState.disguice =  false;
              newState.escapeArtist =  false;
              newState.fly = false;
              newState.handleAnimal = false;
              newState.heal =  false;
              newState.intimidate = true;
              newState.knowledgeAll = false;
              newState.knowledgeArcana =  false;
              newState.knowledgeDungeoneering = false;
              newState.knowledgeGeography = false;
              newState.knowledgeHisotry =  false;
              newState.knowledgeLocal =  false;
              newState.knowledgeNautre =  true;
              newState.knowledgeNobility =  false;
              newState.knowledgePlanes =  false;
              newState.knowledgeReligion =  false;
              newState.linguistics =  false;
              newState.perception =  true;
              newState.perform =  false;
              newState.profession =  false;
              newState.ride =  true;
              newState.senseMotive =  false;
              newState.sleightOfHand =  false;
              newState.spellcraft =  false;
              newState.stealth =  false;
              newState.survival =  true;
              newState.swim =  true;
              newState.useMagicDevice = false;
              setSkillsCheck({...skillsCheck, ...newState});

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