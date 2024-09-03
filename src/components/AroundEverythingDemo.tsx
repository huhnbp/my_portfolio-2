import React, {useState} from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import SignIn from '../assets/aroundEverything/SignIn.png'
import CreateEvent from '../assets/aroundEverything/CreateEvent.png'
import EventPage from '../assets/aroundEverything/EventPage.png'
import HomePage from '../assets/aroundEverything/HomePage.png'
import CalendarScreen from '../assets/aroundEverything/CalendarScreen.png'

import HomeDemo from '../assets/aroundEverything/HomeDemo.mp4'

import placeholderLogo from '../assets/placeholderLogo.jpg'

const AroundEverythingDemo = () => {
    return(
        <Box padding="40px">
            <Breadcrumbs>
                <Link
                  underline="hover"
                  color="inherit"
                  href="/"
                >
                  Home
                </Link>
                <Typography>AroundEverything</Typography>
            </Breadcrumbs>

        {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164} */}
        <Box id="ILBox" sx={{ display: 'flex', justifyContent: 'center'}}>
            <ImageList cols={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={8}
                sx={{ height:550, width:800 }}
            >
                <ImageListItem>
                    <img
                        src={SignIn}
                        alt="git image"
                        width="10px"
                        height="600"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src={HomePage}
                        alt="git image"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src={EventPage}
                        alt="git image"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src={CalendarScreen}
                        alt="git image"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src={CreateEvent}
                        alt="git image"
                    />
                </ImageListItem>
            </ImageList>
          </Box>

        </Box>
    )
}

export default AroundEverythingDemo;