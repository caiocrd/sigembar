import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

import ButtonBar from '../buttons/ButtonBar';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
   blockEnd: {
    padding: theme.spacing.unit,
    textAlign: 'end'
  },
})

class EmbarcacaoItem extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
      <CardActionArea to={{ pathname: `embarcacao/${this.props.id}`}} component={Link}>
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.nome}
          </Typography>
          <Typography variant="subtitle1" >
            {this.props.proprietario.nome}
          </Typography>
          <Typography component="p" color="textSecondary">
            {this.props.descricao}
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          style={{height: 0, paddingTop: '56.25%'}}
          image='https://dummyimage.com/600x400/000/fff.jpg'
          title="Contemplative Reptile"
        />
        <div className={classes.blockEnd}>
            <ArrowRightAlt/> 
        </div>
      </CardActionArea>
      
    </Card>
    )
  }
}

export default withStyles(styles)(EmbarcacaoItem);