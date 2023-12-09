import React from 'react';
import {Stack, TextField , InputAdornment} from "@mui/material";
import {useState} from "react";
/*rafc*/
export const MuiTextField = () => {
    const [value, setValue] = useState('');
  return (
    <Stack spacing={4} direction="column">
        <Stack spacing={4} direction="row">
            <TextField label="Name" variant="outlined"/>
            <TextField label="Name" variant="filled"/>
            <TextField label="Name" variant="standard"/>
        </Stack>
        <Stack spacing={4} direction="row">
            <TextField label="Name" variant="outlined" size="small" color="primary"/>
        </Stack>
        {/* required  helperText type  disabled readonly*/}
        <Stack spacing={4} direction="row">
            <TextField label="Name" variant="outlined" size="small" color="primary"  required/>
            <TextField label="Password" type="password" variant="outlined" size="small" color="primary" helperText="Do not share password" required/>
            <TextField label="Input" variant="outlined" size="small" color="primary"  disabled/>
            <TextField  
                label="Read Only" 
                defaultValue="Hello World"
                InputProps={{
                readOnly: true,
              }}
              />
        </Stack>     
        {/*InputAdornment */}
        <Stack spacing={4} direction="row">
            <TextField label="Amount" variant="outlined" 
                    InputProps={{startAdornment:<InputAdornment position="start" >$</InputAdornment>}}/>
            <TextField label="Weight" variant="outlined"
                    InputProps={{endAdornment:<InputAdornment position="end" >Kg</InputAdornment>}}/>
        </Stack>   
        {/*error = true or false */}
        <Stack spacing={4} direction="row">
        <TextField label="Form Input" 
            value={value}
            onChange = {(e)=>setValue(e.target.value)}
            error={!value}
            helperText={!value ? "Required":"Do no share your password"}
         required/>
        </Stack>
    </Stack>
  )
}
