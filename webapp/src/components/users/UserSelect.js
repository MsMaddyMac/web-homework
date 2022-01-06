import React from 'react'
import { func } from 'prop-types'
import { useQuery } from '@apollo/client'
import GetUsers from '../../gql/users/users.gql'
import { Select } from '../global/Select'

export function UserSelect ({ onChange }) {
  const { data: { users } = {} } = useQuery(GetUsers)

  return (
    <Select name='user_id' onChange={onChange} selectLabel='User' selectTitle='Select user'>
      {users?.map(user => <option key={user.id} value={user.id}>{user.firstName} {user.lastName}</option>)}

    </Select>
  )
}

UserSelect.propTypes = {
  onChange: func
}
