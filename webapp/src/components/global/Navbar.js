import React from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'

export function Navbar () {
  return (
    <nav css={navStyle}>
      <Link css={linkStyle} to='/'>
         Home
      </Link>

      <Link css={linkStyle} to='/transactions'>
         Transactions
      </Link>

      <Link css={linkStyle} to='/users'>
         Users
      </Link>

      <Link css={linkStyle} to='/merchants'>
        Merchants
      </Link>

    </nav>
  )
}

const navStyle = css`
  width: 100%;
  background-color: dodgerblue;
  overflow: auto;
`

const linkStyle = css`
  float: left;
  text-align: center;
  padding: 12px;
  color: white;
  text-decoration: none;
  font-size: 17px;
  &:hover {
    background-color: #1a69b7;
  }
`
