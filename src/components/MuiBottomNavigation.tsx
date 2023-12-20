import React from 'react';
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import {useState} from "react";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";



export const MuiBottomNavigation = () => {
    const [value, setValue] = useState(0);
  return (
    <BottomNavigation sx={{width:"100%", position:"absolute", bottom:'0px'}} value={value} onChange={(event,newValue) => setValue(newValue)}>
        <BottomNavigationAction label="Home" icon={<HomeIcon />}> </BottomNavigationAction>
        <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />}> </BottomNavigationAction>
        <BottomNavigationAction label="Person" icon={<PersonIcon />}> </BottomNavigationAction>
    </BottomNavigation>
  )
}