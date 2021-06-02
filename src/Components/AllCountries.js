import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 50
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        color: '#3f51b5'
    }
}));

export default function AllCountries() {
    const [globalData, setglobalData] = useState([{}]);

    useEffect(() => {
        async function getdata() {
            const response = await fetch("https://api.covid19api.com/summary");
            let data = await response.json();
            setglobalData((Object.values(Object.values(data.Countries))));
            console.log(data.Countries[0])
        }
        getdata();
    }, [])


    const classes = useStyles();

    return (
        /*<div className={classes.root}>
              <Grid container spacing={3}>
                {Object.keys(globalData).map((key, ind) => {
                    return (
                        <Grid item xs={12} sm={4} key={ind}>
                            <Paper className={classes.paper} elevation={3}>
                                <h3 className={classes.title}>{key}</h3>
                                <h3>{globalData[0][key]}</h3>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>*/
        <div className={classes.root}>
            <table>
                <tr>
                    <th color="red">Country Name</th>
                    <th>New Confirmed</th>
                    <th>New Deaths</th>
                    <th>NewRecovered</th>
                    <th>TotalConfirmed</th>
                </tr>
                {globalData.map((key, ind) => {
                    return (
                        <tr>
                            <td>
                                {globalData[ind].Country}
                            </td>
                            <td>
                                {globalData[ind].NewConfirmed}
                            </td>
                            <td>
                            {globalData[ind].NewDeaths}
                            </td>
                            <td>
                            {globalData[ind].NewRecovered}
                            </td>
                            <td>
                            {globalData[ind].TotalConfirmed}
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}
