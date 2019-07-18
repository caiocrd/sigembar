import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';

import ButtonBar from '../buttons/ButtonBar';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import AttachFileIcon from '@material-ui/icons/AttachFile'

const styles = theme => ({
  card: {
    
    
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
   avatar: {
    backgroundColor: theme.palette.grey['200'],
    color: theme.palette.text.primary,
  },
  documento: {
    backgroundColor: theme.palette.grey['200'],
    color: theme.palette.text.primary,
    marginTop: 8
  }

})

class ProprietarioItem extends Component {

  render() {
    const { classes } = this.props;

    return (
      
        /*<Paper className={classes.paper}>
          
          
          <div className={classes.avatarContainer}>
            <Avatar className={classes.avatar}>
              <PersonIcon />
            </Avatar>
          </div>
            
          
        </Paper>*/

        <Card className={classes.card}>
        
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                <ThumbUpIcon />
              </Avatar>
            }
            title="Situação"
            subheader="Situação Normal"
            action={
              <IconButton aria-label="Documento" className={classes.documento}>
                <AttachFileIcon />
              </IconButton>
            }
          />
        </Card>
      
    )
  }
}

export default withStyles(styles)(ProprietarioItem);
