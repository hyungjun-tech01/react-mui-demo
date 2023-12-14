import React from 'react'
import { Typography } from '@mui/material';

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant="h1" > h1 Heading </Typography>
        <Typography component="h1" variant="h3"> h2 Heading </Typography>
        <Typography variant="h3"> h3 Heading </Typography>
        <Typography variant="h4" gutterBottom> h4 Heading </Typography>
        <Typography variant="h5"> h5 Heading </Typography>
        <Typography variant="h6"> h6 Heading </Typography>

        <Typography variant="subtitle1"> subtitle1 Heading </Typography>
        <Typography variant="subtitle2"> subtitle2 Heading </Typography>

        <Typography variant="body1" align="left"> body 1 Speaking at Spelman College in Atlanta, Powell noted that consumer prices, excluding volatile food and energy costs, rose at just a 2.5 percent annual rate in the past six months. That’s not far above the Fed’s 2 percent inflation target. </Typography>
        <Typography variant="body2" align="center"> body 2 Still, more progress is needed, Powell said. He added, “It would be premature to conclude with confidence” that the Fed has raised its benchmark interest rate high enough to fully defeat inflation. </Typography>                  
    </div>
  )
}
