import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";

export const MuiList = () => {
  return (
    <Box sx={{ width: "250px", bgcolor: "#efefef" }} m={4}>
      <List>
        {/* disablePadding 패딩을 disable 해아 box 앞에 바짝 붙는다 .*/}
        <ListItem disablePadding> 
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <HomeIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List Item 1" secondary="Secondary Text" />
          </ListItemButton>
        </ListItem>
        <Divider />  
        <ListItem disablePadding>
          <ListItemButton>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List Item 2" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
