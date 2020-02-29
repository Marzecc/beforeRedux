import React from 'react';
import { useState} from 'react';
import { createMuiTheme } from '@material-ui/core/styles';


import {useContext} from 'react';
import Stats, { modifyContext } from '../Store';
import { statContext } from '../Store';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
import {skillsCheckContext} from '../Store';

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


function Skills (props) {
    const [ stats, setStats ] = useContext(statContext);
    const [ modify, setModify] = useContext(modifyContext);
    const [skillsCheck, setSkillCheck] = useContext(skillsCheckContext)

// const InputsHandler = (field) => {
//     reutrn (

//     )
// }
const GreenCheckbox = withStyles({
    root: {
      color: green[1000],
      '&$checked': {
        color: green[1000],
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);

  const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

  
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

const boxChecked = () => {
    if (skillsCheck.acrobatic === true ) {
        console.log("dupa")
    }
}


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


{/* ACROBATIC */}
                <tr>
                <td style={vertical}>
           
                 <FormControlLabel
                      control={
                        <GreenCheckbox
                        name="acrobatic" 
                        checked = {skillsCheck.acrobatic}
                        />
                      }
                      label="Acrobatic"
                    />
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
               disabled= {!skillsCheck.acrobatic}
               onChange= {(event) => acrobaticRankChange(event)}

               
               ></input>

             </td>
             <td style={vertical}>  
             {/* Modyfikator z MIC */}
               <input  
               type="number"
               min="0"
               max="10"
               disabled= {!skillsCheck.acrobatic}
               value={acrobaticMics}
            //    onChange={console.log(acrobaticTotal)}

               ></input>

             </td>

           <td style={vertical}>
               <div>
                 {acrobaticTotal}
                 </div>
           </td>
            </tr>
           
{/* APPRAISE */}
                <tr >
                        
                    <td style={vertical}>
                        <FormControlLabel
                          control={
                            <GreenCheckbox
                            name="appraise" 
                            checked = {skillsCheck.appraise}
                            />
                          }
                          label="Appraise"
                        />  
                    </td>

                    <td >
                          <div style={vertical}>
                          {/* Modyfikator z stats */}
                          {modify.dexterity}
                          
                          </div>
                    </td >

                    <td style={vertical}>
                          <input 
                                    type="number"
                                    min="0"
                                    max="10"
                                    value= {acrobaticRank}
                                    disabled= {!skillsCheck.appraise}
                                    onChange= {(event) => acrobaticRankChange(event)}

                          
                          ></input>
                    </td >

                    <td style={vertical}>
                     {/* Modyfikator z MIC */}
                          <input  
                                    type="number"
                                    min="0"
                                    max="10"
                                    disabled= {!skillsCheck.appraise}
                                    value={acrobaticMics}
                                  //    onChange={console.log(acrobaticTotal)}

                          ></input>
                    </td>
                    <td style={vertical}>
                            <div>
                        {acrobaticTotal}
                            </div>
                    </td>
                    </tr>
           
{/* BLUFF */}
 <tr >
                        
                    <td style={vertical}>
                        <FormControlLabel
                          control={
                            <GreenCheckbox
                            name="appraise" 
                            checked = {skillsCheck.bluff}
                            />
                          }
                          label="Bluff"
                        />  
                    </td>

                    <td >
                          <div style={vertical}>
                          {/* Modyfikator z stats */}
                          {modify.dexterity}
                          
                          </div>
                    </td >

                    <td style={vertical}>
                          <input 
                                    type="number"
                                    min="0"
                                    max="10"
                                    value= {acrobaticRank}
                                    disabled= {!skillsCheck.bluff}
                                    onChange= {(event) => acrobaticRankChange(event)}

                          
                          ></input>
                    </td >

                    <td style={vertical}>
                     {/* Modyfikator z MIC */}
                          <input  
                                    type="number"
                                    min="0"
                                    max="10"
                                    disabled= {!skillsCheck.bluff}
                                    value={acrobaticMics}
                                  //    onChange={console.log(acrobaticTotal)}

                          ></input>
                    </td>
                    <td style={vertical}>
                            <div>
                        {acrobaticTotal}
                            </div>
                    </td>
                    </tr>
{/* CLIMB  */}
                    <tr >
                        
                        <td style={vertical}>
                            <FormControlLabel
                              control={
                                <GreenCheckbox
                                name="appraise" 
                                checked = {skillsCheck.climb}
                                />
                              }
                              label="Climb"
                            />  
                        </td>
    
                        <td >
                              <div style={vertical}>
                              {/* Modyfikator z stats */}
                              {modify.dexterity}
                              
                              </div>
                        </td >
    
                        <td style={vertical}>
                              <input 
                                        type="number"
                                        min="0"
                                        max="10"
                                        value= {acrobaticRank}
                                        disabled= {!skillsCheck.climb}
                                        onChange= {(event) => acrobaticRankChange(event)}
    
                              
                              ></input>
                        </td >
    
                        <td style={vertical}>
                         {/* Modyfikator z MIC */}
                              <input  
                                        type="number"
                                        min="0"
                                        max="10"
                                        disabled= {!skillsCheck.climb}
                                        value={acrobaticMics}
                                      //    onChange={console.log(acrobaticTotal)}
    
                              ></input>
                        </td>
                        <td style={vertical}>
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