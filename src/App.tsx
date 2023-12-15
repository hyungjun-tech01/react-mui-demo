import React from 'react';
import logo from './logo.svg';
import './App.css';

import {MuiTypography} from "./components/MuiTypography";
import {MuiButton} from "./components/MuiButton";
import {MuiTextField} from "./components/MuiTextField";
import {MuiRadioButton} from "./components/MuiRadioButton";
import{MuiSelect} from "./components/MuiSelect";
import {MuiCheckBox} from "./components/MuiCheckBox";
import {MuiSwitch} from "./components/MuiSwitch";
import {MuiRating} from "./components/MuiRating";
import {MuiAutocomplete} from "./components/MuiAutocomplete";
import {MuiLayout} from "./components/MuiLayout";
import {MuiCard}  from "./components/MuiCard";
import {MuiAccordion} from "./components/MuiAccordion";

function App() {
  return (
    <div className="App">
     {/* <MuiTypography/> */}
     {/* <MuiButton /> */}
     {/* <MuiTextField /> */}
     {/* <MuiRadioButton /> */}
     {/* <MuiSelect /> */} 
     {/* <MuiCheckBox /> */}
     {/* <MuiSwitch /> */}
     {/* <MuiRating /> */}
     {/* <MuiAutocomplete /> */}
     {/* <MuiLayout /> */}
     {/* <MuiCard /> */}
     <MuiAccordion />
    </div>
  );
}

export default App;
