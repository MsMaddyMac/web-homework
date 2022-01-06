import React from 'react'
import { string } from 'prop-types'
import { Button } from '../global/Button'
import { useMutation } from '@apollo/client'
import DeleteTransaction from '../../gql/transactions/deleteTransaction.gql'
import { useHistory } from 'react-router-dom'

export function DeleteTxBtn ({ id }) {
  const history = useHistory()
  const [ deleteTransaction, { loading, error } ] = useMutation(DeleteTransaction)

  const handleDelete = () => {
    deleteTransaction({
      variables: {
        id
      },
      refetchQueries: ['GetTransactions']
    })
    history.push('/transactions')
  }

  if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`

  return (
    <Button onClick={() => handleDelete()} style={'danger'} text={'Delete'} />
  )
}

DeleteTxBtn.propTypes = {
  id: string
}
