import React from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'

export function Navbar () {
  return (
    <nav css={navStyle}>
      <ul >
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/transactions'>Transactions</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
        <li>
          <Link to='/merchants'>Merchants</Link>
        </li>
      </ul>
    </nav>
  )
}

const navStyle = css`
  grid-row: 1;

  & > ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
  }
  
  & > ul > li:not(:first-of-type) {
    margin-left: 16px;
  }
`
