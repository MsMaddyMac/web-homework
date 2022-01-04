import React, { Fragment } from 'react'
import { useQuery } from '@apollo/client'
import GetTransactions from '../gql/transactions.gql'
import { AddTxBtn } from '../components/transactions/AddTxBtn'
import { TxTable } from '../components/transactions/TxTable'

export function Tx () {
  const { loading, error, data = {} } = useQuery(GetTransactions)

  if (loading) {
    return (
      <Fragment>
        Loading...
      </Fragment>
    )
  }

  if (error) {
    return (
      <Fragment>
        ¯\_(ツ)_/¯
      </Fragment>
    )
  }
  return (
    <>
      <div>Transactions</div>
      <AddTxBtn />
      <TxTable data={data.transactions} />
    </>
  )
}
