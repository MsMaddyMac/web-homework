import React, { useState } from 'react'
import { Button } from '../global/Button'
import { Modal } from '../global/Modal'
import { AddTxForm } from './AddTxForm'

export function AddTxBtn () {
  const [show, setShow] = useState(false)

  const handleClickOpen = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  return (
    <div>
      <Button onClick={handleClickOpen} style={'primary'} text={'Add Transaction'} />
      <Modal handleClose={handleClose} show={show} title={'Add Transaction'}>
        <AddTxForm handleClose={handleClose} />
      </Modal>
    </div>
  )
}
