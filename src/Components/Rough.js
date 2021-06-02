import React,{useState,useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 18,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Rough() {
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
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow color="grey">
            <StyledTableCell>Country Name </StyledTableCell>
            <StyledTableCell align="right">New Confirmed</StyledTableCell>
            <StyledTableCell align="right">New Deaths</StyledTableCell>
            <StyledTableCell align="right">NewRecovered</StyledTableCell>
            <StyledTableCell align="right">TotalConfirmed</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {globalData.map((key, ind)=>(
            <StyledTableRow key={globalData[ind].Country}>
                <StyledTableCell align="right">{globalData[ind].Country}</StyledTableCell>
                <StyledTableCell align="right">{globalData[ind].NewConfirmed}</StyledTableCell>
                <StyledTableCell align="right">{globalData[ind].NewDeaths}</StyledTableCell>
                <StyledTableCell align="right">{globalData[ind].NewRecovered}</StyledTableCell>
                <StyledTableCell align="right">{globalData[ind].TotalConfirmed}</StyledTableCell>
            </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
