import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import GetMerchant from '../gql/merchants/merchant.gql'
import { Spinner } from '../components/global/Spinner'
import { Error } from '../components/global/Error'
import placeholder from '../public/business-placeholder.png'
import { PageLayout } from '../components/global/PageLayout'
import { EditMerchBtn } from '../components/merchants/EditMerchBtn'
import { css } from '@emotion/core'
export function MerchantDetails () {
  const { id } = useParams()
  const { loading, error, data: { merchant } = {} } = useQuery(GetMerchant,
    {
      variables: { id }
    }
  )

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
    <PageLayout pageBtn={<EditMerchBtn merchant={merchant} />} title={`${merchant.name} ` + 'Details Page'}>
      <div css={imgContainer}>
        <img alt='building' src={placeholder} />
      </div>
    </PageLayout>
  )
}

const imgContainer = css`
  display: flex;
  justify-content: center;
`
