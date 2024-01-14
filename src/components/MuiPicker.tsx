import React from 'react';
import dayjs from 'dayjs';
import {Stack, TextField} from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateField } from '@mui/x-date-pickers/DateField';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {useState} from "react";

export const MuiPicker = () => {
  const [value, setValue] = useState<Date|null>(null);
  const [timevalue, setTimevalue] = useState<Date|null>(null);
  const [datetimevalue, setDatetimevalue] = useState<Date|null>(null);
  console.log(value,timevalue, datetimevalue);
  return (
    <Stack spacing={2} sx={{width:"500px"}}>
        <DemoContainer components={['DateField', 'DatePicker']}>
            <DatePicker
                label="Date Picker"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                defaultValue={new Date('2022-04-17')}
                />
                
        </DemoContainer>
        <DemoContainer components={['DateField', 'TimePicker']}>
        <TimePicker
                label="Time Picker"
                value={timevalue}
                onChange={(newValue) => setTimevalue(newValue)}
                defaultValue={new Date('2022-04-17T18:30')}
                />    
        </DemoContainer>
        <DemoContainer components={['DateField', 'DateTimePicker']}>
        <DateTimePicker
                label="Date Time Picker"
                value={datetimevalue}
                onChange={(newValue) => setDatetimevalue(newValue)}
                defaultValue={new Date('2022-04-17T18:30')}
                />    
        </DemoContainer>        
        <TimeField label="Time" defaultValue={new Date('2022-04-17T18:30')} />
    </Stack>
  )
}
