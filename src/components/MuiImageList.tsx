import React from 'react';
import {Stack, ImageList, ImageListItem, ImageListItemBar, Box} from "@mui/material";

export const MuiImageList = () => {
  return (
    <Stack spacing={4}>
        <ImageList sx={{width:500, height:450}}
            cols = {3}
            rowHeight={164}
        >
            {
                imageData.map( item => (
                    <ImageListItem key={item.img}>
                        <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy"/>
                        <ImageListItemBar title={item.title} />
                    </ImageListItem>
                ))
            }
        </ImageList>    
        <ImageList variant ="woven" 
            sx={{width:500, height:450}}
            cols = {3}
            gap={8}
        >
            {
                imageData.map( item => (
                    <ImageListItem key={item.img}>
                        <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy"/>
                    </ImageListItem>
                ))
            }
        </ImageList>
        <Box  sx={{width:500, height:450, overflowY:'scroll'}} >
            <ImageList variant ="masonry" 
                cols = {3}
                gap={8}
            >
                {
                    imageData.map( item => (
                        <ImageListItem key={item.img}>
                            <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy"/>
                            <ImageListItemBar position='below' title={item.title} />
                        </ImageListItem>
                    ))
                }
            </ImageList>      
        </Box>                
    </Stack>
  )
}

const imageData = [
{
    img:"https://economist.co.kr/data/ecn/image/2023/12/16/ecn20231216000004.800x.0.jpg",
    title:"한파주의보",
},
{
    img:"https://img.insight.co.kr/static/2016/01/18/700/g8xc5525xf3xe89a4c86.jpg",
    title :"한파주의보",
},
{
    img:"https://cdn.news.gm.go.kr/news/photo/202301/18464_30757_532.jpg",
    title :"한파주의보",
},
{
    img:"https://img.insight.co.kr/static/2016/01/18/700/g8xc5525xf3xe89a4c86.jpg",
    title :"한파주의보",
},
{
    img:"https://cdn.news.gm.go.kr/news/photo/202301/18464_30757_532.jpg",
    title :"한파주의보",
},
{
    img:"https://economist.co.kr/data/ecn/image/2023/12/16/ecn20231216000004.800x.0.jpg",
    title:"한파주의보",
},
{
    img:"https://img.insight.co.kr/static/2016/01/18/700/g8xc5525xf3xe89a4c86.jpg",
    title :"한파주의보",
},
{
    img:"https://cdn.news.gm.go.kr/news/photo/202301/18464_30757_532.jpg",
    title :"한파주의보",
},
{
    img:"https://economist.co.kr/data/ecn/image/2023/12/16/ecn20231216000004.800x.0.jpg",
    title:"한파주의보",
},
];

