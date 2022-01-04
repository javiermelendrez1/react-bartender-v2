import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Drink from '../Drink/Drink';
const Grid = () => {
    return (
        <Box
        sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gridGap: '2rem',
        }}
        >
            <Drink/>
            <Drink/>
            <Drink/>
            <Drink/>


        </Box>
    );

};
export default Grid;