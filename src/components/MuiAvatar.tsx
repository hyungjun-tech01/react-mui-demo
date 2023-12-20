import React from 'react';
import {Stack, Avatar, AvatarGroup } from "@mui/material";

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>MuiAvatar
        <Stack direction="row" spacing={1}>
            <Avatar sx={{bgcolor:"primary.light"}}>BW</Avatar>
            <Avatar sx={{bgcolor:"primary.light"}}>CK</Avatar>
        </Stack>

        <Stack direction="row" spacing={1}>
            <AvatarGroup max={3}>              
                <Avatar sx={{bgcolor:"primary.light"}}>BW</Avatar>
                <Avatar sx={{bgcolor:"primary.light"}}>CK</Avatar>
                <Avatar src="https://randomuser.me/api/portraits/women/51.jpg" alt="Jane Doi"></Avatar>  
                <Avatar src="https://randomuser.me/api/portraits/men/51.jpg" alt="Jane Doi"></Avatar>  
            </AvatarGroup>    
        </Stack>        
        <Stack direction="row" spacing={1}>           
            <Avatar sx={{bgcolor:"primary.light" , width:'48px', height:'48px'}}>CK</Avatar>     
            <Avatar sx={{bgcolor:"primary.light" , width:'48px', height:'48px'}}>CK</Avatar>     
            <Avatar variant="square" sx={{bgcolor:"primary.light" , width:'48px', height:'48px'}}>CK</Avatar>    
            <Avatar variant="rounded" sx={{bgcolor:"primary.light" , width:'48px', height:'48px'}}>CK</Avatar>    
        </Stack>   
    </Stack>
  )
}
