import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

import LeftPane from './LeftPane.tsx';
import RightPane from './RightPane.tsx'
// import left pane
// import right panes


const Home = () =>{
    return(
        <Grid container spacing={2} height="100vh" sx={{color:'lightgray'}}>
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
                <RightPane />
            </Grid>
        </Grid>
    )
}

export default Home;