import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, renderWithProviders, screen } from '../../shared/test/test-utils'
import PodcastCard, { PodcastCardProps } from './PodcastCard'
import podcastMock from '../../shared/__mocks__/podcasts.json'

describe('PodcastCard', () => {
  afterEach(cleanup)
  const podcastCardProps: PodcastCardProps = {
    podcastImage: podcastMock[0].image,
    podcastName: podcastMock[0].name,
    podcastAuthor: podcastMock[0].author,
    podcastDescription: '',
  }

  test('renders PodcastCard', () => {
    const container = renderWithProviders(<PodcastCard podcastCard={podcastCardProps} />)
    expect(container).toMatchSnapshot()
  })
  test('renders PodcastCard with name', () => {
    renderWithProviders(<PodcastCard podcastCard={podcastCardProps} />)
    const podcastsNames = screen.getByTestId('podcast-name-testid')
    expect(podcastsNames).toHaveTextContent(podcastCardProps.podcastName || '')
  })
  test('renders PodcastCard with author', () => {
    renderWithProviders(<PodcastCard podcastCard={podcastCardProps} />)
    const podcastsAuthor = screen.getByTestId('podcast-author-testid')
    expect(podcastsAuthor).toHaveTextContent(`by ${podcastCardProps.podcastAuthor}`)
  })
  test('renders PodcastCard with description', () => {
    renderWithProviders(<PodcastCard podcastCard={podcastCardProps} />)
    const podcastsDescription = screen.getByTestId('podcast-description-testid')
    expect(podcastsDescription).toHaveTextContent('Description:')
  })
  test('renders PodcastCard with description1', () => {
    renderWithProviders(<PodcastCard podcastCard={podcastCardProps} />)
    const podcastsDescription1 = screen.getByTestId('podcast-description1-testid')
    expect(podcastsDescription1).toHaveTextContent(podcastCardProps.podcastDescription || '')
  })
})
