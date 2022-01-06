import React from 'react'
import { any, string } from 'prop-types'
import { css } from '@emotion/core'

export function Card ({ children, size, name, src }) {
  let width

  switch (size) {
    case 'sm':
      width = '200px'
      break
    case 'm':
      width = '400px'
      break
    case 'l':
      width = '600px'
      break
    case 'xl':
      width = '800px'
      break
    default:
      width = '200px'
  }

  return (
    <div css={css`
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      border-radius: 5px;
      width: ${width};
      &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      }
    `}
    >
      {!!src && <img alt='Avatar' css={imgStyle} src={src} />}
      <div css={containerStyle}>
        <p>{name}</p>
        {children}
      </div>
    </div>
  )
}

Card.propTypes = {
  name: string,
  src: string,
  size: string,
  children: any
}

const containerStyle = css`
  padding: 2px 16px;
  width: 100%;
`

const imgStyle = css`
  width: 100%;
  border-radius: 5px 5px 0 0;
`
