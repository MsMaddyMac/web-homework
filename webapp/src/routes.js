import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './home'
import { Txs, TxDetails } from './transactions'
import { Merchants, MerchantDetails } from './merchants'
import { Users } from './users'
import { AppLayout } from './components/global/AppLayout'

function AppRouter () {
  return (
    <Router>
      <AppLayout>
        <Route component={Home} exact path='/' />
        <Route component={Txs} exact path='/transactions' />
        <Route component={TxDetails} path='/transactions/:id' />
        <Route component={Users} path='/users' />
        <Route component={Merchants} exact path='/merchants' />
        <Route component={MerchantDetails} path='/merchants/:id' />
      </AppLayout>
    </Router>
  )
}

export default AppRouter
