import React from 'react'
import CardItem from '../CardItem/CardItem'
import { Button, Grid, Typography } from '@mui/material'

const Cards= ({albumData}) => {
  return (<>
    <Grid container justifyContent="space-between"><Typography sx={{textAlign:"left", paddingLeft:"30px", fontFamily:"Poppins", color:"#ffffff", marginBottom:"20px"}}>Top Albums</Typography> <Button sx={{textAlign:"right", paddingRight:"30px", fontFamily:"Poppins", color:"#34C94B", marginBottom:"20px"}}>Collapse</Button></Grid>
    
    <Grid container spacing={7} justifyContent="flex-start" padding="0px 30px">
      {albumData.map((eachItem, index) => (
        <Grid
          item
          key={index}
          sx={{ flexBasis: "calc(100% / 7)", maxWidth: "calc(100% / 7)" }}
        >
          <CardItem eachItem={eachItem} />
        </Grid>
      ))}
    </Grid>

  </>)
}

export default Cards