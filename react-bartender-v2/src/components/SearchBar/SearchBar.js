import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
    //created a state for searched drink name 
    const [drink, setDrink] = useState(''); //initially it is an empty string 
    //add a listener to the text input 
    let navigate = useNavigate();
    const handleDrinkChange = (e) => {
        setDrink(e.target.value);
    }
        //create a function for the api fetch 

    //create a function for the form submit 
    const handleSubmit = (e) => {
        e.preventDefault();
        //call the api to search drinks
        navigate(`/search/${drink}`);
        //empty out text string
        setDrink('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                padding: '20px',
            }}>
                <TextField id="outlined-basic" label="Enter Cocktail" variant="outlined" 
                value={drink}
                onChange={handleDrinkChange}
                />
                <Button variant="text"
                type='submit'
                ><SearchIcon/></Button>
            </Box>

        </form>
    );
};
export default SearchBar;