import React from 'react';
import {Box, FormControl, 
       FormLabel, RadioGroup, 
       FormControlLabel, Radio} from "@mui/material";

export const MuiRadioButton = () => {
  return (
    <Box>
        <FormControl>
            <FormLabel> Years of experiance </FormLabel>
        </FormControl>
        <RadioGroup></RadioGroup>
    </Box>

  )
}
