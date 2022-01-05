import React from 'react'
import { useQuery } from '@apollo/client'
import GetTransactions from '../gql/transactions/transactions.gql'
import { AddTxBtn } from '../components/transactions/AddTxBtn'
import { TxTable } from '../components/transactions/TxTable'
import { Error } from '../components/global/Error'
import { Spinner } from '../components/global/Spinner'
import { PageLayout } from '../components/global/PageLayout'
import { css } from '@emotion/core'

export function Tx () {
  const { loading, error, data = {} } = useQuery(GetTransactions)

  if (loading) {
    return (
      <Spinner />
    )
  }

  if (error) {
    return (
      <Error />
    )
  }
  return (
    <PageLayout pageBtn={<AddTxBtn />} title={'Transactions'} >
      <div css={containerStyle}>
        <TxTable data={data.transactions} />
      </div>
    </PageLayout>
  )
}

const containerStyle = css`
  display: flex;
  justify-content: center;
`
