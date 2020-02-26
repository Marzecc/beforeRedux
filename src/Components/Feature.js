import React from 'react';
import { useState} from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import {newFeatContext, featsContext} from '../Store';
import {useContext} from 'react';
import Stats, { modifyContext } from '../Store';
import { statContext } from '../Store';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
import ReactDOM from 'react-dom'
import { Button } from '@material-ui/core';
import {skillsCheckContext} from '../Store';


function Feature (props) {
const [newFeat, setNewFeat] = useContext(newFeatContext);
const [skillsCheck, setSkillsCheck] = useContext(skillsCheckContext);

const [feats, setFeats] = useContext(featsContext);
// Jeśli rasa / klasa wpływa na feats będzie można je zdefijować tutaj
// {id: 1, text: "cośtam tośtam"} setFeats ([...feats, {id: 1, text: "XXX"}])

var colorWhite = {
    color: "#ffffff"
}

function handleNewFeatChange(event)  {
    let {value} = event.target;
    event.preventDefault();
    setNewFeat(value);
}

function handleNewFeat(e) {
    e.preventDefault();
    if (newFeat === '') return;
    setFeats([
        ...feats,  {id: Date.now() , text: newFeat}]);
      e.target.reset(); 

      
}

function removeFeat (id) {
    setFeats(feats.filter((feats) => feats.id != id))
}

    return (
        <div className="feats_container">
            <h1>Add Feats</h1>
            <form onSubmit= {handleNewFeat}>
                <input
                placeholder="Add feat..."
                type="text"
                onChange = {(event) => handleNewFeatChange(event)} />
                <Button
                size="small"
                variant="contained"
                onClick = {handleNewFeat}>
                    ADD FEAT
                </Button>
                <ul>
                    {feats.map((feats) => (
                       <li 
                       style={colorWhite} 
                       key={feats.id}> 
                       {feats.text} 

                       <a
                       size="small"
                       variant="contained"
                    //    href="#"
                       onClick={() => removeFeat(feats.id)}
                       > XXX </a>

                       </li> 
                    ))}
               
                </ul>
             </form>
        </div>
    )
}

export default Feature;


// Skills, żeby pobierały się wartości z pól obok i dodawały w ostatnim oknie (automatiko) (nasłuchiwanie elementu?)
// ---  
// W rasach dodawanie do wartości stats a nie tworzenie nowego modyfikatora
// ---
// Oddzielne dodawanie fetaów (których nie da się usunąć przy wyborze rasy)
// ---
