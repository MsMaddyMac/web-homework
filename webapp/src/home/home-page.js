import React from 'react'
import { PageLayout } from '../components/global/PageLayout'
import { Toggle } from '../components/global/Toggle'

export function Home () {
  return (
    <PageLayout title='Dashboard'>
      {/* display toggle for numbers to change to roman numeral */}
      {/* make a pie chart reusable component */}
      <Toggle />
      <div>TX Pie Chart</div>
      <div>User Pie Chart</div>
      <div>Merchants Pie Chart</div>
    </PageLayout>
  )
}
