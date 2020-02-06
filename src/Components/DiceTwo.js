import React, { useState } from 'react';
import Stats from './Stats';

function DiceTwo(props) {

    const [strenght, setStrenght] = useState(1);
    const [dexterity, setDexterity] = useState(1);
    const [intelligence, setIntelligence] = useState(1);
    const [windsdom, setWindsdom] = useState(1);
    const [charisma, setCharisma] = useState(1);
    const [ diceMax, setDiceMax ] = useState(10);

    const [strenghtRoll, setStrenghtRoll] = useState();
    const [dexterityRoll, setDexterityRoll] = useState();
    const [intelligenceRoll, setIntelligenceRoll] = useState();
    const [windsdomRoll, setWindsdomRoll] = useState();
    const [charismaRoll, setCharismaRoll] = useState();

    let diceRoll = Math.floor(Math.random() * 6) + 1; 
 

    const strenghtDiceMinus = () => {
       
        setStrenght(strenght - 1)
        if ( strenght <= 1 ) {
            setStrenght(1);
            return;
        }

        setDiceMax(diceMax + 1)
        if (diceMax >= 10){
            setDiceMax(10);
            return;
        }

    } 

    const strenghtDicePlus = () => {
        if (diceMax <= 0) {
            return;
        }
        setStrenght(strenght + 1)
        
        if ( strenght >= 4 ) {
            setStrenght(4)
            return;
        } else {
        setDiceMax(diceMax - 1)
        }
        if (diceMax <= 0){
            setDiceMax(0);
            return;
        }
        
    } 


    const dexterityDiceMinus = () => {
        setDexterity(dexterity - 1)
        if(dexterity <= 1) {
            setDexterity(1);
        }
        if (dexterity <= 1) {
            return;
        }
        setDiceMax(diceMax + 1)
        if (diceMax >= 10){
            setDiceMax(10)
            return;
        }
        
        
    }


    const dexterityDicePlus = () => {
        if (diceMax <= 0) {
            return;
        }
        setDexterity(dexterity + 1)
        
        if ( dexterity >= 4 ) {
            setDexterity(4);
            return;
        } else {
            setDiceMax(diceMax - 1);
        }
        if (diceMax <= 0){
            setDiceMax(0);
            return;
        }
        
    } 

    const intelligenceDiceMinus = () => {
        setIntelligence(intelligence - 1)
        if(intelligence <= 1) {
            setIntelligence(1);
        }
        if (intelligence <= 1) {
            return;
        }
        setDiceMax(diceMax + 1)
        if (diceMax >= 10){
            setDiceMax(10);
            return;
        }
        
        
    }

    const intelligenceDicePlus = () => {
       
        if (diceMax <= 0) {
            return;
        }
        setIntelligence(intelligence + 1)
    
        if ( intelligence >= 4 ) {
            setIntelligence(4);
            return;
        } else {
            setDiceMax(diceMax - 1)
        }
        if (diceMax <= 0){
            setDiceMax(0);
            return;
        }
        
    } 


    const windsdomDiceMinus = () => {
        setWindsdom(windsdom - 1)
        if(windsdom <= 1) {
            setWindsdom(1);
        }
        if (windsdom <= 1) {
            return;
        }
        setDiceMax(diceMax + 1)
        if (diceMax >= 10){
            setDiceMax(10)
            return;
        }
        
        
    }

    const windsdomDicePlus = () => {
        if (diceMax <= 0) {
            return;
        }
        setWindsdom(windsdom + 1)
        if ( windsdom >= 4 ) {
            setWindsdom(4);
            return;
        } else {
            setDiceMax(diceMax - 1)
        }
        if (diceMax <= 0){
            setDiceMax(0)
            return;
        }
        
    } 

    const charismaDiceMinus = () => {
        setCharisma(charisma - 1)
        if(charisma <= 1) {
            setCharisma(1);
        }
        if (charisma <= 1) {
            return;
        }
        setDiceMax(diceMax + 1)
        if (diceMax >= 10){
            setDiceMax(10)
            return;
        }
        
        
    }

    const charismaDicePlus = () => {
        if (diceMax <= 0) {
            return;
        }
        setCharisma(charisma + 1)
        if ( charisma >= 4 ) {
            setCharisma(4);
            return;
        } else {
            setDiceMax(diceMax - 1)
        }
        if (diceMax <= 0){
            setDiceMax(0)
            return;
        }
        
    } 


const rolledStrenght = () => {

    setStrenghtRoll(strenght * diceRoll);
    if (strenghtRoll >= 18) {
        setStrenghtRoll(18);
    } 
    if (strenghtRoll <= 4){
        setStrenghtRoll(4); 
    }
} 



    return (
        <div>
<div>Dice Left: {diceMax}</div>
        <div> strenght dice: {strenght} </div>
        <button onClick= {strenghtDiceMinus} > - </button>
        <button onClick= {strenghtDicePlus}> + </button>
        <button onClick= {rolledStrenght}> ROLL! </button>
        <div> Your score: {strenghtRoll} </div>
        
        <div> dexterity dice: {dexterity} </div>
        <button onClick = {dexterityDiceMinus}> - </button>
        <button onClick = {dexterityDicePlus}> + </button>
        <button onClick= {() => setDexterityRoll(dexterity * diceRoll) }> ROLL! </button>
        <div>Your score: {dexterityRoll}</div>

        <div> intelligence dice {intelligence} </div>
        <button onClick= {intelligenceDiceMinus}> - </button>
        <button onClick= {intelligenceDicePlus}> + </button>
        <button onClick= {() => setIntelligenceRoll(intelligence * diceRoll) }> ROLL! </button>
        <div>Your score: {intelligenceRoll}</div>
        
        <div> windsdom dice {windsdom} </div>
        <button onClick= {windsdomDiceMinus}> - </button>
        <button onClick= {windsdomDicePlus}> + </button>
        <button onClick= {() => setWindsdomRoll(windsdom * diceRoll) }> ROLL! </button>
        <div>Your Score: {windsdomRoll}</div>

        <div> charisma dice {charisma} </div>
        <button onClick= {charismaDiceMinus}> - </button>
        <button onClick= {charismaDicePlus}> + </button>
        <button onClick= {() => setCharismaRoll(charisma * diceRoll) }> ROLL! </button>
        <div>Your Score: {charismaRoll}</div>

        </div>
    )


} 

export default DiceTwo;