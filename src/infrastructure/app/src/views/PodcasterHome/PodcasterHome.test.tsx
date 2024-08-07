import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, renderWithProviders, screen } from '../../shared/test/test-utils'
import PodcasterHome from './PodcasterHome'
import errorMock from '../../shared/__mocks__/error.json'

describe('PodcasterHome', () => {
  afterEach(cleanup)
  test('renders PodcasterHome', () => {
    const container = renderWithProviders(<PodcasterHome />)
    expect(container).toMatchSnapshot()
  })
  test('renders PodcasterHome with Searcher', () => {
    renderWithProviders(<PodcasterHome />)
    const searcher = screen.getByTestId('searcher-wrapper-testid')
    expect(searcher).toBeInTheDocument()
  })
  test('renders PodcasterHome with Podcasts', () => {
    renderWithProviders(<PodcasterHome />)
    const podcasts = screen.getByTestId('podcasts-wrapper-testid')
    expect(podcasts).toBeInTheDocument()
  })
  test('renders PodcasterHome with Error', () => {
    renderWithProviders(<PodcasterHome />, {
      preloadedState: {
        error: errorMock,
        podcasts: { podcasts: null, podcastCard: null },
        episodes: { episodes: null },
      },
    })
    const error = screen.getByText(
      'Oops something went wrong, try reloading the page again please :)',
    )
    expect(error).toBeInTheDocument()
  })
})
