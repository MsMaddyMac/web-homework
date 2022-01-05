import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './home'
import { Tx } from './transactions'
import { Merchants } from './merchants'
import { Users } from './users'
import { AppLayout } from './components/global/AppLayout'

function AppRouter () {
  return (
    <Router>
      <AppLayout>
        <Route component={Home} exact path='/' />
        <Route component={Tx} path='/transactions' />
        <Route component={Users} path='/users' />
        <Route component={Merchants} path='/merchants' />
      </AppLayout>
    </Router>
  )
}

export default AppRouter
