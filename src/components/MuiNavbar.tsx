import React from 'react';
import {AppBar,Toolbar, IconButton, Typography, Stack,Button ,Menu, MenuItem } from "@mui/material";
import CatchingPoketmonIcon from "@mui/icons-material/CatchingPokemon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {useState} from "react";

export const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<null|HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickResource = (event:React.MouseEvent<HTMLButtonElement>)=> {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = ()=>{
        setAnchorEl(null);
  }
  return (
    <AppBar position="static">
        <Toolbar>
            <IconButton size="large" edge="start" color = "inherit" aria-label="logo">
                <CatchingPoketmonIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{flexGrow:1}}>POKET MON APP</Typography>
            <Stack direction="row" spacing={2}>
                <Button color="inherit">Feature</Button>
                <Button color="inherit">Pricing</Button>
                <Button color="inherit" 
                   id="resources-button" 
                   onClick={handleClickResource} 
                   aria-controls={open ? "resources-menu" : undefined}
                   aria-haspopup="true"
                   aria-expanded={open ? "true" : undefined}
                   endIcon = {<KeyboardArrowDownIcon />}
                >
                    Resources
                </Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Login</Button>
            </Stack>
            <Menu id="resources-menu" anchorEl={anchorEl} open={open} 
                MenuListProps={{'aria-labelledby':'resources-button'}}
                onClick={handleClose}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal : 'right',
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal : 'right',
                }}
                >
                <MenuItem onClick={handleClose}>Blog</MenuItem>
                <MenuItem onClick={handleClose}>PodCast</MenuItem>
            </Menu>

        </Toolbar>
    </AppBar>
  )
}
