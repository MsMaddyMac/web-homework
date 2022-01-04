import React from 'react'
import { func, bool, element } from 'prop-types'
import { css } from '@emotion/core'
export function Modal ({ handleClose, show, children }) {
  const showHide = show ? 'block' : 'none'

  return (
    <div css={css`
      position: fixed;
      top: 0;
      left: 0;
      width:100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      display: ${showHide};
    `}>
      <section css={modalStyle}>
        {children}
        <button onClick={handleClose} type='button'>
          Close
        </button>
      </section>
    </div>
  )
}

Modal.propTypes = {
  handleClose: func,
  show: bool,
  children: element
}

const modalStyle = css`
  position: fixed;
  background: white;
  width: 40%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
