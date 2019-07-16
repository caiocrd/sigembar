import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import EmbarcacaoItem from './embarcacao/EmbarcacaoItem';
import Topbar from './Topbar';
import TextField from '@material-ui/core/TextField';
import SectionHeader from './typo/SectionHeader';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
const backgroundShape = require('../images/shape.svg');


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['A500'],
    overflow: 'hidden',
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    
    padding: 20,
    paddingBottom: 200
  },
  grid: {
    width: 1000,
  },
  embarcacao:{
    padding: theme.spacing.unit,
  }
})

class Embarcacoes extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
          pesquisa: '',
          embarcacoes: [],
        };
        
    }

    componentDidMount(){
      fetch("http://localhost:3000/embarcacao").then((response)=>{
        return response.json();
      }).then(embarcacoes => {
        this.setState({embarcacoes})
      })
    }
   
    handleChange = pesquisa => event => {
       this.setState({
          pesquisa: event.target.value
        });
      fetch(`http://localhost:3000/embarcacao?nome_like=${event.target.value}`).then((response)=>{
        return response.json();
      }).then(embarcacoes => {
        console.log(embarcacoes)
        console.log(this)
        this.setState({
          embarcacoes: embarcacoes
        });
      })
      

    };
  render() {


    const { classes } = this.props;
    const currentPath = this.props.location.pathname

    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar currentPath={currentPath} />
        <div className={classes.root}>
          <Grid container justify="center"> 
            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
              <Grid item xs={12}>
                <form className={classes.container} noValidate autoComplete="off">
                  <TextField
                    id="pesquisa"
                    label="Pesquisa"
                    className={classes.textField}
                    fullWidth
                    value={this.state.pesquisa}
                    onChange={this.handleChange('pesquisa')}
                    margin="normal"
                    InputProps={{endAdornment: 
                    <InputAdornment position="end">
                      <IconButton >
                       <SearchIcon /> 
                      </IconButton>
                    </InputAdornment>}}
                  />
                </form>
              </Grid>
              {this.state.embarcacoes.map(embarcacao => (
                <Grid item xs={12} md={4} className={classes.embarcacao}>
                  <EmbarcacaoItem nome={embarcacao.nome} proprietario={embarcacao.proprietario.nome} descricao={embarcacao.descricao}/>
                </Grid>
              ))}
            </Grid>
            
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Embarcacoes);