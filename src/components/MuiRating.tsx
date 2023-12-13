import React from 'react';
import {Stack, Rating, Typography} from "@mui/material";
import {useState} from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteborderIcon from "@mui/icons-material/FavoriteBorder";

// 클릭이 제대로 안된다. 
// 마우스 위치와 rating 이 제대로 안 먹음.
export const MuiRating = () => {
  const [value, setValue] = useState<number|null>(null);
  const handleChnage = (_event: React.ChangeEvent<{}>, newValue:number|null)=>{
    setValue(newValue);
  }
  console.log(value);
  return (
    <div>
    <Stack spacing={2}>
        <Typography variant="h6" > Rating </Typography>
    </Stack>    
    <Stack spacing={2}>
        <Rating value={value} onChange={handleChnage} 
            icon={<FavoriteIcon fontSize="inherit"/>}
            emptyIcon = {<FavoriteborderIcon  fontSize="inherit"/>}
            precision={0.5} 
            size = "large"/>
    </Stack>
    </div>
  )
}
