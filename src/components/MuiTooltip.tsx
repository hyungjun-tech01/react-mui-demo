import React from 'react';
import {Tooltip, IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"

export const MuiTooltip = () => {
  return (
    <Tooltip title="Delete" placement="right" arrow enterDelay={1000} leaveDelay={2000}>
        <IconButton>
            <DeleteIcon />
        </IconButton>
    </Tooltip>)
}
