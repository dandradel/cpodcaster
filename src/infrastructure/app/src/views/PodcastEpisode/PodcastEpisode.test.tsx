import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, renderWithProviders, screen } from '../../shared/test/test-utils'
import PodcastEpisode from './PodcastEpisode'
import episodeMock from '../../shared/__mocks__/episodes.json'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {
      episode: episodeMock[0],
    },
  }),
}))

jest.mock('../../shared/hooks/usePodcastById', () => ({
  __esModule: true,
  default: () => ({
    podcastCardProps: {
      podcastImage: '1',
      podcastName: 'test',
      podcastAuthor: 'test',
      podcastDescription: 'test',
    },
  }),
}))

describe('PodcastEpisode', () => {
  afterEach(cleanup)

  test('renders PodcastEpisode', () => {
    const container = renderWithProviders(<PodcastEpisode />)
    expect(container).toMatchSnapshot()
  })

  test('renders PodcastEpisode with PodcastCard', () => {
    renderWithProviders(<PodcastEpisode />)
    const podcastCard = screen.getByTestId('podcast-wrapper-testid')
    expect(podcastCard).toBeInTheDocument()
  })

  test('renders PodcastEpisode with Episode', () => {
    renderWithProviders(<PodcastEpisode />)
    const episode = screen.getByTestId('episode-wrapper-testid')
    expect(episode).toBeInTheDocument()
  })
})
