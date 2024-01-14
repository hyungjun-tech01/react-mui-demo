import React from 'react';
import {Stack, } from "@mui/material";
import {LoadingButton} from "@mui/lab";

export const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction="row">
        <LoadingButton variant = "outlined" >Submit</LoadingButton>
        <LoadingButton loading variant = "outlined" >Submit</LoadingButton>
        <LoadingButton variant = "outlined" loadingIndicator="Loading...">Fetch Data</LoadingButton>
        <LoadingButton loading variant = "outlined" loadingIndicator="Loading...">Fetch Data</LoadingButton>
    </Stack>
  )
}

