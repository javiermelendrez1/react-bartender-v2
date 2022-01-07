import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from '../../images/thecocktaildb.png';
import Stack from '@mui/material/Stack';

const HeroImage = () => {
    const h1 = {
        
        '@media (max-width: 780px)' : {
          fontSize: '3rem'
        }
      }
    const subTitle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media (max-width: 780px)' : {
            fontSize: '0.5rem'
          }
    }
    return(
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            height: '500px',
            backgroundColor: 'lightblue',
        }}>
            <Stack spacing={2}>
            <Typography variant="h1" component="div" sx={h1}>
              Welcome to React Bartender.
            </Typography>
            <Typography variant='subtitle1' 
            sx={subTitle}
            >Powered By <img src={logo} alt='cocktaildb logo' /></Typography>
            </Stack>

        </Box>
    );
};
export default HeroImage;