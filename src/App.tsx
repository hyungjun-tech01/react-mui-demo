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
     <MuiRating />
    </div>
  );
}

export default App;
