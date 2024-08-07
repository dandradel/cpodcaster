import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, renderWithProviders, screen } from '../../shared/test/test-utils'
import Episodes from './Episodes'
import episodesMock from '../../shared/__mocks__/episodes.json'

describe('Episodes', () => {
  afterEach(cleanup)

  test('renders Episodes', () => {
    const container = renderWithProviders(<Episodes episodes={episodesMock} />)
    expect(container).toMatchSnapshot()
  })

  test('renders Episodes with episodes number box', () => {
    renderWithProviders(<Episodes episodes={episodesMock} />)
    const episodesNumberBox = screen.getByTestId('episodes-number-testid')
    expect(episodesNumberBox).toBeInTheDocument()
  })

  test('renders Episodes with table of episodes', () => {
    renderWithProviders(<Episodes episodes={episodesMock} />)
    const episodesTable = screen.getByTestId('table-episodes-testid')
    expect(episodesTable).toBeInTheDocument()
  })
})
