import React, {useState} from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import SignIn from '../assets/aroundEverything/SignIn.png'
import CreateEvent from '../assets/aroundEverything/CreateEvent.png'
import EventPage from '../assets/aroundEverything/EventPage.png'
import HomePage from '../assets/aroundEverything/HomePage.png'
import CalendarScreen from '../assets/aroundEverything/CalendarScreen.png'

import HomeDemo from '../assets/aroundEverything/HomeDemo.mp4'

import placeholderLogo from '../assets/placeholderLogo.jpg'

const AroundEverythingDemo = () => {
    return(
        <Box sx={{ overflowY: "scroll", maxHeight: "100%" }}>
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

                <Stack direction="column" spacing={1} padding="5px 0px">
                    <Typography id="resume" padding="5px 0px" variant="h4">Users</Typography>
                    <Paper>
                        <Box padding="5px">
                            <Typography>
                                Around Everything (name pending) is a new interactive social media experience where users can
                                subscribe to events by companies on the fly. If anyone forgets that they're attending an event,
                                Around Everything has that covered with its Calendar tab where you can see you're upcoming events
                                as well as events you've attended in the past.
                            </Typography>
                        </Box>
                    </Paper>
                    <Typography id="resume" padding="5px 0px" variant="h4">Coordinators</Typography>
                    <Paper>
                        <Box padding="5px">
                            <Typography>
                                Event coordinators are able to see stats on events they created at any time! Even after an event
                                is posted, coordinators have the ability edit and notify registrants of any updates. coordinators
                                also have the ability to export and import all event stats via csv file.
                            </Typography>
                        </Box>
                    </Paper>
                </Stack>
            {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164} */}
                <Box id="ILBox" sx={{ display: 'flex', justifyContent: 'center'}}>
                    <ImageList cols={1}
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