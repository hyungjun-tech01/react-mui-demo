import React from 'react';
import {Box} from "@mui/material";

export const MuiResponsiveness = () => {
  return (
    <Box 
       sx={{
        height:'300px',
        width:{
            xs:100, //0      xs (extra-small) : 0px ~ 600px (일반적으로 모바일 화면)  xs화면이면 100px
            sm:200, // 600   sm (small) : 600px ~ 960px
            md:300, //900    md (medium): 960px ~ 1280px (일반적으로 데스크탑 화면)
            lg:400, //1200   lg (large) : 1280px ~ 1920px
            xl:500, //1536   xl (extra-large) : 1920px ~
        },
        bgcolor:'primary.main',
       }}>
        
    </Box>
  )
}
