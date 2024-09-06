import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import GImage from '../assets/github-mark.png'
import linkedLogo from '../assets/LI-In-Bug.png'

import { createTheme, ThemeProvider } from '@mui/material/styles';

const LeftPane = () => {

    const sz = {
        justifyContent: "flex-start",
        "&:hover": {
            backgroundColor:'rgba(0, 0, 0, 0.06)',
            boxShadow:3,
        },
    }

    const outerTheme = createTheme({
      palette: {
        primary: {
          main: "#D3D3D3",
          dark: '#345F20'
        },
      },
    });

    return(
        <Box>
            <Box id="me" padding="20px">
                <Typography variant="h2" sx={{fontWeight:'bold'}}>Brian Huhn</Typography>
                <Typography variant="h5" sx={{fontWeight:'medium'}}>Senior Software Engineer</Typography>
                <Typography variant="h8" sx={{fontWeight:'light'}}>
                    I am well-versed in developing websites, mobile apps, and computer programs. Feel free to check my
                    products and feel free to contact me if you are interested in owning your own site.
                </Typography>
            </Box>
            {/*
            <Box id="page-links" padding="20px">
                <ThemeProvider theme={outerTheme}>
                    <ButtonGroup orientation="vertical">
                        <Button variant="text" sx={sz}>____Projects</Button>
                        <Button variant="text" sx={sz}>____Resume</Button>
                        <Button variant="text" sx={sz}>____Contact Me</Button>
                    </ButtonGroup>
                </ThemeProvider>
            </Box>
            */}
            <Box id="links-navbar" padding="20px" display="inline-flex">
                <img
                    src={GImage}
                    alt="git image"
                    width="40px"
                    height="40px"
                    role="button"
                    onClick={()=>{window.open('https://github.com/huhnbp', '_blank')}}
                    style={{padding:"5px"}}
                />
                <img
                    src={linkedLogo}
                    alt="linkedIn logo"
                    width="50px"
                    height="40px"
                    role="button"
                    onClick={()=>{window.open('https://www.linkedin.com/in/huhnbrian/', '_blank')}}
                    style={{padding:"5px"}}
                />
            </Box>
        </Box>
    )
}

export default LeftPane;