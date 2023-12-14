import React from 'react';
import {Stack ,Autocomplete, TextField} from "@mui/material";
import {useState} from "react";

const skills = ['HTML', 'Typescript', 'React'];
type Skill ={
    id:number;
    label :string;
}
const skillsOptions = skills.map( (skill,index)=>({
    id:index+1, 
    label:skill
}));
export const MuiAutocomplete = () => {
    const [value, setValue] = useState<string|null>(null);
    const [skill, setSkill] = useState<Skill|null>(null);
    console.log({value});
    console.log({skill});
  return (
    <Stack spacing={2} width='250px'>
        <Autocomplete options={skills} 
                    renderInput={(params)=> <TextField {...params} label="Skill"/>}
                    value={value}
                    onChange={(event:any, newValue:string|null)=>setValue(newValue)}
                    // freeSolo   값이 list에 없는 값은 입력 막는 기능을 disable 해서 아무 값이나 입력이되게 
                    />
        <Autocomplete options={skillsOptions} 
            renderInput={(params)=> <TextField {...params} label="Skill"/>}
            value={skill}
            onChange={(event:any, newValue:Skill|null)=>setSkill(newValue)}
            // freeSolo   값이 list에 없는 값은 입력 막는 기능을 disable 해서 아무 값이나 입력이되게 
            />            

    </Stack>
  )
}
