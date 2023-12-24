import React from "react";
import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import {useState} from "react";
import { StringDecoder } from "string_decoder";

export const MuiChip = () => {
  const [chips,setChips] = useState(['chip1', 'chip2', 'chip3']);
  const handleDelete = (chipToDelete:string)=>{
    setChips( (chips)=>
        chips.filter((chip)=> chip !== chipToDelete))
  }
  return (
    <Stack direction="row" spacing={2}>
      <Chip label="chip" color="primary" size="medium" />
      <Chip
        label="outlined chip"
        color="primary"
        size="medium"
        variant="outlined"
      />
      <Chip
        label="outlined chip"
        color="secondary"
        size="medium"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip
        label="icon chip"
        color="secondary"
        size="medium"
        variant="outlined"
        icon={<FaceIcon />}
      />

      <Chip label="Click" color="success" onClick={() => alert("Click")} />
      <Chip label="Delete" color="error" onClick={() => alert("Click")} 
      onDelete={()=>{alert('delete handler called')}}/> 

      {
        chips.map( (chip) => (
          <Chip key={chip}  label={chip} onDelete={()=>handleDelete(chip)} />
        ))
      }
    </Stack>
  );
};
