import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, renderWithProviders, screen } from '../../shared/test/test-utils'
import Error from './Error'

describe('Error', () => {
  afterEach(cleanup)

  test('renders Error', () => {
    const container = renderWithProviders(<Error message='test error' />)
    expect(container).toMatchSnapshot()
  })
  test('renders Error with text', () => {
    renderWithProviders(<Error message='test error' />)
    const errorText = screen.getByTestId('error-wrapper-testid')
    expect(errorText).toHaveTextContent('test error')
  })
})
