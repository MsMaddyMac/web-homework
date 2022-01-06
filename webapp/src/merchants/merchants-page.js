import React from 'react'
import { useQuery } from '@apollo/client'
import GetMerchants from '../gql/merchants/merchants.gql'
import { Error } from '../components/global/Error'
import { Spinner } from '../components/global/Spinner'
import { PageLayout } from '../components/global/PageLayout'
import { Card } from '../components/global/Card'
import placeholder from '../public/business-placeholder.png'
import { css } from '@emotion/core'

export function Merchants () {
  const { loading, error, data = {} } = useQuery(GetMerchants)

  if (loading) {
    return (
      <Spinner />
    )
  }

  if (error) {
    return (
      <Error />
    )
  }
  return (
    <PageLayout title='Merchants'>
      <div css={containerStyle}>
        {data.merchants.map(merchant => <Card key={merchant.id} name={merchant.name} src={placeholder} />) }
      </div>
    </PageLayout>
  )
}

const containerStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
