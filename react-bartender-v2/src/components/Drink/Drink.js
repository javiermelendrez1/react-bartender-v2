import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import paloma from '../../images/paloma.jpeg';
import { useNavigate } from 'react-router-dom';
const Drink = ({drink}) => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/drink/${drink.strDrink}`);
  }
    return(
        <Card sx={{ minWidth: 275}} key={drink.strDrink}>
        <CardContent>
        <CardMedia
        component="img"
        height="140"
        image={drink.strDrinkThumb}
        alt="green iguana"
      />
          <Typography variant="body2">
            {drink.strDrink}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"
          onClick={handleClick}
          >Learn More</Button>
        </CardActions>
      </Card>
    );
};
export default Drink;