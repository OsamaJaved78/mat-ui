import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core';
import NavBar from './Components/NavBar';
import BarChart from './barChart';
import InfoPath from './Components/InfoPath';
import FootNav from './Components/FootNav';

/*const useStyles = makeStyles((theme) => ({
  root: {
  },
  paper: {
    width: 400,
    margin: '0 auto',
    backgroundColor: '#efefef',
    textAlign: 'center',
    padding: 15,
    marginTop: "8%"

  },
  input: {
    width: '95%',
    marginBottom: 10
  }
}));*/
function App() {
  
  const  screenConfig = useState(0);

  return (
    /*<div className={classes.root}>
      <NavBar />
      <Paper elevation={3} className={classes.paper}>
        <h1>Login</h1>
        <form className={classes.root} noValidate autoComplete="off" >
          <TextField label="Email" className={classes.input} />
          <TextField label="Password" type="password" className={classes.input} />
          <Button variant="contained" color="primary" className={classes.input}>
            Login
          </Button>
        </form>
      </Paper>
      <BarChart/>*/

    <div>
      <NavBar/>
      <InfoPath currentScreen ={screenConfig[0]}/>
      <FootNav screenConfig={screenConfig}/>
    </div>
  );
}

export default App;

