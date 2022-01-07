import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const NotFound = () => {
    return(
        <div>
            <Container maxWidth='lg' sx={{height: '100vh'}}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Typography variant='h1' sx={{
                    fontSize: '3rem'
                }}>
                    No results were found, please try searching for another drink.
                </Typography>
            </Box>
            </Container>
        </div>
    );
}
export default NotFound;