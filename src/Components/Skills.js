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

var acrobaticRank = (event) => {
    let {value} = event.target;
};

var colorWhite = {
    color: "#ffffff"
}
    return (
        <div style={colorWhite}>
            <table style={vertical}>
                <tr >
                        
                    <td>
                    \\ SKILL NAME //
                    </td>
                    <td>
                    \\ ABILITY MOD //
                    </td>
                    <td>
                    \\ RANKS //
                    </td>
                    <td>
                    \\ MISC MOD //
                    </td>
                    <td>
                    \\ TOTAL BONUS //
                    </td>
                    </tr>
                <tr>





                <td>
                <input type="checkbox" 
                name="acrobatic" 
                > 
                </input>
                <label for="acrobatic" style= {colorWhite}> Acrobatic (DEX)</label> 
                </td>

                <td> 
                <div>
                    {modify.dexterity}
                </div>

             </td>

             <td> 
               <input 
               type="number"
               min="0"
               max="10"
               value= {acrobaticRank}
               onChange={(event) => console.log(acrobaticRank)}
               ></input>

             </td>
             <td> 
               <input 
               type="number"
               min="0"
               max="10"
               ></input>

             </td>

            </tr>

           

            
            </table>
            < br/>
            
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

            <input type="checkbox" 
            name="1" 
            value="Bike"> 
            </input>
            <label for="1"> Acrobatic (DEX)</label>  < br/>

        </div>
    )


}

export default Skills;