import React, { useState } from "react";
import CardItem from "../CardItem/CardItem";
import Carousel from "../Carousel/Carousel";
import { Button, Grid, Typography } from "@mui/material";

const Cards = ({ albumData, title }) => {
  const [showCarousel, setShowCarousel] = useState(false);

  const handleToggle = () => setShowCarousel(!showCarousel);

  return (
    <>
      <Grid container justifyContent="space-between">
        <Typography sx={{
            textAlign: "left",
            paddingLeft: "30px",
            fontFamily: "Poppins",
            color: "#ffffff",
            marginTop: "30px",
          }}>
          {title}
        </Typography>
        <Button onClick={handleToggle} sx={{
            textAlign: "right",
            paddingRight: "30px",
            fontFamily: "Poppins",
            color: "#34C94B",
            marginTop: "30px",
          }}>
          {showCarousel ? "Collapse" : "Show All"}
        </Button>
      </Grid>

      {!showCarousel ? (
        <Carousel
          data={albumData}
          renderItem={(album) => <CardItem eachItem={album} />}
        />
      ) : (
        <Grid container spacing={3} sx={{ pl: 3, mb: 6 }}>
          {albumData.map((album) => (
            <Grid
              item
              key={album.id}
              sx={{
                flexBasis: { xs: "50%", sm: "33.33%", md: "20%", lg: "14.28%" },
                maxWidth: { xs: "50%", sm: "33.33%", md: "20%", lg: "14.28%" },
                mb: "70px",
              }}
            >
              <CardItem eachItem={album} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
export default Cards;