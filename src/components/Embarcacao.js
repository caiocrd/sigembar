import React,  { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import { withRouter, Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/lab/Slider';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import SimpleLineChart from './SimpleLineChart';
import Months from './common/Months';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import Loading from './common/Loading';
import ProprietarioItem from './proprietario/ProprietarioItem';
import Edit from '@material-ui/icons/Edit'

import Topbar from './Topbar';

const numeral = require('numeral');
numeral.defaultFormat('0,000');

const backgroundShape = require('../images/shape.svg');

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: 'cover',
    paddingBottom: 200,
    backgroundPosition: '0 400px'
  },
  grid: {
    width: 1000,
    margin: `0 ${theme.spacing.unit * 2}px`,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
    }
  },
  image: {
    maxWidth: '100%',
    alignSelf: 'center'
  },
  centerBox:{
    display:"flex",
    justifyContent:"center"
  },
  descriptionBox:{
    display:"flex",
    justifyContent:"space-between"
  },
  loadingState: {
    opacity: 0.05
  },
  paper: {
    padding: theme.spacing.unit * 3,
    margin: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  rangeLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.unit * 2
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit
  },
  actionButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit,
    width: 152,
    height: 36
  },
  blockCenter: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center'
  },
  block: {
    padding: theme.spacing.unit * 2,
  },
 
 
});

const monthRange = Months;

class Dashboard extends Component {

  state = {
    
  };

 
  render() {
    const { classes } = this.props;
    const { amount, period, start, monthlyPayment,
      monthlyInterest, data, loading } = this.state;
    const currentPath = this.props.location.pathname

    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar currentPath={currentPath} />
        <div className={classes.root}>
          <Grid container justify="center" >
            <Grid spacing={24} container className={classes.grid}>
              <Grid item xs={12} display="flex" justifyContent="center" className={classes.centerBox}>
                <img src='https://dummyimage.com/600x400/000/fff.jpg' className={classes.image}/>
              </Grid>
              <Grid item xs={12} className={classes.descriptionBox}>
                <div>
                  <Typography variant="h6" gutterBottom>Dashboard</Typography>
                  <Typography variant="body1">
                    Adjust and play with our sliders.
                  </Typography>
                </div>
                <div>
                  <Button variant="outlined" >
                    <Edit/>
                  </Button>
                </div>
                
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="center" >
                <ProprietarioItem />
              </Grid>
             
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(withStyles(styles)(Dashboard));
