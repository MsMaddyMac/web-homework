import React from 'react'
import { func, bool, string, element } from 'prop-types'
import { css } from '@emotion/core'
import { MdClose } from 'react-icons/md'
export function Modal ({ handleClose, show, title, children }) {
  const showHide = show ? 'block' : 'none'

  return (
    <div css={css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      display: ${showHide};
    `}>
      <section css={modalStyle}>
        <div css={headerStyle}>
          <p css={css`
            font-size: 18px;
            font-weight: bold;
            opacity: 87%;
          `}
          >
            {title}
          </p>
          <button css={closeBtnStyle} onClick={handleClose} type='button'>
            <MdClose />
          </button>
        </div>
        <div css={bodyStyle}>
          {children}
        </div>
      </section>
    </div>
  )
}

Modal.propTypes = {
  handleClose: func,
  show: bool,
  title: string,
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

const headerStyle = css`
  padding: 2px 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`

const closeBtnStyle = css`
  background-color: white;
  border: none;
  &:hover {
    background-color: #f2f2f2;
  }
`

const bodyStyle = css`
  padding: 2px 10px;
  margin-top: 10px;
`
