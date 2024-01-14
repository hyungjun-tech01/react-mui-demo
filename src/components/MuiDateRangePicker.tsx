import React from 'react';
import {Box} from "@mui/material";
import { DateRange } from '@mui/x-date-pickers-pro';
import {DateRangePicker} from "@mui/x-date-pickers-pro";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import {useState} from "react";

export const MuiDateRangePicker = () => {
  const [value, setValue] = useState<DateRange<Date>>([null,null]);
  console.log(value);
  return (
    <Box width="500px">
        <DemoContainer components={[ 'DateRangePicker']}>
            <DemoItem label="Controlled picker" component="DateRangePicker">
            <DateRangePicker
                value={value}
                localeText={{ start: 'Check-in', end: 'Check-out' }}
                onChange={(newValue) => setValue(newValue)}
            />
            </DemoItem>
        </DemoContainer>
    </Box>
  )
}
