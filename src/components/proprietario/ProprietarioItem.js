import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import DescriptionIcon from '@material-ui/icons/Description';
import ButtonBar from '../buttons/ButtonBar';

const styles = theme => ({
  paper: {
    display:'flex',
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  avatar: {
    margin: 10,
    backgroundColor: theme.palette.grey['200'],
    color: theme.palette.text.primary,
  },
  avatarContainer: {
    display: 'flex',
    
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginBottom: theme.spacing.unit * 4
    }
  },
 

})

class ProprietarioItem extends Component {

  render() {
    const { classes } = this.props;

    return (
      
        <Paper className={classes.paper}>
          
          <div className={classes.avatarContainer}>
            <Avatar className={classes.avatar}>
              <DescriptionIcon />
            </Avatar>
          </div>
          <div className={classes.avatarContainer}>
            <Avatar className={classes.avatar}>
              <DescriptionIcon />
            </Avatar>
          </div>
            
          
        </Paper>
      
    )
  }
}

export default withStyles(styles)(ProprietarioItem);
