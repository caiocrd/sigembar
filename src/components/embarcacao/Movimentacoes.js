import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import { Link } from 'react-router-dom';

import ButtonBar from '../buttons/ButtonBar';

const styles = theme => ({
 
})

class Movimentacoes extends Component {

  render() {
    const { classes } = this.props;

    return (
    <Card className={classes.card}>
      <CardHeader
        
        title="Movimentações"
        
      />
      <Table>
        <TableHead>
            <TableRow>
              <TableCell>Tipo</TableCell>
              <TableCell align="right">Data/Hora</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.movimentacoes.map(movimentacao => (
              <TableRow key={movimentacao.id}>
                <TableCell component="th" scope="row">
                  {movimentacao.tipo}
                </TableCell>
                <TableCell align="right">{movimentacao.data}</TableCell>
              </TableRow>
            ))}
          </TableBody>
      </Table> 
      
    </Card>
    )
  }
}

export default withStyles(styles)(Movimentacoes);