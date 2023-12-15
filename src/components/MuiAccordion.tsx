import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import {ExpandMore} from "@mui/icons-material";
import {useState} from "react";

export const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string|false>(false);
  return (
    <div>
        <Accordion expanded = {expanded === "penel1"}>
            <AccordionSummary 
                id="pencil-header"
                aria-controls="pencil-content"
                expandIcon={<ExpandMore />}>
                    <Typography variant="body1">Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography variant="body2"  align="left">
                        AccordionDetails API. API reference docs for the React AccordionDetails component. Learn about the props, CSS, and other APIs of this exported module.
                    </Typography>
                </AccordionDetails>
        </Accordion>

        <Accordion expanded = {expanded === "penel2"}>
            <AccordionSummary 
                id="pencil-header"
                aria-controls="pencil-content"
                expandIcon={<ExpandMore />}>
                    <Typography variant="body1">Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography variant="body2"  align="left">
                        AccordionDetails API. API reference docs for the React AccordionDetails component. Learn about the props, CSS, and other APIs of this exported module.
                    </Typography>
                </AccordionDetails>
        </Accordion>

        <Accordion expanded = {expanded === "penel3"}>
            <AccordionSummary 
                id="pencil-header"
                aria-controls="pencil-content"
                expandIcon={<ExpandMore />}>
                    <Typography variant="body1">Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography variant="body2"  align="left">
                        AccordionDetails API. API reference docs for the React AccordionDetails component. Learn about the props, CSS, and other APIs of this exported module.
                    </Typography>
                </AccordionDetails>
        </Accordion>
    </div>
  )
}
