import React from 'react'
import { css } from '@emotion/core'

export function Divider () {
  return (
    <hr css={dividerStyle} />
  )
}

const dividerStyle = css`
  width: 100%;
  color: #e1dfe0;
`
