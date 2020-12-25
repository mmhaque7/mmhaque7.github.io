import React from "react";
import { Link, } from "react-router-dom";
import {
  makeStyles,
  Toolbar,
  Typography,
  
  Grid,
  AppBar,
  
  
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  appBar:{
    background: "white"
  },
  linkCSS:{
    textDecoration: "none",
    color: "black"
  }
}));


export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className= {classes.appBar}>
        <Toolbar>
          <Grid container spacing={6}>
           
              <Grid item xs={3}>
                <Typography variant="h6">
                <Link to="/" className={classes.linkCSS} >About</Link>
                </Typography>
              </Grid>
              <Grid item xs={3}>
              <Typography variant="h6">
                <Link to="/project" className={classes.linkCSS}>Projects</Link>
                </Typography>
              </Grid>
              <Grid item xs={3}>
              <Typography variant="h6">
                <Link to="/contact" className={classes.linkCSS}>Contact</Link>
                </Typography>
              </Grid>
            
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
