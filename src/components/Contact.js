import React from "react";
import {Typography, makeStyles, Grid  } from "@material-ui/core";

const useStyles= makeStyles((theme)=>({
  root:{
    flexGrow: 2,
  },

}))

export default function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid>
        <Grid item xs ={12}>
          <Typography variant="h1" >Contact</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
