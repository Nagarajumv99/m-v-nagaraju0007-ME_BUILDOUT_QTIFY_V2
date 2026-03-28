import * as React from 'react';
import PropTypes from 'prop-types';
import styles from "./BasicTabs.module.css";

import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import CardItem from "../CardItem/CardItem";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ allSongs, genres }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Filter songs by genre key
  const getFilteredSongs = (genreKey) => {
    if (!genreKey || genreKey === "all") return allSongs;
    return allSongs.filter(song => song.genre.key === genreKey);
  };

  // Tabs: All Songs + first 4 genres
  const tabList = [{ key: "all", label: "All Songs" }, ...genres.slice(0, 4)];

  return (
    <>
    <hr/>
    <Grid container direction="column">
      <Typography sx={{
        textAlign: "left",
        paddingLeft: "30px",
        fontFamily: "Poppins",
        color: "#ffffff",
        marginTop: "30px",
      }}>
        Songs
      </Typography>

      <Box sx={{
        width: '100%',
        textAlign: "left",
        paddingLeft: "30px",
        fontFamily: "Poppins",
        color: "#ffffff",
        marginTop: "30px",
      }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="songs tabs"
            className={styles.btn}
          >
            {tabList.map((tab, index) => (
              <Tab key={tab.key} label={tab.label} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>

        {tabList.map((tab, index) => (
          <CustomTabPanel key={tab.key} value={value} index={index}>
            <Carousel
              data={getFilteredSongs(tab.key)}
              renderItem={(song) => (
                <CardItem eachItem={song} type="songs" />
              )}
            />
          </CustomTabPanel>
        ))}
      </Box>
    </Grid>
    </>
  );
};