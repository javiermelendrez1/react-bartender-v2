import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Drink from '../Drink/Drink';
import axios from 'axios';
import Container from '@mui/material/Container';

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
        <Container maxWidth="lg" sx={{height: '100vh'}}>
        <Box
        sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            rowGap: '3rem',
            columnGap: '4rem',
            marginTop: '3rem',
            marginBottom: '3rem',
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
        </Container>
    );

};
export default Grid;