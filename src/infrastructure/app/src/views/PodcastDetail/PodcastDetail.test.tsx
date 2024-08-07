import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, renderWithProviders, screen } from '../../shared/test/test-utils'
import PodcastDetail from './PodcastDetail'
import episodeMock from '../../shared/__mocks__/episodes.json'

jest.mock('../../shared/hooks/usePodcastById', () => ({
  __esModule: true,
  default: () => ({
    podcastCardProps: {
      podcastImage: '1',
      podcastName: 'test',
      podcastAuthor: 'test',
      podcastDescription: 'test',
    },
    episodes: episodeMock,
  }),
}))

describe('PodcastDetail', () => {
  afterEach(cleanup)

  test('renders PodcastDetail', () => {
    const container = renderWithProviders(<PodcastDetail />)
    expect(container).toMatchSnapshot()
  })

  test('renders PodcastDetail with PodcastCard', () => {
    renderWithProviders(<PodcastDetail />)
    const podcastCard = screen.getByTestId('podcast-wrapper-testid')
    expect(podcastCard).toBeInTheDocument()
  })

  test('renders PodcastDetail with Episodes', () => {
    renderWithProviders(<PodcastDetail />)
    const episodes = screen.getByTestId('episodes-wrapper-testid')
    expect(episodes).toBeInTheDocument()
  })
})
