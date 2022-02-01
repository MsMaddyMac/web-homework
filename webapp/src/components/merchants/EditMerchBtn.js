import React, { useState } from 'react'
import { object } from 'prop-types'
import { Button } from '../global/Button'
import { Modal } from '../global/Modal'
import { EditMerchForm } from './EditMerchForm'

export function EditMerchBtn ({ merchant }) {
  const [show, setShow] = useState(false)

  const handleClickOpen = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  return (
    <div>
      <Button onClick={handleClickOpen} style={'primary'} text={'Edit'} />
      <Modal handleClose={handleClose} show={show} title='Edit Merchant'>
        <EditMerchForm handleClose={handleClose} merchant={merchant} />
      </Modal>
    </div>
  )
}

EditMerchBtn.propTypes = {
  merchant: object
}
