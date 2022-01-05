import React from 'react'
import { arrayOf, string, bool, number, shape } from 'prop-types'
import { css } from '@emotion/core'

const styles = css`
 .header {
   font-weight: bold;
   th {
    padding: 12px 8px;
    border: 1px solid #ddd;
    text-align: left;
   },
 },
  table {
    border-collapse: collapse;
    width: 85%
  },

 td {
  border: 1px solid #ddd;
  padding: 8px;
 },

 tr {
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
}

`

const makeDataTestId = (transactionId, fieldName) => `transaction-${transactionId}-${fieldName}`

const formatBoolToTxt = (boolean) => boolean === true ? 'True' : 'False'
export function TxTable ({ data }) {
  return (
    <table css={styles}>
      <tbody>
        <tr className='header'>
          <th >ID</th>
          <th >User ID</th>
          <th >Description</th>
          <th >Merchant ID</th>
          <th >Debit</th>
          <th >Credit</th>
          <th >Amount</th>
        </tr>
        {
          data.map(tx => {
            const { id, user_id: userId, description, merchant_id: merchantId, debit, credit, amount } = tx
            return (
              <tr data-testid={`transaction-${id}`} key={`transaction-${id}`}>
                <td data-testid={makeDataTestId(id, 'id')}>{id}</td>
                <td data-testid={makeDataTestId(id, 'userId')}>{userId}</td>
                <td data-testid={makeDataTestId(id, 'description')}>{description}</td>
                <td data-testid={makeDataTestId(id, 'merchant')}>{merchantId}</td>
                <td data-testid={makeDataTestId(id, 'debit')}>{formatBoolToTxt(debit)}</td>
                <td data-testid={makeDataTestId(id, 'credit')}>{formatBoolToTxt(credit)}</td>
                <td data-testid={makeDataTestId(id, 'amount')}>{amount}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>

  )
}

TxTable.propTypes = {
  data: arrayOf(shape({
    id: string,
    user_id: string,
    description: string,
    merchant_id: string,
    debit: bool,
    credit: bool,
    amount: number
  }))
}
