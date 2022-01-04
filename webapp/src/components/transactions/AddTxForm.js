import React, { useState } from 'react'
import { func } from 'prop-types'
import { css } from '@emotion/core'
import { Divider } from '../global/Divider'
import { useMutation } from '@apollo/client'
import AddTransaction from '../../gql/addTransaction.gql'

export function AddTxForm ({ handleClose }) {
  const [ addTransaction, { loading, error } ] = useMutation(AddTransaction)

  const [values, setValues] = useState({
    description: '',
    amount: '',
    debit: false,
    credit: true,
    merchant_id: 'walmart',
    user_id: 'employee4'
  })

  console.log('credit', values.credit)
  console.log('debit', values.debit)

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
        user_id: 'employee5',
        description: values.description,
        merchant_id: 'cvs',
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
      <p>Add Transaction</p>
      <Divider />
      <label css={labelStyles}>
       Description
        <input css={inputStyle} name='description' onChange={handleChange} type='text' />
      </label>
      <label>
       Amount
        <br />
        <input name='amount' onChange={handleChange} type='text' />
      </label>
      <label>
        Debit
        <br />
        <input name='debit' onChange={handleChange} type='checkbox' />
      </label>
      <label>
        Credit
        <br />
        <input name='credit' onChange={handleChange} type='checkbox' />
      </label>
      <button type='submit'>
          Submit
      </button>
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
  padding: 1px;
  width: auto;
`
