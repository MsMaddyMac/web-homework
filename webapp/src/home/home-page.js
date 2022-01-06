import React from 'react'
import { PageLayout } from '../components/global/PageLayout'
import { useQuery } from '@apollo/client'
import GetTransactions from '../gql/transactions/transactions.gql'
import GetUsers from '../gql/users/users.gql'
import GetMerchants from '../gql/merchants/merchants.gql'
import { Error } from '../components/global/Error'
import { Spinner } from '../components/global/Spinner'
import { DashDisplay } from '../components/global/DashDisplay'

export function Home () {
  const { data: { users } = {}, loading: usersLoading, error: usersError } = useQuery(GetUsers)
  const { data: { merchants } = {}, loading: merchantsLoading, error: merchantsError } = useQuery(GetMerchants)
  const { data: { transactions } = {}, loading: transactionsLoading, error: transactionsError } = useQuery(GetTransactions)

  if (usersLoading || merchantsLoading || transactionsLoading) {
    return (
      <Spinner />
    )
  }

  if (usersError || merchantsError || transactionsError) {
    return (
      <Error />
    )
  }

  return (
    <PageLayout title='Dashboard'>
      <DashDisplay
        merchCount={merchants?.length}
        txCount={transactions?.length}
        userCount={users?.length}
      />
    </PageLayout>
  )
}
