import React from 'react'
import { func } from 'prop-types'
import { useQuery } from '@apollo/client'
import GetMerchants from '../../gql/merchants/merchants.gql'
import { Select } from '../global/Select'

export function MerchantSelect ({ onChange }) {
  const { data: { merchants } = {} } = useQuery(GetMerchants)

  return (
    <Select name='merchant_id' onChange={onChange} selectLabel='Merchant' selectTitle='Select merchant'>
      {merchants?.map(merchant => <option key={merchant.id} value={merchant.id}>{merchant.name}</option>)}
    </Select>
  )
}

MerchantSelect.propTypes = {
  onChange: func
}
