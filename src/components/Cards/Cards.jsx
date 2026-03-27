import React, { useState } from "react";
import CardItem from "../CardItem/CardItem";
import Carousel from "../Carousel/Carousel";
import { Button, Grid, Typography } from "@mui/material";

const Cards = ({ albumData, title }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => setCollapsed(!collapsed);

  return (
    <>
      <Grid container justifyContent="space-between">
        <Typography
          sx={{
            textAlign: "left",
            paddingLeft: "30px",
            fontFamily: "Poppins",
            color: "#ffffff",
            marginTop: "30px",
          }}
        >
          {title}
        </Typography>
        <Button
          onClick={handleToggle}
          sx={{
            textAlign: "right",
            paddingRight: "30px",
            fontFamily: "Poppins",
            color: "#34C94B",
            marginTop: "30px",
          }}
        >
          {collapsed ? "Show All" : "Collapse"}
        </Button>
      </Grid>

      {collapsed ? (
        <Carousel
          data={albumData}
          renderItem={(album) => <CardItem eachItem={album} />}
        />
      ) : (
        <Grid container spacing={2} justifyContent="flex-start" padding="0px 30px" marginBottom="50px">
          {albumData.map((album) => (
            <Grid
              item
              key={album.id}
          sx={{
              flexBasis: {
                xs: "calc(100% / 2)",   // 2 items per row
                sm: "calc(100% / 3)",   // 3 items per row
                md: "calc(100% / 5)",   // 5 items per row
                lg: "calc(100% / 7)",   // 7 items per row
              },
              maxWidth: {
                xs: "calc(100% / 2)",
                sm: "calc(100% / 3)",
                md: "calc(100% / 5)",
                lg: "calc(100% / 7)",
              },

              mb: "70px", // margin-bottom shorthand
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