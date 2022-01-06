import React from 'react'
import { useQuery } from '@apollo/client'
import GetUsers from '../gql/users/users.gql'
import { Error } from '../components/global/Error'
import { Spinner } from '../components/global/Spinner'
import { PageLayout } from '../components/global/PageLayout'
import { Card } from '../components/global/Card'
import avatar from '../public/avatar.png'
import { css } from '@emotion/core'

export function Users () {
  const { loading, error, data = {} } = useQuery(GetUsers)
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
    <PageLayout title='Users'>
      <div css={containerStyle}>
        {data.users.map(user => <Card key={user.id} name={user.firstName + ' ' + user.lastName} src={avatar} />)}
      </div>
    </PageLayout>

  )
}

const containerStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
