import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import object from "../projectData";
import { Grid } from "@material-ui/core";
import { Link} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 500
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {object.projects.map((pro) => (
        <Grid item xs={12} md ={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={pro.imageSrc}
                title={pro.title}
              />
              <CardContent key={pro.id}>
                <Typography>{pro.title}</Typography>
                <Typography>{pro.para}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              
              <Button size="small" color="primary" onClick={(e)=>(window.location = pro.url)}>
                Page
              </Button>
              
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
