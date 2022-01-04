import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import paloma from '../../images/paloma.jpeg';
const Drink = () => {
    return(
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <CardMedia
        component="img"
        height="140"
        image={paloma}
        alt="green iguana"
      />
          <Typography variant="body2">
            Paloma
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
};
export default Drink;