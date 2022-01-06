import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Drink from '../Drink/Drink';
import axios from 'axios';
const Grid = () => {
    //save the parameter path
    const path = (window.location.pathname).split('/')[2];
    //create a state for the drinks
    const[drinks,setDrinks] = useState([]); //empty object at first
    //create a useEffect to fetch the api when the page loads 
    useEffect(() => {
        //call for the api 
        const fetchAPI = async () => {
            try {
                const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${path}`);
                //set state 
                setDrinks(res.data.drinks);
                console.log(drinks);
            } catch (err) {
                //print out th error
                console.log(err);
            }
        }
        fetchAPI();
    },[])    
    return (
        <Box
        sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gridGap: '2rem',
        }}
        >
        {
            drinks.map((drink) => {
                return (
                    <Drink drink={drink}/>
                );
            })
        }
        </Box>
    );

};
export default Grid;