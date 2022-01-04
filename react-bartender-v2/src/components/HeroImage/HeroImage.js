import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const HeroImage = () => {
    return(
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '500px',
            backgroundColor: 'lightblue',
        }}>
            <Typography variant="h1" component="div" sx={{ flexGrow: 1}}>
              Welcome to React Bartender.
            </Typography>
        </Box>
    );
};
export default HeroImage;