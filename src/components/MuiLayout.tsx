import React from 'react';
import {Box} from "@mui/material";

export const MuiLayout = () => {
  return (
    <>
    <Box sx={{
        backgroundColor:"primary.main",
        color : "white",
        height : "100px",
        width : "100px",
        padding : "16px",
        '&:hover ' : { backgroundColor : "primary.dark"},  // priamry.light
    }}>
        MuiLayout
    </Box>
    <Box display="flex" 
        width = "100px" 
        height="100px" 
        bgcolor="success.light" 
        p={2}   // p padding  1 is 8pixels,  2는 16 pixel
        >  
        MuiLayout 2
    </Box>    
    </>
  )
}
