import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import {ExpandMore} from "@mui/icons-material";
import {useState} from "react";

export const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string|false>(false);

  const handleChange = (isExpanded:boolean, penel:string)=>{
    console.log(isExpanded, penel);
    setExpanded(isExpanded ? penel: false);  // 현재 선택된 Accordion 만 열고 나머지는 닫아??  
  }
  console.log(expanded);
  return (
    <div>

        <Accordion expanded = {expanded === 'panel1' ? true:false} onChange={(event, isExpanded)=>handleChange(isExpanded, 'panel1')}>
            <AccordionSummary 
                id='panel1-header'
                aria-controls='panel1-content'
                expandIcon={<ExpandMore />}>
                    <Typography >Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails >
                <Typography align="left">
                    2. AccordionDetails API. API reference docs for the React AccordionDetails component. 
                    Learn about the props, CSS, and other APIs of this exported module.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion expanded = {expanded === 'panel2' ? true:false }  onChange={(event, isExpanded)=>handleChange(isExpanded, 'panel2')}>
            <AccordionSummary 
                id='panel2-header'
                aria-controls='panel2-content'
                expandIcon={<ExpandMore />}>
                    <Typography >Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails >
                <Typography align="left">
                    3. AccordionDetails API. API reference docs for the React AccordionDetails component. 
                    Learn about the props, CSS, and other APIs of this exported module.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion  expanded = {expanded === 'panel3' ? true:false}  onChange={(event, isExpanded)=>handleChange(isExpanded, 'panel3')}>
            <AccordionSummary 
                id='panel3-header'
                aria-controls='panel3-content'
                expandIcon={<ExpandMore />}>
                    <Typography >Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails >
                <Typography align="left">
                    1. AccordionDetails API. API reference docs for the React AccordionDetails component. 
                    Learn about the props, CSS, and other APIs of this exported module.
                </Typography>
            </AccordionDetails>
        </Accordion>        
    </div>
  )
}
