import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

import LeftPane from './LeftPane.tsx';
import RightPane from './RightPane.tsx'
import RightPaneMobile from './RightPaneMobile.tsx'


const Home = () =>{
    const getDimensions = () => {
        const{ innerWidth: width, innerHeight: height } = window;
        if(width <= 416){
            console.log('phone time')
        }
        return {
            width,
            height
        }
    }
    const [windowDimensions, setWindowDimensions] = useState(getDimensions());

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getDimensions());
        }
        window.addEventListener('resize', handleResize());
            return () => window.removeEventListener('resize', handleResize());

        console.log(windowDimensions.width);
        if(windowDimensions.width<=414){
            console.log('414 or below');
        }
    },[])
//     console.log(windowDimensions);
    if(windowDimensions.width <= 416){
        return(
            <Box sx={{ overflowY: "scroll", maxHeight: "100%" }}>
                <LeftPane />
                <RightPaneMobile />
            </Box>
        )
    }
    return(
        <Grid container spacing={2} height="100vh">
            <Grid id="left-pane-grid" item size={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
                <LeftPane />
            </Grid>
            <Grid item size={6}
               sx={{ overflowY: "scroll", maxHeight: "100%" }}
            >
                <RightPane/>
            </Grid>
        </Grid>
    )
}

export default Home;