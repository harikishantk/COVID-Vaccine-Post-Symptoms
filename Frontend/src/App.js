import React, { useState, useEffect } from 'react'
import BarChartHome from "./components/BarChartHome";
import { Header } from "./components/Header";
import ModernaPieChart from "./components/ModernaPieChart";
import PfizerPieChart from "./components/PfizerPieChart";
import { CssBaseline, createMuiTheme, Grid, Paper, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      paper: '#192734',
      default: '#15202B'
    }
  },
});


const App = () => {

  const [pfizerData, setPfizerData] = useState([])
  const [modernaData, setModernaData] = useState([])


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Grid container spacing={2} justify='center' style={{margin: 'auto'}}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper >
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque purus metus, cursus vitae posuere interdum, tincidunt eget risus. Fusce fringilla est non lorem sodales, quis hendrerit diam dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit massa tortor, et gravida erat sollicitudin eget. Vivamus justo lectus, posuere non pharetra et, scelerisque quis tellus. Cras a tellus risus. Phasellus non lacus non purus condimentum vulputate ac eget enim. Phasellus blandit sapien vel feugiat placerat. Suspendisse commodo eros id vehicula venenatis. Aenean nec dui in orci egestas blandit. Vestibulum lorem purus, pharetra quis vestibulum in, accumsan sed ligula. Maecenas dictum ex vitae fermentum accumsan.
            </Typography>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{ display: "flex", justifyContent: "center"}}
        >
          <BarChartHome pfizerData={ pfizerData } modernaData={ modernaData }/>
        </Grid>
        <Grid item xs={12} sm={6} style={{display: 'flex', justifyContent: 'center'}}>
          <PfizerPieChart data={ pfizerData }/>
          <ModernaPieChart data={ modernaData } />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque purus metus, cursus vitae posuere interdum, tincidunt eget risus. Fusce fringilla est non lorem sodales, quis hendrerit diam dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit massa tortor, et gravida erat sollicitudin eget. Vivamus justo lectus, posuere non pharetra et, scelerisque quis tellus. Cras a tellus risus. Phasellus non lacus non purus condimentum vulputate ac eget enim. Phasellus blandit sapien vel feugiat placerat. Suspendisse commodo eros id vehicula venenatis. Aenean nec dui in orci egestas blandit. Vestibulum lorem purus, pharetra quis vestibulum in, accumsan sed ligula. Maecenas dictum ex vitae fermentum accumsan.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;