import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import ButtonBar from '../buttons/ButtonBar';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';

const styles = theme => ({
  card: {
    display:'flex',
    padding: theme.spacing.unit ,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  avatar: {
    backgroundColor: theme.palette.grey['200'],
    color: theme.palette.text.primary,
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
        <CardActionArea to={{ pathname: `proprietario/id`}} component={Link}>
          <CardHeader
            avatar={
              <Avatar aria-label="Proprietario" className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            }
            title="Proprietario"
            subheader={this.props.nome}
          />
        </CardActionArea>
        </Card>
      
    )
  }
}

export default withStyles(styles)(ProprietarioItem);
