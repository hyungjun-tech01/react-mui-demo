import React from 'react';
import {Box, FormControl, 
       FormLabel, RadioGroup, 
       FormControlLabel, Radio, FormHelperText} from "@mui/material";
import {useState} from "react";       
export const MuiRadioButton = () => {
  const [value, setValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{

    setValue(event.target.value);
  }
  return (
    <Box>
        <FormControl id="job-experience-group-label">
          <FormLabel error> Years of experiance </FormLabel>
    
          <RadioGroup name="job-experience-group"
            arial-labeledby ="job-experience-group-label"
            value={value}
            onChange={handleChange}
            row
          >
            <FormControlLabel control={<Radio size="medium" color="secondary"/>} label="0-2" value="0-2" />
            <FormControlLabel control={<Radio/>} label="3-5" value="3-5" />
            <FormControlLabel control={<Radio/>} label="6-10" value="6-10" />
          </RadioGroup>
          <FormHelperText>잘못한 선택입니다.</FormHelperText>
        </FormControl>        
    </Box>

  )
}
