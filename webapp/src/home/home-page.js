import React, { Fragment } from 'react'

export function Home () {
  return (
    <Fragment>
      {/* make a card a reusable component */}
      <div>TXs Card</div>
      <div>Users Card</div>
      <div>Merchants Card</div>
      {/* make a pie chart reusable component */}
      <div>TX Pie Chart</div>
      <div>User Pie Chart</div>
      <div>Merchants Pie Chart</div>
    </Fragment>
  )
}
