import React from "react";

import { Grid, makeStyles, Typography } from "@material-ui/core";
import ProjectFile from "./ProjectFile"
const useStyles = makeStyles({});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Grid>
      <Grid item xs={12}>
        <Typography variant="h1">Projects</Typography>
      </Grid>
      <ProjectFile/>
    </Grid>
    
  );
}
