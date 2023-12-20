import React from 'react';
import {Box, SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

export const MuiSpeedDial = () => {
  return (
    <>
        <SpeedDial ariaLabel="Navigate speed dial" icon={<SpeedDialIcon />} sx={{position: 'absolute',  bottom:'16px', right:'16px'}}>
            <SpeedDialAction icon={<CopyIcon />} tooltipTitle="Copy"/>
            <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print"/>
            <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share"/>
        </SpeedDial>
    </>
  )
}
