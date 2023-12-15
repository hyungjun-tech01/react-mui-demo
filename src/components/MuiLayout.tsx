import React from 'react';
import {Box, Stack, Divider, Grid, Paper} from "@mui/material";

export const MuiLayout = () => {
  return (
    <Paper sx={{padding:'32px'}} elevation={4}>
    <Stack spacing={2} direction='row' 
        sx={{border:'1px solid'}}
       divider={<Divider orientation='vertical' flexItem/>}>
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
    </Stack>
    <Grid container my={4} rowSpacing={2} columnSpacing={2}>
      <Grid item xs={10}>
        <Box bgcolor="primary.light" p={2}>
          Item 1
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box bgcolor="primary.light" p={2}>
          Item 2
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box bgcolor="primary.light" p={2}>
          Item 3
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Box bgcolor="primary.light" p={2}>
          Item 4
        </Box>
      </Grid>
    </Grid>
    </Paper>
  )
}
