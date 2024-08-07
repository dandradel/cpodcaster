import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, renderWithProviders, screen } from '../../shared/test/test-utils'
import Header from './Header'

describe('Header', () => {
  afterEach(cleanup)

  test('renders Header', () => {
    const container = renderWithProviders(<Header />)
    expect(container).toMatchSnapshot()
  })
  test('renders with podcaster string', () => {
    renderWithProviders(<Header />)
    const stringElement = screen.getByText(/Podcaster/i)
    expect(stringElement).toBeInTheDocument()
  })
  test('render with react router link', () => {
    renderWithProviders(<Header />)
    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()
  })
})
