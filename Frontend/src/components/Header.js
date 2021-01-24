import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import vaccineImage from "../images/vaccine.jpeg";
import { Button } from "@material-ui/core";
import ContributorFormMain from "./contributors/ContributorFormMain";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
    backgroundImage: `url(${vaccineImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.7)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
    },
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: vaccineImage }}
    >
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={12}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
              style={{ fontWeight: "bold" }}
            >
              {"Vaccinate NY"}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {"Community based vaccine review"}
            </Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: "#BAC938", fontWeight: "bold" }}
              onClick={ () => <ContributorFormMain /> }
            >
              Contribute
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
