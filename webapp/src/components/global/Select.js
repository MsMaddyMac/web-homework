import React from 'react'
import { func, array, string } from 'prop-types'
import { css } from '@emotion/core'

export function Select ({ name, onChange, selectLabel, selectTitle, children }) {
  return (
    <div css={selectContainerStyle}>
      <label>{selectLabel}</label>
      <select css={css`
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        `} name={name} onBlur={onChange}
      >
        <option>{selectTitle}</option>
        {children}
      </select>
    </div>
  )
}

Select.propTypes = {
  name: string,
  onChange: func,
  selectLabel: string,
  selectTitle: string,
  children: array
}

const selectContainerStyle = css`
  display: flex;
  flex-direction: column;
`
