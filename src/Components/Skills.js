import React from 'react';
import { useState} from 'react';
import { createMuiTheme } from '@material-ui/core/styles';


import {useContext} from 'react';
import Stats, { modifyContext } from '../Store';
import { statContext } from '../Store';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';

function Skills (props) {
    const [ stats, setStats ] = useContext(statContext);
    const [ modify, setModify] = useContext(modifyContext);

// const InputsHandler = (field) => {
//     reutrn (

//     )
// }
var vertical = {

  justifyContent: "center",
  marginLeft: "auto",
  marginRight: 'auto',
  textAlign: 'center',
  fontSize: '1em',

}
let acrobaticRank;
let acrobaticRankChange = (event) => {
    let { value } = event.target;
    return value;
}

let acrobaticMics;
let acrobaticTotal = acrobaticRank + acrobaticMics + modify.dexterity;



var colorWhite = {
    color: "#ffffff"
}
    return (
        <div style={colorWhite}>
            <table style={vertical}>
                <tbody>
                <tr >
                        
                    <td style={vertical}>
                    -- SKILL NAME --
                    </td>
                    <td style={vertical}>
                    -- ABILITY MOD --
                    </td >
                    <td style={vertical}>
                    -- RANKS --
                    </td >
                    <td style={vertical}>
                    -- MISC MOD --
                    </td>
                    <td style={vertical}>
                    -- TOTAL BONUS --
                    </td>
                    </tr>
                <tr>
               
                <td style={vertical}>
                <input type="checkbox" 
                name="acrobatic" 
                > 
                </input>
                <label for="acrobatic" style= {colorWhite}> Acrobatic (DEX) </label> 
                </td>

                <td> 
                <div style={vertical}>
                    {/* Modyfikator z stats */}
                    {modify.dexterity}
                    
                </div>

             </td>

             <td style={vertical}> 
             {/* Modyfikator z poziomu */}
               <input 
               type="number"
               min="0"
               max="10"
               value= {acrobaticRank}
               onChange= {(event) => acrobaticRankChange(event)}

               
               ></input>

             </td>
             <td style={vertical}>  
             {/* Modyfikator z MIC */}
               <input  
               type="number"
               min="0"
               max="10"
               value={acrobaticMics}
            //    onChange={console.log(acrobaticTotal)}

               ></input>

             </td>

           <td>
               <div>
                 {acrobaticTotal}
                 </div>
           </td>
            </tr>
            </tbody>
            </table>
            < br/>
            
            <input type="checkbox" 
            name="1" 
            value="Bike"> 
            </input>
            <label for="1"> Acrobatic (DEX) </label>  < br/>

            <input type="checkbox" 
            name="1" 
            value="Bike"> 
            </input>
            <label for="1"> Acrobatic (DEX)</label>  < br/>

            <input type="checkbox" 
            name="1" 
            value="Bike"> 
            </input>
            <label for="1"> Acrobatic (DEX)</label>  < br/>

            <input type="checkbox" 
            name="1" 
            value="Bike"> 
            </input>
            <label for="1"> Acrobatic (DEX)</label>  < br/>

            <input type="checkbox" 
            name="1" 
            value="Bike"> 
            </input>
            <label for="1"> Acrobatic (DEX)</label>  < br/>

            <input type="checkbox" 
            name="1" 
            value="Bike"> 
            </input>
            <label for="1"> Acrobatic (DEX)</label>  < br/>

            <input type="checkbox" 
            name="1" 
            value="Bike"> 
            </input>
            <label for="1"> Acrobatic (DEX)</label>  < br/>

        </div>
    )


}

export default Skills;