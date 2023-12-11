import React from 'react';
import {Box, FormControlLabel, Checkbox, 
       FormControl, FormLabel, FormGroup, FormHelperText} from "@mui/material";
import { BookmarkBorder, Bookmark } from '@mui/icons-material';
import {useState} from "react";

export const MuiCheckBox = () => {

  const [acceptTnC, setAcceptTnC] = useState(false);
  console.log(acceptTnC);
  const [skills, setSkills] = useState<string[]>([]);
  console.log(skills);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setAcceptTnC(event.target.checked);
  }
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const index = skills.indexOf(event.target.value);
    if(index ===-1){  // 없으면 추가 
      setSkills([...skills, event.target.value]);
    }else {   // 있다면 제거 
      setSkills(skills.filter( (skill) => skill !== event.target.value));
    }
  }
  return (
    <Box>
      <Box>
        <FormControlLabel label="I accept terms and conditions." 
           control={<Checkbox value={acceptTnC} onChange={handleChange} />
           }
        />
      </Box>
      <Box>
        <Checkbox 
          icon = {<BookmarkBorder />}
          checkedIcon = { <Bookmark />}
          value={acceptTnC}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>
            Skills
          </FormLabel>
          <FormGroup row>
            <FormControlLabel label="javascript" 
              control={<Checkbox value="javascript" checked={skills.includes("javascript")} onChange={handleSkillChange} />} />
            <FormControlLabel label="css" 
              control={<Checkbox value="css" checked={skills.includes("css")} onChange={handleSkillChange} />} />
            <FormControlLabel label="HTML" 
              control={<Checkbox value="HTML" checked={skills.includes("HTML")} onChange={handleSkillChange} />} />
          </FormGroup>
          <FormHelperText error>
            Invalid Selection!
          </FormHelperText>
        </FormControl>
      </Box>
    </Box>
  )
}
