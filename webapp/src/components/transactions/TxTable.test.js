import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import { TxTable } from './TxTable'
import { transactions } from '../../../mocks/transactions-data'

describe('Transactions Table', () => {
  it('should show user "employee4" with amount "150"', () => {
    const { getByTestId } = render(<Router><TxTable data={transactions} /></Router>)
    const userIdCell = getByTestId(`transaction-${transactions[0].id}-userId`)
    expect(userIdCell.textContent).toBe('employee4')

    const amountCell = getByTestId(`transaction-${transactions[0].id}-amount`)
    expect(amountCell.textContent).toBe('150')
  })

  it('should show description "refund" with merchant "walmart"', () => {
    const { getByTestId } = render(<Router><TxTable data={transactions} /></Router>)
    const descriptionCell = getByTestId(`transaction-${transactions[2].id}-description`)
    expect(descriptionCell.textContent).toBe('refund')

    const merchantCell = getByTestId(`transaction-${transactions[2].id}-merchant`)
    expect(merchantCell.textContent).toBe('walmart')
  })
})
