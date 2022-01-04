import React from 'react'
import { element } from 'prop-types'
import { css } from '@emotion/core'
import { Navbar } from './Navbar'

export function AppLayout ({ children }) {
  return (
    <div css={layoutStyle}>
      <Navbar />
      <div className='main-content' css={contentStyle}>
        {children}
      </div>
    </div>
  )
}

AppLayout.propTypes = {
  children: element
}

const layoutStyle = css`
    display: grid;
    grid-row-gap: 24px;
    padding: 8px;
`

const contentStyle = css`
  grid-row: 2;
`
