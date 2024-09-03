import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import placeholderLogo from '../assets/placeholderLogo.jpg'

import { createTheme, ThemeProvider } from '@mui/material/styles';

const RightPane = () => {

    const outerTheme = createTheme({
      palette: {
        primary: {
            main: "#D3D3D3",
            light: "#D3D3D3",
            dark: '#D3D3D3',
            contrastText: '#D3D3D3',
        },
      },
    });

    const jobs = [
        {
            range: '2023 - PRESENT',
            title:'Senior Software Engineer :: Booz Allen Hamilton',
            description: 'placeholder description',
        },
        {
            range: '2021 - 2023',
            title:'Software Engineer II :: Ball Aerospace & Technologies Corp.',
            description: 'placeholder description',
        },
        {
            range: '2019',
            title:'Applications QA Intern :: London Computer Systems',
            description: 'placeholder description',
        },
        {
            range: '2018 - 2019',
            title:'Full Stack Engineer Intern :: Ridge Tool Company',
            description: 'placeholder description',
        },
    ]

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [desc, setDesc] = useState('');

    const sendEmail = () => {
        if(firstName==='' || lastName==='' || email==='' || desc===''){
            console.log('empty field');
            return;
        }

        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            console.log('bad email')
            return;
        }

        /// send code


    }
    //// make the cards blend in with background and then have a hover
    return(
        <Box id="right-pane" sx={{maxWidth: '90%'}}>
            <Box padding="20px 0px">
                <Typography id="about-me" padding="5px 0px" variant="h4">ABOUT ME</Typography>
                <Typography>
                    I have over 5 years experience in Software Engineering. He is experienced in multiple forms of
                    software development cycles including kanban, devOps,agile, and SysDev. He is well-versed in
                    object oriented programming, software design, unit testing, database management,
                    non-linear data structures, algorithms, embedded systems, and typescript frameworks.
                    Mr. Huhn has a strong understanding of node package manager libraries such as karma, express,
                    and async in addition to frameworks such as vue, angular, and react.
                </Typography>
            </Box>

            <Box padding="20px 0px">
                <Typography id="projects" padding="5px 0px" variant="h4">PROJECTS</Typography>
                <Box sx={{padding:'5px 0px'}}>
                    <Card id="around-everything-card" sx={{ display:'flex' }}>
                        <CardMedia
                            component="img"
                            sx={{width: 151}}
                            image={placeholderLogo}
                            alt="around everything logo"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent>
                                <Typography sx={{ fontWeight:'bold' }} variant="h6">Around Everything</Typography>
                                <Typography>Around Everything (name pending) is a new interactive social media experience where users can subscribe to events by companies on the fly!</Typography>
                            </CardContent>
                             <CardActions>
                                <Button href="/AroundEverything" size="small">Learn More</Button>
                              </CardActions>
                        </Box>
                    </Card>
                </Box>

                <Box padding="20px 0px">
                    <Typography id="resume" padding="5px 0px" variant="h4">RESUME</Typography>
                    <Box>
                        <Grid container spacing={2}>
                            {jobs && jobs.map((job)=>(
                                <Box sx={{display: 'flex'}}>
                                    <Grid id="resume-date-range" item size={3}>
                                        {job.range}
                                    </Grid>
                                    <Grid id="resume-job-description" item size={8}>
                                        <Typography>{job.title}</Typography>
                                        <Typography>{job.description}</Typography>
                                    </Grid>
                                </Box>
                            ))}
                        </Grid>
                        <Button variant="text">View full resume</Button>
                    </Box>
                </Box>

                <Box padding="20px 0px">
                    <Typography id="resume" padding="5px 0px" variant="h4">CONTACT ME</Typography>
                    <Box>
                        <TextField
                          variant="filled"
                          fullWidth
                          required
                          id="fName"
                          label="First Name"
                          margin="dense"
                          value={firstName}
                          onChange={(event)=>setFirstName(event.target.value)}
                          inputProps={{ style: { color: "lightgray" } }}
                            InputLabelProps={{
                              style: { color: 'lightgray' },
                            }}
                        />
                        <TextField
                            variant="filled"
                            fullWidth
                            required
                            id="lName"
                            label="Last Name"
                            margin="dense"
                            value={lastName}
                            onChange={(event)=>setLastName(event.target.value)}
                            inputProps={{ style: { color: "lightgray" } }}
                            InputLabelProps={{
                                style: { color: 'lightgray' },
                            }}
                        />
                        <TextField
                          variant="filled"
                          fullWidth
                          required
                          id="email"
                          label="Email"
                          margin="dense"
                          value={email}
                          onChange={(event)=>setEmail(event.target.value)}
                          inputProps={{ style: { color: "lightgray" } }}
                          InputLabelProps={{
                            style: { color: 'lightgray' },
                          }}
                        />
                        <TextField
                          variant="filled"
                          fullWidth
                          required
                          id="description"
                          label="Description"
                          value={desc}
                          margin="dense"
                          multiline
                          rows={4}
                          onChange={(event)=>setDesc(event.target.value)}
                          InputLabelProps={{
                            style: { color: 'lightgray' },
                          }}
                          inputProps={{ style: { color: "lightgray" } }}
                        />
                        <Button variant="text" onClick={sendEmail}>Submit</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default RightPane;