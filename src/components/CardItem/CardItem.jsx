import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import styles from "./CardItem.module.css";

function CardItem({ eachItem, type }) {
  return (
    <Card sx={{ maxWidth: "100%", borderRadius: "10px", position:"relative", overflow:"visible", marginBottom:"30px" }}>
      <CardMedia
        component="img"
        image={eachItem.image}
        alt={eachItem.title}
        sx={{ width: "100%", height: "170px", borderTopLeftRadius:"10px", borderTopRightRadius:"10px" }}
      />
      <CardContent sx={{padding:"10px"}}>
        <Chip 
          label={
            type === "songs"
              ? `${eachItem.likes} Likes`
              : `${eachItem.follows} Follows`
          }
          className={styles.chip}
        />
      </CardContent>
      <Typography gutterBottom variant="h5" component="div" className={styles.bottomTxt}>
        {eachItem.title}
      </Typography>
    </Card>
  );
}


export default CardItem