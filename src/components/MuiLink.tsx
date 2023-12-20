import React from 'react';
import {Stack, Link, Typography} from "@mui/material";

export const MuiLink = () => {
  return (
    <Stack spacing={4} direction="column">
        <Stack spacing={4} direction = "row" m={4} >
            <Link href="#" variant="body2"> Link1 </Link>
            <Link href="#" variant = "body2" color="secondary" underline="hover" >Link 2</Link>
        </Stack>
        <Typography variant="h6"> 
            링크 테스트
            <Link href="#" underline="hover">3번째 link</Link>
        </Typography>
    </Stack>
  )
}
