import React, { useState } from 'react'
import { string } from 'prop-types'
import { css } from '@emotion/core'
import { Card } from './Card'
import { Button } from './Button'
import { convertToRoman } from '../../helpers/format'

export function DashDisplay ({ userCount, merchCount, txCount }) {
  const [unconvert, setUnconvert] = useState(false)
  const [convertedNums, setConvertedNums] = useState({
    convertedUserCount: userCount,
    convertedMerchCount: merchCount,
    convertedTxCount: txCount
  })

  const convertToRomanNums = () => {
    setUnconvert(!unconvert)
    if (!unconvert) {
      setConvertedNums({
        convertedUserCount: convertToRoman(userCount),
        convertedMerchCount: convertToRoman(merchCount),
        convertedTxCount: convertToRoman(txCount)
      })
    } else {
      setConvertedNums({
        convertedUserCount: userCount,
        convertedMerchCount: merchCount,
        convertedTxCount: txCount
      })
    }
  }

  return (
    <div css={dashDisplayStyle}>
      <div css={cardBoxStyle}>
        <Card>
          <h3>Users</h3>
          <p>{convertedNums.convertedUserCount}</p>
        </Card>
        <Card>
          <h3>Merchants</h3>
          <p>{convertedNums.convertedMerchCount}</p>
        </Card>
        <Card>
          <h3>Transactions</h3>
          <p>{convertedNums.convertedTxCount}</p>
        </Card>
      </div>
      <div css={btnBoxStyle}>
        <Button onClick={convertToRomanNums} style='warning' text={unconvert ? 'Unconvert' : 'Convert to Roman'} />
      </div>
    </div>
  )
}

DashDisplay.propTypes = {
  userCount: string,
  merchCount: string,
  txCount: string
}

const cardBoxStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  p {
    text-align: center;
  }
`
const dashDisplayStyle = css`
  display: flex;
  flex-direction: column;
`

const btnBoxStyle = css`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`
