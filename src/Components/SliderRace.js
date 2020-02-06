import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Background from './score-bg.png';


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
  return marks.findIndex(mark => mark.value === value) ;
}


const sectionStyle = {

  width: "30vw",
  height: "30vh",
  padding: "3em",
  marginLeft: "2em",
  marginTop: "2em",
  marginBottom: "5em",
  backgroundRepeat:  "no-repeat",
  backgroundSize: "cover",
  backgroundImage: "url(" + Background + ")"
};

// function returnImg(value) {
//   if (value >19 ) {
    
//   }
// }

  return (
    <div >
      <div style={sectionStyle}>
        
      </div>

      <Slider className="character-peaking"
        defaultValue={0}
        getAriaValueText={labelText}
        aria-labelledby="discrete-slider-always"
        step={16}
        marks={marks}
        // valueLabelDisplay="on"
        min={0}
        max={96}
      />
    </div>
  );
}

export default SliderRace;