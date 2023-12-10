import React from 'react';
import logo from './logo.svg';
import './App.css';

import {MuiTypography} from "./components/MuiTypography";
import {MuiButton} from "./components/MuiButton";
import {MuiTextField} from "./components/MuiTextField";
import {MuiRadioButton} from "./components/MuiRadioButton"

function App() {
  return (
    <div className="App">
     {/* <MuiTypography/> */}
     {/* <MuiButton /> */}
     {/* <MuiTextField /> */}
     <MuiRadioButton />
    </div>
  );
}

export default App;
