import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drink from '../Drink/Drink';
import axios from 'axios';
import Container from '@mui/material/Container';
import SearchBar from '../SearchBar/SearchBar';
import NotFound from '../NotFound/NotFound';

const Grid = ({search, setSearch}) => {
    //save the parameter path
    const path = (window.location.pathname).split('/')[2];
    //create a state for the drinks
    const[drinks,setDrinks] = useState([]); //empty object at first
    //create a state to check if the response from the api fetch is null
    const [isNull, setIsNull] = useState(false); // not null by default
    //create a useEffect to fetch the api when the page loads 
    useEffect(() => {
        //call for the api 
        const fetchAPI = async () => {
            try {
                const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${path}`);
                //create a if statement that will check if the response if null
                if(res.data.drinks == null) {
                    setIsNull(true);

                } else {
                //set state 
                setIsNull(false);
                setDrinks(res.data.drinks);
                }

                //console.log(drinks);
            } catch (err) {
                //print out th error
                console.log(err);
            }
        }
        fetchAPI();
    },[search])

    return (
        <Container maxWidth="lg" sx={{minHeight: '100vh'}}>
        <SearchBar setSearch={setSearch}/>
        {isNull ? <NotFound /> : 
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
        }
        </Container>
    );

};
export default Grid;