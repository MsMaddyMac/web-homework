import React from 'react'
import { string, element, object } from 'prop-types'
import { css } from '@emotion/core'

export function PageLayout ({ title, pageBtn, children }) {
  return (
    <div css={pageStyle}>
      <div css={pageHeaderStyle}>
        <h1>{title}</h1>
        <div css={btnDivStyle}>{pageBtn}</div>
      </div>
      {children}
    </div>
  )
}

PageLayout.propTypes = {
  title: string,
  pageBtn: element,
  children: object
}

const pageStyle = css`
  padding: 8px;
`

const pageHeaderStyle = css`
  display: flex;
  justify-content: space-between;
`

const btnDivStyle = css`
  display: flex;
  align-items: center;
`
