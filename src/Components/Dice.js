import React, { useState } from 'react';
import Stats from './Stats';

function Dice(props) {

    const [dice, setDice] = useState({

        strenght: 1,
        dexterity: 1,
        intelligence:  1,
        winsdom: 1,
        charisma:  1,

    });

    const [stats, setStats] = useState({
        strenght: 1,
        dexterity: 1,
        intelligence:  1,
        winsdom: 1,
        charisma:  1,
    })

    const [ diceMax, setDiceMax ] = useState(10);
    

   const reduceStat  = (field) => {
    
    if (dice[field] > 1){
       let newState = {};
       newState[field] = dice[field] - 1;
       setDice({...dice, ...newState});
       setDiceMax(diceMax +1);
    } else {
       return;
   }
   }

   const riseStat = (field) => {
    if (dice[field] < 4 && diceMax > 0){  
        let newState = {};
        newState[field] = dice[field] + 1;
        setDice({...dice, ...newState});
        setDiceMax(diceMax -1);
    }  else {
        return
    }
   }

   const diceRoll = (field) => {
    let diceRolling = Math.floor(Math.random() * 6) + 1; 

    // if (stats)
    let newState = {};
    newState[field] = dice[field] * diceRolling;
    if (newState[field] >= 18) {
        newState[field] = 18;
    } else if ( newState[field] <=4) {
        newState[field] = 4;
    } else {
    setStats({...stats, ...newState});
    }
   }


    const statsRoll = (field) => {

        return (

            <div className="Dice">
            <div> Dice: {dice[field]} </div>

            <button
            onClick={() => reduceStat(field)}>-</button>
             <button
            onClick={() => riseStat(field)}>+</button>
            <button
            onClick={() => diceRoll(field)}>Roll!</button>
            <div> Your stat: {stats[field]}</div>
            </div>
        )
    }




    return (

    <div>
        <div>Dice Left: {diceMax}</div>
        <div>Strenght</div>
       <div> {statsRoll("strenght")}</div>
       <div>Dexterity</div>
       <div> {statsRoll("dexterity")}</div>
       <div>Intelligence</div>
       <div> {statsRoll("intelligence")}</div>
       <div>Windsdom</div>
       <div> {statsRoll("winsdom")}</div>
       <div>Charisma</div>
       <div> {statsRoll("charisma")}</div>
       
        
    </div>
    )





} 

export default Dice;