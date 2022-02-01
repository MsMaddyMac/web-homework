import React, { useState } from 'react'
import { Button } from '../global/Button'
import { Modal } from '../global/Modal'
import { AddMerchForm } from './AddMerchForm'
import { string } from 'prop-types'

export function AddMerchBtn ({ btnText, modalTitle }) {
  const [show, setShow] = useState(false)

  const handleClickOpen = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  return (
    <div>
      <Button onClick={handleClickOpen} style={'primary'} text={btnText} />
      <Modal handleClose={handleClose} show={show} title={modalTitle}>
        <AddMerchForm handleClose={handleClose} />
      </Modal>
    </div>
  )
}

AddMerchBtn.propTypes = {
  btnText: string,
  modalTitle: string
}
