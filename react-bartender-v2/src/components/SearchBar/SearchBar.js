import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
    return(
        <form>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                padding: '20px',
            }}>
                <TextField id="outlined-basic" label="Enter Cocktail" variant="outlined" />
                <Button variant="text"><SearchIcon/></Button>
            </Box>

        </form>
    );
};
export default SearchBar;