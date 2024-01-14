import React from 'react';
import logo from './logo.svg';
import './App.css';
import {LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import {ko} from 'date-fns/locale/ko';

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
import {MuiImageList} from "./components/MuiImageList";
import {MuiNavbar} from "./components/MuiNavbar";
import {MuiLink} from "./components/MuiLink";
import {MuiBreadCrumb} from "./components/MuiBreadCrumb";
import {MuiDrawer} from "./components/MuiDrawer";
import {MuiSpeedDial} from "./components/MuiSpeedDial";
import {MuiBottomNavigation} from "./components/MuiBottomNavigation";
import {MuiAvatar} from "./components/MuiAvatar";
import {MuiBadge} from "./components/MuiBadge";
import {MuiList} from "./components/MuiList";
import {MuiChip} from "./components/MuiChip";
import {MuiTooltip} from "./components/MuiTooltip";
import {MuiTable} from "./components/MuiTable";
import {MuiAlert} from "./components/MuiAlert";
import {MuiSnakbar} from "./components/MuiSnakbar";
import {MuiDialog} from "./components/MuiDialog";
import {MuiProgress} from "./components/MuiProgress";
import {MuiSkeleton} from "./components/MuiSkeleton";
import {MuiLoadingButton} from "./components/MuiLoadingButton";
import {MuiPicker} from "./components/MuiPicker";
function App() {
  return (
    <LocalizationProvider dateAdapter = {AdapterDateFns}  adapterLocale={ko}>
    <div className="App">
     {/* <MuiNavbar /> */}
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
     {/* <MuiAccordion /> */}

     {/* <MuiImageList /> */}
     {/* <MuiLink /> */}
     {/* <MuiBreadCrumb /> */}
     {/* <MuiDrawer /> */}
     {/* <MuiSpeedDial /> */}
     {/* <MuiBottomNavigation /> */}
     {/* <MuiAvatar /> */}
     {/* <MuiBadge /> */}
     {/* <MuiList /> */}
     {/* <MuiChip /> */}
     {/* <MuiTooltip /> */}
     {/* <MuiTable /> */}
     {/* <MuiAlert /> */}
     {/* <MuiSnakbar /> */}
     {/* <MuiDialog /> */}
     {/* <MuiProgress /> */}
     {/* <MuiSkeleton /> */}
     {/* <MuiLoadingButton /> */}
     <MuiPicker />
    </div>
    </LocalizationProvider>
  );
}

export default App;
