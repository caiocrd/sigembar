import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Wizard from './components/Wizard'
import Cards from './components/Cards'
import Main from './components/Main'
import Signin from './components/Signin'
import Embarcacoes from './components/Embarcacoes'
import Embarcacao from './components/Embarcacao'
import ScrollToTop from './components/ScrollTop'

export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route path="/embarcacao/:id" component={Embarcacao} />
          <Route exact path='/' component={ Embarcacoes } />
          <Route exact path='/embarcacoes' component={ Embarcacoes } />
          <Route exact path='/dashboard' component={ Dashboard } />
          <Route exact path='/signin' component={ Signin } />
          <Route exact path='/wizard' component={ Wizard } />
          <Route exact path='/cards' component={ Cards } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )