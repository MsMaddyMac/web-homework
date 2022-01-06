import React, { useState } from 'react'
import { object } from 'prop-types'
import { Button } from '../global/Button'
import { Modal } from '../global/Modal'
import { EditTxForm } from './EditTxForm'

export function EditTxBtn ({ transaction }) {
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
      <Modal handleClose={handleClose} show={show} title={'Edit Transaction'}>
        <EditTxForm handleClose={handleClose} transaction={transaction} />
      </Modal>
    </div>
  )
}

EditTxBtn.propTypes = {
  transaction: object
}
