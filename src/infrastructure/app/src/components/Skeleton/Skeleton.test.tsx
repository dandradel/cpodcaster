import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, renderWithProviders, screen } from '../../shared/test/test-utils'
import Skeleton from './Skeleton'

describe('Skeleton', () => {
  afterEach(cleanup)
  test('renders Skeleton', () => {
    const container = renderWithProviders(<Skeleton />)
    expect(container).toMatchSnapshot()
  })
  test('renders Skeleton with data-testid', () => {
    renderWithProviders(<Skeleton />)
    expect(screen.getByTestId('skeleton-wrapper')).toBeInTheDocument()
  })
})
