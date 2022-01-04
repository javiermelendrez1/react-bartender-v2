import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import {Link} from 'react-router-dom';
const SearchBar = () => {
    //created a state for searched drink name 
    const [drink, setDrink] = useState(''); //initially it is an empty string 
    //add a listener to the text input 
    const handleDrinkChange = (e) => {
        setDrink(e.target.value);
    }
        //create a function for the api fetch 
        const fetchApi = async () => {
            try {
                const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`);
                console.log(res.data.drinks);
            } catch(err) {
                console.log(err);
            }
        }
    //create a function for the form submit 
    const handleSubmit = (e) => {
        e.preventDefault();
        //call the api to search drinks
        fetchApi();
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
                ><Link to="/search"><SearchIcon/></Link></Button>
            </Box>

        </form>
    );
};
export default SearchBar;