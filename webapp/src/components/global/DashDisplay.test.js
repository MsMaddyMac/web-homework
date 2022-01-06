import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { DashDisplay } from './DashDisplay'

describe('Dashboard Display', () => {
  it('should show user count of "7", merch count of "5", and tx count of "10"', () => {
    const { getByTestId } = render(<DashDisplay merchCount={5} txCount={10} userCount={7} />)
    const userCountDisplay = getByTestId('user-count-to-roman')
    expect(userCountDisplay.textContent).toBe('7')

    const merchCountDisplay = getByTestId('merch-count-to-roman')
    expect(merchCountDisplay.textContent).toBe('5')

    const txCountDisplay = getByTestId('tx-count-to-roman')
    expect(txCountDisplay.textContent).toBe('10')
  })

  it('should display "Convert to Roman" before click and "Unconvert" after clicked', () => {
    const { getByTestId } = render(<DashDisplay merchCount={5} txCount={10} userCount={7} />)
    const convertBtn = getByTestId('global-btn')
    expect(convertBtn.textContent).toBe('Convert to Roman')
    fireEvent.click(convertBtn)
    expect(convertBtn.textContent).toBe('Unconvert')
  })
})
