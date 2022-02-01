import React, { useState } from 'react'
import { func, object } from 'prop-types'
import { Button } from '../global/Button'
import { useMutation } from '@apollo/client'
import EditMerchant from '../../gql/merchants/editMerchant.gql'

export function EditMerchForm ({ handleClose, merchant }) {
  const [ updateMerchant, { loading, error } ] = useMutation(EditMerchant)
  const [ values, setValues ] = useState({
    id: merchant.id,
    name: merchant.name
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
    updateMerchant({
      variables: {
        id: merchant.id,
        name: values.name
      },
      refetchQueries: ['GetMerchants', 'GetMerchant']
    })
    handleClose()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input name='name' onChange={handleChange} />
      </label>
      <Button style='success' text='Submit' />
    </form>
  )
}

EditMerchForm.propTypes = {
  handleClose: func,
  merchant: object
}
