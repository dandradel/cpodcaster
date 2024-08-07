import React from 'react'
import '@testing-library/jest-dom'
import { renderWithProviders } from '../shared/test/test-utils'
import AppLayout from './AppLayout'

describe('AppLayout', () => {
  test('renders AppLayout', () => {
    const container = renderWithProviders(<AppLayout />)
    expect(container).toMatchSnapshot()
  })
})
