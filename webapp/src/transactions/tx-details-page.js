import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import GetTransaction from '../gql/transactions/transaction.gql'
import { PageLayout } from '../components/global/PageLayout'
import { Spinner } from '../components/global/Spinner'
import { Error } from '../components/global/Error'
import { formatBoolToTxt } from '../helpers/format'
import { Card } from '../components/global/Card'
import { EditTxBtn } from '../components/transactions/EditTxBtn'
import { DeleteTxBtn } from '../components/transactions/DeleteTxBtn'
import { css } from '@emotion/core'

export function TxDetails () {
  const { id } = useParams()
  const { loading, error, data: { transaction } = {} } = useQuery(GetTransaction,
    {
      variables: { id }
    }
  )

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
    <PageLayout title='Transaction Details'>
      <div css={txContainerStyle}>
        <Card size='m'>
          <div css={cardContentStyle}>
            <div>Description: {transaction.description}</div>
            <div>MerchId: {transaction.merchant_id}</div>
            <div>UserId: {transaction.user_id}</div>
            <div>Credit: {formatBoolToTxt(transaction.credit)}</div>
            <div>Debit: {formatBoolToTxt(transaction.debit)}</div>
            <div>Amount: {`$${transaction.amount}`}</div>
            <div css={btnContainerStyle}>
              <EditTxBtn transaction={transaction} />
              <DeleteTxBtn id={id} />
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  )
}

const txContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const cardContentStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`

const btnContainerStyle = css`
  display: flex;
  justify-content: space-between;
`
