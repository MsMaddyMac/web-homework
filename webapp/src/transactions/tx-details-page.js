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
            <div css={infoStyle}><p css={mr}>Description: </p> <p>{transaction.description}</p></div>
            <div css={infoStyle}><p css={mr}>MerchId: </p> <p>{transaction.merchant_id}</p></div>
            <div css={infoStyle}><p css={mr}>UserId: </p> <p>{transaction.user_id}</p></div>
            <div css={infoStyle}><p css={mr}>Credit: </p> <p>{formatBoolToTxt(transaction.credit)}</p></div>
            <div css={infoStyle}><p css={mr}>Debit: </p> <p>{formatBoolToTxt(transaction.debit)}</p></div>
            <div css={infoStyle}><p css={mr}>Amount: </p> <p>{`$${transaction.amount}`}</p></div>
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
  margin-top: 8px;
`

const infoStyle = css`
  display: flex;
  &:nth-of-type(odd) {
    margin-right: 3px;
  }
  p {
    margin-top: 2px;
    margin-bottom: 2px;
  }
`

const mr = css`
  margin-right: 5px;
  font-weight: bold;
`
