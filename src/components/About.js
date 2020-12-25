import React from "react";
import { Typography, makeStyles, Grid, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  hText: {
    fontWeight: 380,
  },
 
  paraText: {
    marginTop: "2rem",
    [theme.breakpoints.up("md")]:{
      fontSize: "2rem"
    },
    fontFamily:"'Shadows Into Light', cursive",
    marginLeft:"0.5rem"
  },
  firstPara: {
    marginTop: "2rem",
    [theme.breakpoints.up("md")]:{
      fontSize: "2rem"
    },
    fontFamily:"'Shadows Into Light', cursive",
    marginLeft:".5rem"
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            align="left"
            display="block"
            className={classes.hText}
            
          >
            About
          </Typography>
          <Divider variant="middle" />
        </Grid>

        <Grid item xs={9}>
          <Typography
            variant="subtitle1"
            align="left"
            gutterBottom
            className={classes.firstPara}
          >
            I’m a computer programmer graduate and have been working with web
            development and database management. I love technology and
            specialize in javascript development.
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            gutterBottom
            className={classes.paraText}
          >
            My curiosity drives me to be a lifelong learner. I am constantly
            learning new skills such as Cloud Computing and Online Marketing in
            order to offer better insights into modern problems.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
