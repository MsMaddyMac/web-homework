import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './home'
import { Tx } from './transactions'
import { Users } from './users'
import { Merchants } from './merchants'
import { AppLayout } from './components/global/AppLayout'

function AppRouter () {
  return (
    <Router>
      <AppLayout>
        <Route component={Home} exact path='/' />
        <Route component={Tx} exact path='/transactions' />
        <Route component={Users} exact path='/users' />
        <Route component={Merchants} exact path='/merchants' />
      </AppLayout>
    </Router>
  )
}

export default AppRouter
