import React, { useState } from 'react'
import { func, object } from 'prop-types'
import { css } from '@emotion/core'
import { useMutation } from '@apollo/client'
import EditTransaction from '../../gql/transactions/editTransaction.gql'
import { UserSelect } from '../users/UserSelect'
import { MerchantSelect } from '../merchants/MerchantSelect'
import { Button } from '../global/Button'

export function EditTxForm ({ handleClose, transaction }) {
  const [ updateTransaction, { loading, error } ] = useMutation(EditTransaction)
  const [values, setValues] = useState({
    id: transaction.id,
    description: transaction.description,
    amount: transaction.amount,
    debit: transaction.debit,
    credit: transaction.credit,
    merchant_id: transaction.merchant_id,
    user_id: transaction.user_id
  })

  if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleChecked = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.checked
    })
  }

  const handleSubmit = () => {
    updateTransaction({
      variables: {
        id: transaction.id,
        user_id: values.user_id,
        description: values.description,
        merchant_id: values.merchant_id,
        debit: values.debit,
        credit: values.credit,
        amount: parseFloat(values.amount)
      },
      refetchQueries: ['GetTransactions', 'GetTransaction']
    })
    handleClose()
  }
  return (
    <form css={formStyle} onSubmit={handleSubmit}>
      <label css={labelStyles}>
       Description
        <input
          css={inputStyle}
          name='description'
          onChange={handleChange}
          placeholder={transaction.description}
          type='text'
        />
      </label>
      <label>
       Amount
        <input
          css={inputStyle}
          name='amount'
          onChange={handleChange}
          placeholder={transaction.amount}
          type='text'
        />
      </label>
      <UserSelect onChange={handleChange} />
      <MerchantSelect onChange={handleChange} />
      <div css={checkbxDivStyle}>
        <label>
          Debit:
          <input name='debit' onChange={handleChecked} type='checkbox' />
        </label>
        <label>
          Credit:
          <input name='credit' onChange={handleChecked} type='checkbox' />
        </label>
      </div>
      <Button style='success' text='Submit' />
    </form>
  )
}

EditTxForm.propTypes = {
  handleClose: func,
  transaction: object
}

const formStyle = css`
  display: flex;
  flex-direction: column;
  padding: 6px;
`

const labelStyles = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const inputStyle = css`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`
const checkbxDivStyle = css`
  display: flex;
  justify-content: space-around;
  margin-top: 5px;
  margin-bottom: 7px;
`
