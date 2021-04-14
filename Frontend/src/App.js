import React, { useState, useEffect } from "react";
import BarChartHome from "./components/BarChartHome";
import { Header } from "./components/Header";
import ModernaPieChart from "./components/ModernaPieChart";
import PfizerPieChart from "./components/PfizerPieChart";
import {
  CssBaseline,
  createMuiTheme,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Footer from "./components/Footer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      paper: "#192734",
      default: "#15202B",
    },
  },
});

const App = () => {
  const [pfizerData, setPfizerData] = useState([]);
  const [modernaData, setModernaData] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Grid container spacing={2} justify="center" style={{ margin: "auto" }}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper style={{ opacity: "0.8", padding: "12px" }}>
            <Typography
              variant="h5"
              color="inherit"
              gutterBottom
              align="center"
              style={{ fontWeight: "bold" }}
            >
              Why this website
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              COVID-19 vaccination will help protect you from getting COVID-19.
              But according to the CDC, you may have some side effects, which are
              normal signs that your body is building protection. These side
              effects may affect your ability to do daily activities, but they
              should go away in a few days. We built this site so the part of
              the community who already have been vaccinated can inform others
              who wish to get vaccinated about any adverse side effects or
              complications.
            </Typography>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <BarChartHome pfizerData={pfizerData} modernaData={modernaData} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <PfizerPieChart data={pfizerData} />
          <ModernaPieChart data={modernaData} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper style={{ opacity: "0.8", padding: "12px" }}>
            <Typography
              variant="h5"
              color="inherit"
              gutterBottom
              align="center"
              style={{ fontWeight: "bold" }}
            >
              Common side effects
            </Typography>
            <Grid container spacing={2} justifyContent='center'>
              <Grid item xs={6}>
                <Typography>
                  <List>
                    <Typography style={{ fontWeight: "bold" }}>
                      On the arm where you got the shot:
                    </Typography>
                    <ListItem>Pain</ListItem>
                    <ListItem>Swelling</ListItem>
                  </List>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>
                  <List>
                    <Typography style={{ fontWeight: "bold" }}>
                      Throughout the rest of your body:
                    </Typography>
                    <ListItem>Fever</ListItem>
                    <ListItem>Chills</ListItem>
                    <ListItem>Tiredness</ListItem>
                    <ListItem>Headache</ListItem>
                  </List>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Divider variant="middle"/>
      <Grid style={{ marginTop: "20px" }}>
        <Footer />
      </Grid>
    </ThemeProvider>
  );
};

export default App;
