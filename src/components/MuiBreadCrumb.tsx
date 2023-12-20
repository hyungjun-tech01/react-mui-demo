import React from 'react';
import {Box, Breadcrumbs, Link, Typography} from "@mui/material";
import {NavigateNext} from "@mui/icons-material";

export const MuiBreadCrumb = () => {
  return (
    <Box m={2}>
        {/* <Breadcrumbs aria-label="breadcrumb" separator='/'>  */}
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNext color="primary"/>} maxItems={2} itemsBeforeCollapse={2} itemsAfterCollapse={2}> 
            <Link underline="hover" href="#">Home</Link>
            <Link underline="hover" href="#">Catalog</Link>
            <Link underline="hover" href="#">Accesories</Link>
            <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
    </Box>
  )
}
