import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import NotFound from '../NotFound/NotFound';
const SingleDrink = () => {
  const h1 = {
    fontSize: '3rem',
  }
  const h2 = {
    fontSize: '2rem',
  }
  const body1 = {
    fontSize: '1rem',
  }
  //for the drink doing the same thing 
  const path = (window.location.pathname).split('/')[2];
  const x = path.replace('%20', ' ');
  console.log(x);
  //create a state for the single drink
  const [drink, setDrink] = useState([]); //this will be just an empty array 
  //create a state to check if the response from the api fetch is null
  const [isNull, setIsNull] = useState(false); // not null by default
  //make a useEffect 
  useEffect(() => {
    //make api request
    const fetchAPI = async () => {
      try {
        const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${x}`);
        if (res.data.drinks == null) {
          setIsNull(true);
        } else {
          setIsNull(false);
          setDrink(res.data.drinks['0']);
        }

      } catch (err) {
        console.log(err);
      }

    }
    fetchAPI();
  }, [])
  return (
    <Container maxWidth="sm" sx={{
      minHeight: '100vh',
    }}>
      {isNull ? <NotFound /> :
        <Box sx={{

          marginTop: '2rem',
          marginBottom: '2rem',
        }}>
          <img src={drink.strDrinkThumb} alt={drink.strDrink}
            width='100%' style={{ objectFit: 'cover' }}
          />
          <div>
            <Typography variant="h1" gutterBottom component="div" sx={h1}>
              {drink.strDrink}
            </Typography>
            <Typography variant="h2" gutterBottom component="div" align='left' sx={h2}>
              Ingredients
            </Typography>
            <Typography variant="body1" gutterBottom align='left' sx={body1}>
              <Stack spacing={1}>
                <div>{drink.strMeasure1} {drink.strIngredient1}</div>
                <div>{drink.strMeasure2} {drink.strIngredient2}</div>
                <div>{drink.strMeasure3} {drink.strIngredient3}</div>
                <div>{drink.strMeasure4} {drink.strIngredient4}</div>
                <div>{drink.strMeasure5} {drink.strIngredient5}</div>
                <div>{drink.strMeasure6} {drink.strIngredient6}</div>
                <div>{drink.strMeasure7} {drink.strIngredient7}</div>
                <div>{drink.strMeasure8} {drink.strIngredient8}</div>
                <div>{drink.strMeasure9} {drink.strIngredient9}</div>
                <div>{drink.strMeasure10} {drink.strIngredient10}</div>
                <div>{drink.strMeasure11} {drink.strIngredient11}</div>
                <div>{drink.strMeasure12} {drink.strIngredient12}</div>
                <div>{drink.strMeasure13} {drink.strIngredient13}</div>
                <div>{drink.strMeasure14} {drink.strIngredient14}</div>
                <div>{drink.strMeasure15} {drink.strIngredient15}</div>

              </Stack>
            </Typography>
          </div>

          <Typography variant="h2" gutterBottom component="div" align='left' sx={h2}>
            Glass
          </Typography>
          <Typography variant="body1" gutterBottom align='left' sx={body1}>
            {drink.strGlass}
          </Typography>
          <Typography variant="h2" gutterBottom component="div" align='left' sx={h2}>
            Instructions
          </Typography>
          <Typography variant="body1" gutterBottom align='left' sx={body1}>
            {drink.strInstructions}
          </Typography>
        </Box>
      }
    </Container>
  );
};
export default SingleDrink;