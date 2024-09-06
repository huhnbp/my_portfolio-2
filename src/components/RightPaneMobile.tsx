import React, {useState} from 'react';
import emailjs from 'emailjs-com'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import placeholderLogo from '../assets/placeholderLogo.jpg';
import Resume from '../assets/Resume.pdf';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const RightPaneMobile = () => {

    const sz = {
        display: 'flex',
        width: '100%',
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

    const jobs = [
        {
            range: '2023 - 20XX',
            title:'Senior Software Engineer :: Booz Allen Hamilton',
            description: 'Create upcoming websites for the U.S. Department of Veteran Affairs. I provide leadership with my team and collaborate with UI/UX as well as customers to deliver the perfect products',
            url: 'https://www.boozallen.com/',
            languages:['react', 'java']
        },
        {
            range: '2021 - 2023',
            title:'Software Engineer II :: Ball Aerospace & Technologies Corp.',
            description: 'Developed and maintained various projects simultaneously for the U.S. Department of Defense',
            url: 'https://www.ball.com/',
            languages: ['angular', 'vueJS','golang', 'java']
        },
        {
            range: '2019 - 2019',
            title:'Applications QA Intern :: London Computer Systems',
            description: 'Collaborated with developers into implementing features as well as presenting them to the CEO',
            url: 'https://www.lcs.com/',
            languages:[],
        },
        {
            range: '2018 - 2019',
            title:'Full Stack Engineer Intern :: Ridge Tool Company',
            description: 'Worked with experienced developers into making demo pages for new power tools introduced into the market',
            url: 'https://www.ridgid.com/',
            languages: ['.Net', 'java', 'SQL'],
        },
    ]

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [desc, setDesc] = useState('');

    const SERVICE_ID="service_wfyx10g";
    const TEMPLATE_ID="template_kn88jc6";
    const PUBLIC_KEY="z9m2tkKM03ejz9Jdu";


    const sendEmail = (e) => {
        if(firstName==='' || lastName==='' || email==='' || desc===''){
            console.log('empty field');
            return;
        }

        // display error message here
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            console.log('bad email')
            return;
        }
        const params = {
            to_name: 'Brian Huhn',
            from_name: `${firstName} ${lastName}`,
            from_email: email,
            message: desc,
        }
        /// send code (emailJs)
        emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
          });
    }
    //// make the cards blend in with background and then have a hover
    return(
        <Box id="right-pane" padding="5px" sx={{maxWidth: '90%'}}>
            <Box padding="20px 0px">
                <Typography id="projects" padding="10px 0px" variant="h4">PROJECTS</Typography>
                <Box sx={{padding:'5px 0px'}}>
                    <Card id="around-everything-card" sx={{ display:'table' }}>
                        <CardMedia
                            component="img"
                            sx={{width: 151}}
                            image={placeholderLogo}
                            alt="around everything logo"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent>
                                <Typography sx={{ fontWeight:'bold' }} variant="h6">Around Everything</Typography>
                                <Typography>
                                    Mobile app for users to register to events posted by companies. Companies have the
                                    ability to specify events as much as they want as well as receive stats/reports on
                                    who is attending
                                </Typography>
                            </CardContent>
                             <CardActions>
                                <Button href="/AroundEverythingMobile" size="small">Learn More</Button>
                              </CardActions>
                        </Box>
                    </Card>
                </Box>

                <Box padding="20px 0px">
                    <Typography id="resume" padding="10px 0px" variant="h4">RESUME</Typography>
                    <Box>
                        <Grid container spacing={2}>
                            {jobs && jobs.map((job)=>(
                                <Box
                                    sx={sz}
                                    onClick={()=>{window.open(job.url, '_blank')}}
                                >
                                    <Grid id="resume-date-range" item size={3}>
                                        <Typography>{job.range}</Typography>
                                    </Grid>
                                    <Grid id="resume-job-description" padding="5px" item size={8}>
                                        <Typography>{job.title}</Typography>
                                        <Typography variant="h8" sx={{fontWeight:'light'}}>{job.description}</Typography>
                                        <Stack direction="row" spacing={1} padding="5px 0px">
                                            {job.languages && job.languages.map((lang)=><Chip sx={{color:'lightgray'}} label={lang}/>)}
                                        </Stack>
                                    </Grid>
                                </Box>
                            ))}
                        </Grid>
                        <Grid padding="10px">
                            <ThemeProvider theme={outerTheme}>
                               <a href={Resume} target="_blank">
                                  <Button trailingIcon="picture_as_pdf" variant="outlined" label="Resume">
                                    View Full Resume
                                  </Button>
                               </a>
                           </ThemeProvider>
                        </Grid>
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
                        <ThemeProvider theme={outerTheme}>
                            <Button variant="outlined" onClick={sendEmail}>Submit</Button>
                        </ThemeProvider>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default RightPaneMobile;