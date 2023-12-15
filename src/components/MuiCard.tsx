import React from 'react';
import {Box, Card, CardContent, Typography, CardActions, Button, CardMedia, Paper} from "@mui/material";

export const MuiCard = () => {
  return (
        <Box width="300px" sx={{padding:'32px'}} >
            <Card>
                <CardMedia component="img"
                    height="140px"
                    image="https://source.unsplash.com/random"
                    alt ="No Splash Image"
                    />            
                <CardContent>
                    <Typography variant="h6" gutterBottom component="div"> 
                        React
                    </Typography>                      
                    <Typography variant ="body2" color="text.secondary" >
                    Card 컴포넌트는 여러 컴포넌트를 좀 더 형식에 맞춰서 묶어줄 때 사용됩니다. 
                    </Typography>
                </CardContent>


                <CardActions >
                    <Button size="small" >Share</Button>
                    <Button size="small" >Learn more</Button>
                </CardActions>
            </Card>
        </Box>

  )
}
