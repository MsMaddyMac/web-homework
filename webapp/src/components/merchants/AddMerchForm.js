import React, { useState } from 'react'
import { Button } from '../global/Button'
import { func } from 'prop-types'
import { useMutation } from '@apollo/client'
import AddMerchant from '../../gql/merchants/addMerchant.gql'

export function AddMerchForm ({ handleClose }) {
  const [ addMerchant, { loading, error } ] = useMutation(AddMerchant)

  const [values, setValues] = useState({
    name: ''
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
    addMerchant({
      variables: {
        name: values.name
      },
      refetchQueries: ['GetMerchants']
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

AddMerchForm.propTypes = {
  handleClose: func
}
