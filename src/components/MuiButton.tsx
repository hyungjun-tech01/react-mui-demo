import React from 'react';
import {Stack, Button, IconButton, ButtonGroup,ToggleButton, ToggleButtonGroup} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import {useState} from 'react';


export const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([]);   // text format 을 저장하고 있는 state value 
  const handleFormatChange = (event:React.MouseEvent<HTMLElement>, updatedFormats:string[]) => {
    setFormats(updatedFormats);  // 신기하네 ... 바로 적용이 되네 
  }
  return (
    <Stack spacing={4} direction="column">
      <Stack spacing={2} direction="row">
          <Button variant="text" href="https://google.com">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>               
      </Stack>
      <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="contained" color="error">Error</Button>
          <Button variant="contained" color="warning">Warning</Button>
          <Button variant="contained" color="info">Info</Button>
          <Button variant="contained" color="success">Success</Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
          <Button variant="contained" color="primary" size="small">Small</Button>
          <Button variant="contained" color="primary" size="medium">Medium</Button>
          <Button variant="contained" color="primary" size="large">large</Button>
      </Stack>     
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary" startIcon={<SendIcon />}> Send </Button>
        <Button variant="contained" color="primary" endIcon={<SendIcon />}> Send </Button>
      </Stack> 
      <Stack spacing={2} direction="row">
        <IconButton arial-label="send" color="warning" size="medium">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary" startIcon={<SendIcon />} disableElevation> Send </Button>
        <Button variant="contained" color="primary" endIcon={<SendIcon />} disableRipple> Send </Button>
      </Stack>       
      {/*Button Group  */}
      <Stack  direction="row">
        <ButtonGroup variant="outlined" size="large" color="error" orientation="vertical">
          <Button >Left</Button>
          <Button >Center</Button>
          <Button >Right</Button>        
          </ButtonGroup>       
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormatChange}
                           size="small" color ="warning" orientation="horizontal" exclusive>
          <ToggleButton value="bold"><FormatBoldIcon /></ToggleButton>
          <ToggleButton value="italic"><FormatItalicIcon /></ToggleButton>
          <ToggleButton value="underline"><FormatUnderlinedIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}
