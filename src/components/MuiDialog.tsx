import React from 'react';
import {Button, 
        Dialog,
        DialogTitle,
        DialogContent,
        DialogContentText,
        DialogActions} from "@mui/material";
import {useState} from "react";
export const MuiDialog = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
        <Button onClick={()=>setOpen(true)}> Open Dialog</Button>
        <Dialog 
            aria-labelledby="dialog-title" 
            aria-describedby='dialol-description'
            open={open}
            onClose={()=>setOpen(false)}
        >
            <DialogTitle>Submit the test?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to submit?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>setOpen(false)}>Cancel</Button>
                <Button autoFocus onClick={()=>setOpen(false)}>Submit</Button>
            </DialogActions>
        </Dialog>
    </>
  )
}
