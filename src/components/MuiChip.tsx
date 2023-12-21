import React from 'react';
import {Stack, Chip} from "@mui/material";

export const MuiChip = () => {
  return (
    <Stack direction="row" spacing={2}>
        <Chip label="chip" color="primary" size="medium"/>
        <Chip label="chip" color="primary" size="medium" variant ="outlined"/>
    </Stack>
  )
}
