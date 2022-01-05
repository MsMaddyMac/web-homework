import React from 'react'
import { func, string } from 'prop-types'
import { css } from '@emotion/core'

export function Button ({ style, onClick, text }) {
  let color

  switch (style) {
    case 'primary':
      color = '#2196F3'
      break
    case 'success':
      color = '#04AA6D'
      break
    case 'warning':
      color = '#ff9800'
      break
    case 'danger':
      color = '#f44336'
      break
    default:
      color = '#e7e7e7'
  }

  return (
    <button css={css`
      border: 2px solid ${color};
      border-radius: 5px;
      background-color: white;
      color: ${color};
      padding: 14px 28px;
      font-size: 16px;
      cursor: pointer;
      &:hover {
        background-color: ${color};
        color: white;
      }
    `} onClick={onClick}>
      {text}
    </button>
  )
}

Button.propTypes = {
  style: string,
  onClick: func,
  text: string
}
