import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
const Grid = () => {
    return (
        <Box
        sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gridGap: '2rem',
        }}
        >
            
        </Box>
    );

};
export default Grid;