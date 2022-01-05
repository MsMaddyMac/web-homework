import React from 'react'
import { string } from 'prop-types'
import { css } from '@emotion/core'

export function Card ({ name, src }) {
  return (
    <div css={cardStyle}>
      {!!src && <img alt='Avatar' css={imgStyle} src={src} />}
      <div css={containerStyle}>
        <h4><b>{name}</b></h4>
      </div>
    </div>
  )
}

Card.propTypes = {
  name: string,
  src: string
}

const cardStyle = css`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 200px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`
const containerStyle = css`
  padding: 2px 16px;
  width: 100%;
`

const imgStyle = css`
  width: 100%;
  border-radius: 5px 5px 0 0;
`
