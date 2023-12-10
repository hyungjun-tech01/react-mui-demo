import React from 'react';
import {Box, TextField, MenuItem, Typography} from "@mui/material";
import {useState} from "react";

export const MuiSelect = () => {
  // single select
  const [contry, setContry] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
   setContry(event?.target.value as string);
  }
  const [contries, setContries] = useState<string[]>([]);
  const handleMultiChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
    const value = event.target.value;
    setContries(typeof value === "string" ? value.split(','):value);
  }

  // multi select
  return (
    <>
           <Typography variant="h6" > Select </Typography>
    <Box width="250px">
         <TextField  
            label="Select Country"
            select
            value={contry}
            onChange={handleChange}
            fullWidth
            size="small"
            helperText="국가를 선택하세요"
            error
        >
            <MenuItem value="KR">Korea</MenuItem>
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
        </TextField>
        <TextField  
            label="Select Multi Country"
            select
            value={contries}
            onChange={handleMultiChange}
            SelectProps={{
                multiple:true
            }}
            fullWidth
            size="small"
            helperText="국가를 선택하세요"
            error
        >
            <MenuItem value="KR">Korea</MenuItem>
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
        </TextField>        
    </Box>
    </>
  )
}
