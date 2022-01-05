import React, { useState } from 'react'
import { func } from 'prop-types'
import { css } from '@emotion/core'
import { useMutation } from '@apollo/client'
import AddTransaction from '../../gql/transactions/addTransaction.gql'
import { UserSelect } from '../../users'
import { MerchantSelect } from '../../merchants'
import { Button } from '../global/Button'

export function AddTxForm ({ handleClose }) {
  const [ addTransaction, { loading, error } ] = useMutation(AddTransaction)

  const [values, setValues] = useState({
    description: '',
    amount: '',
    debit: false,
    credit: true,
    merchant_id: '',
    user_id: ''
  })

  if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    addTransaction({
      variables: {
        user_id: values.user_id,
        description: values.description,
        merchant_id: values.merchant_id,
        debit: false,
        credit: true,
        amount: parseFloat(values.amount)
      },
      refetchQueries: ['GetTransactions']
    })
    handleClose()
  }
  return (
    <form css={formStyle} onSubmit={handleSubmit}>
      <label css={labelStyles}>
       Description
        <input css={inputStyle} name='description' onChange={handleChange} type='text' />
      </label>
      <label>
       Amount
        <input css={inputStyle} name='amount' onChange={handleChange} type='text' />
      </label>
      <UserSelect onChange={handleChange} />
      <MerchantSelect onChange={handleChange} />
      <div css={checkbxDivStyle}>
        <label>
          Debit:
          <input name='debit' onChange={handleChange} type='checkbox' />
        </label>
        <label>
          Credit:
          <input name='credit' onChange={handleChange} type='checkbox' />
        </label>
      </div>
      <Button style='success' text='Submit' />
    </form>
  )
}

AddTxForm.propTypes = {
  handleClose: func
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
`
