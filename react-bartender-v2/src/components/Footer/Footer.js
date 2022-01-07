import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
    const footer = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '.5rem',
    }
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            height: '30px',
            backgroundColor: '#282c34',
            
        }}>
            <Typography variant="body1" component="div" sx={footer}>
            Created by Javier Melendrez
            </Typography>
        </Box>
    );
}
export default Footer;