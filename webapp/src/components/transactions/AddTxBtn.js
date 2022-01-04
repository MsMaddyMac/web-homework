import React, { useState } from 'react'
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
      <button onClick={handleClickOpen}>
        Add Transaction
      </button>
      <Modal handleClose={handleClose} show={show}>
        <AddTxForm handleClose={handleClose} />
      </Modal>
    </div>
  )
}
