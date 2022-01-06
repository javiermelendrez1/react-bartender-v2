import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import axios from 'axios';
const SingleDrink = () => {
    //for the drink doing the same thing 
    const path = (window.location.pathname).split('/')[2];
    const x = path.replace('%20',' ');
    console.log(x);
    //create a state for the single drink
    const [drink, setDrink] = useState([]); //this will be just an empty array 
    //make a useEffect 
    useEffect(() => {
        //make api request
        const fetchAPI = async () => {
            try{
                const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${x}`);
                setDrink(res.data.drinks['0']);
                //console.log(res.data.drinks['0']);
            } catch(err) {
                console.log(err);
            }

        }
        fetchAPI();
    }, [])
    return (
        <Container maxWidth="sm">
        <Box sx={{ 
        bgcolor: '#cfe8fc',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <img src={drink.strDrinkThumb} alt={drink.strDrink}/>
        <Typography variant="subtitle1" gutterBottom component="div">
        {drink.strDrink}
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" align='left'>
      Ingredients
      </Typography>
      <Typography variant="body1" gutterBottom align='left'>
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
      <Typography variant="subtitle2" gutterBottom component="div" align='left'>
      Glass
      </Typography>
      <Typography variant="body1" gutterBottom align='left'> 
        {drink.strGlass}
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" align='left'>
      Instructions
      </Typography>
      <Typography variant="body1" gutterBottom align='left'>
        {drink.strInstructions}
      </Typography>
        </Box>
      </Container>
    );
};
export default SingleDrink;