import React from 'react';
import CardItem from '../CardItem/CardItem';
import { Button, Grid, Typography } from '@mui/material';

const Cards = ({ albumData, title }) => {
  return (
    <>
      <Grid container justifyContent="space-between">
        <Typography
          sx={{
            textAlign: "left",
            paddingLeft: "30px",
            fontFamily: "Poppins",
            color: "#ffffff",
            marginBottom: "20px",
            marginTop:"50px"
          }}
        >
          {title}
        </Typography>
        <Button
          sx={{
            textAlign: "right",
            paddingRight: "30px",
            fontFamily: "Poppins",
            color: "#34C94B",
            marginBottom: "20px"
          }}
        >
          Collapse
        </Button>
      </Grid>

      <Grid container spacing={7} justifyContent="flex-start" padding="0px 30px">
        {albumData.map((album) => (
          <Grid
            item
            key={album.id}
            sx={{ flexBasis: "calc(100% / 7)", maxWidth: "calc(100% / 7)" }}
          >
            <CardItem eachItem={album} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Cards;