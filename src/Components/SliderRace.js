import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// import Background from './score-bg.png';
import {useContext} from 'react';
import Stats, { raceContext } from '../Store';
import { statContext } from '../Store';
import {modifyContext} from '../Store';
import {css} from 'emotion';
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';
import { useState} from 'react';
import { blueGrey } from '@material-ui/core/colors';

function SliderRace(props) {
const marks = [
  {
    value: 0,
    label: "DWARF",
  },
  {
    value: 16,
    label: 'HALFING',
  },
  {
    value: 32,
    label: 'ELF',
  },
  {
    value: 48,
    label: 'HUMAN',
  },
  {
    value: 64,
    label: 'GNOME',
  },
  {
    value: 80,
    label: 'HALFOGR',
  },
  {
    value: 96,
    label: 'HALF-ELF',
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


const [ stats, setStats ] = useContext(statContext);

const [race, setRace] = useContext(raceContext);

const [background, setBackground] = useState("url(score-bg.png)");



  // const raceImgStyle = css`
  // width: 30vw;
  // height: 30vh;
  // padding: 3em;
  // margin-left: 15.5em;
  // margin-top: 5em;
  // margin-bottom: 15em;
  // background-repeat:  no-repeat;
  // background-size: cover;
  // background-image: ${background};
  // `;

  // const raceTextStyle = css`

  // color: white;
  // text-align: left;
  // font-size: 0.9em;
  // width: 40vw;
  // margin-left: 30vw;
  // `;


  const changeContainer = (value) => {

    if (marks.value > 10) {
    // setBackground("url(dwarf2.png)");
    let newState = {};
    newState = setStats(stats.strenght + 2*1);
    setStats({...stats, ...newState});

    return (
      <h1>Dupa</h1>
    );
  } 

   
  }
  


// const sectionStyle = {

//   width: "30vw",
//   height: "30vh",
//   padding: "3em",
//   marginLeft: "15.5em",
//   marginTop: "10em",
//   marginBottom: "5em",
//   backgroundRepeat:  "no-repeat",
//   backgroundSize: "cover",
//   backgroundImage: "url(" + Background + ")"

// };



  return (
    <div >
      <div> {changeContainer}
      </div>
      {/* <div className={raceTextStyle}> {dwarfText} </div> */}
      
        {/* <div className= {raceInfo} ></div> */}
      
      
      

      <Slider className="character-peaking"
        defaultValue={0}
        getAriaValueText={labelText}
        aria-labelledby="discrete-slider-always"
        step={16}
        marks={marks}
        // valueLabelDisplay="on"
        min={0}
        max={96}
        onChange={(event) => changeContainer(marks.value)}
      />
    </div>
  );
}

export default SliderRace;