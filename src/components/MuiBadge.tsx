import React from 'react';
import {Stack, Badge} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const MuiBadge = () => {
  return (
    <Stack spacing={3} direction="row">
        <Badge badgeContent={5} color="primary">
            <MailIcon />
        </Badge>
        <Badge badgeContent={100} max={99} color="primary">
            <MailIcon />
        </Badge>        
        <Badge badgeContent={0} max={99} color="primary">
            <MailIcon />
        </Badge>  
        {/*  0일때 보임 */}
        <Badge badgeContent={0} max={99} showZero color="primary">
            <MailIcon />
        </Badge>  
        <Badge variant="dot" badgeContent={0} max={99} showZero color="primary">
            <MailIcon />
        </Badge>    
        <Badge variant="dot" invisible={true} badgeContent={0} max={99} showZero color="primary">
            <MailIcon />
        </Badge>                
    </Stack>
  )
}
