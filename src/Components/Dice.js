import React, { useState } from 'react';
import Stats from './Stats';

function Dice(props) {

    const [dice, setDice] = useState({

        strenght: Number,
        dexterity: 1,
        intelligence:  1,
        winsdom: 1,
        charisma:  1,

    });

    const [ diceMax, setDiceMax ] = useState(10);
    


 

    const inputChangeDices = (event, field) => {
        const { value } = event.target;

        if (value > 4) {
            setDice(4);
            event.target.value = 4;
            return;
        }
        if ( value  < 1){
            setDice(1);
            event.target.value = 1;
            return;
        }

        
        setDice(value);
        setDiceMax(diceMax-value);
        
    }



    const inputDice = (field) => {

        return (

            <div className="Dice">
        
            
            <input
            min="1" max="4"
            name="number of dice"
            type="Number"
            placeholder= {dice[field]}
            value= {dice[field]}
            onChange= {inputChangeDices}
        
            
            >
            </input>
            </div>
        )
    }

    // const statsOutput = (field) => {
    //     let diceRoll = Math.floor(Math.random() * 6) + 1; 
    //     return  stats[field] * diceRoll;
    // }


    const diceRoll = (field) => {
        let nrDice = dice[field]
        let diceRoll = Math.floor(Math.random() * 6) + 1; 
        
    }
 
    const rollButton = (field) => {
        return (
            <div>
                <button 
                onClick= {diceRoll}
                
                > ROLL! </button>


            </div>
        )
    }


    return (

    <div>
        <div> Dice left: {diceMax} </div>
        
        <h2> Strenght : {diceRoll("strenght")} </h2>

            {inputDice("strenght")}
            {rollButton("strenght")}

        <h2> Dexterity : {diceRoll("dexterity")}</h2>
            {inputDice("dexterity")}
            {rollButton("dexterity")}

            {/* {statsOutput("strenght")} */}
        
    </div>
    )





} 

export default Dice;