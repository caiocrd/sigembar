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
import ProprietarioItem from './embarcacao/ProprietarioItem';
import SituacaoItem from './embarcacao/SituacaoItem';
import Movimentacoes from './embarcacao/Movimentacoes';
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
  itemGrid:{
     margin: `${theme.spacing.unit}px 0`,
  },
  image: {
    maxWidth: '100%',
    alignSelf: 'center',
    padding:'20px 0 20px 0',
  },
  centerBox:{
    display:"flex",
    justifyContent:"center"
  },
  descriptionBox:{
    display:"flex",
    justifyContent:"space-between"
  },
  
  
 
});

const monthRange = Months;

class Embarcacao extends Component {

 
  constructor(props){
    super(props);
    
    this.state = {embarcacao:'',proprietario:'', movimentacoes:[]
    
    };
  }

   componentDidMount(){
      fetch(`http://localhost:3000/embarcacao/${this.props.match.params.id}`).then((response)=>{
        return response.json();
      }).then(embarcacao => {
        console.log(embarcacao)
        this.setState({embarcacao})
        this.setState({proprietario:embarcacao.proprietario})
        this.setState({movimentacoes:embarcacao.movimentacoes})
      })
    }
 
  render() {
    const { classes } = this.props;
    const { amount, period, start, monthlyPayment,
      monthlyInterest, data, loading } = this.state;
    const currentPath = this.props.location.pathname

    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar voltar="true" currentPath={currentPath} titulo={this.state.embarcacao.nome}/>
        <div className={classes.root}>
          <Grid container justify="center" >
            <Grid spacing={24} container className={classes.grid}>
              <Grid item xs={12} display="flex" justifyContent="center" className={classes.centerBox}>
                <img src={this.state.embarcacao.imagem} className={classes.image}/>
              </Grid>
              <Grid item xs={12} className={classes.descriptionBox}>
                <div>
                  <Typography variant="h6" gutterBottom>{this.state.embarcacao.nome}</Typography>
                  <Typography variant="body1">
                    {this.state.embarcacao.descricao}
                  </Typography>
                </div>
                <div>
                  <Button variant="outlined" >
                    <Edit/>
                  </Button>
                </div>
                
              </Grid>
              <Grid item xs={12}  className={classes.itemGrid}>
                <ProprietarioItem nome={this.state.proprietario.nome} id={this.state.proprietario.id} />
              </Grid>

              <Grid item xs={12} className={classes.itemGrid}>
                <SituacaoItem />
              </Grid>

              <Grid item xs={12} className={classes.itemGrid}>
                <Movimentacoes movimentacoes={this.state.movimentacoes}/>
              </Grid>
             
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(withStyles(styles)(Embarcacao));
