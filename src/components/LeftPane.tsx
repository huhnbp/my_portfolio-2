import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import GImage from '../assets/github-mark.png'
import linkedLogo from '../assets/LI-In-Bug.png'

const LeftPane = () => {

    return(
        <Box>
            <Box id="me" padding="20px">
                <Typography variant="h2">Brian Huhn</Typography>
                <Typography variant="h5">Senior Software Engineer</Typography>
                <Typography>I built reactive websites and apps</Typography>
            </Box>
            <Box id="page-links" padding="20px">
                <ButtonGroup orientation="vertical">
                    <Button variant="text">About Me</Button>
                    <Button variant="text">Projects</Button>
                    <Button variant="text">Resume</Button>
                    <Button variant="text">Contact Me</Button>
                </ButtonGroup>
            </Box>

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