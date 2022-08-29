import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'


const RecipeCard = ({ title, image, onClick}) => {

  return (
    <Card sx={{ maxWidth: 345 }}>

      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
      />

      <CardContent>
        <h3>{title}</h3>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam.
        </Typography>
      </CardContent>

      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button onClick={onClick} size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default RecipeCard