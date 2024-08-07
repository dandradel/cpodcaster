import React from 'react'
import '@testing-library/jest-dom'
import { getNodeText, renderWithProviders, screen } from '../../shared/test/test-utils'
import PodcastCover from './PodcastCover'
import podcastMock from '../../shared/__mocks__/podcasts.json'

describe('PodcastCover', () => {
  test('renders PodcastCover', () => {
    const container = renderWithProviders(<PodcastCover podcast={podcastMock[0]} />)
    expect(container).toMatchSnapshot()
  })
  test('renders PodcastCover with name', () => {
    renderWithProviders(<PodcastCover podcast={podcastMock[0]} />)
    const podcastsNames = screen.getAllByTestId('podcast-name-testid').map(getNodeText)
    expect(podcastsNames).toContain(podcastMock[0].name)
  })
  test('renders PodcastCover with author', () => {
    renderWithProviders(<PodcastCover podcast={podcastMock[0]} />)
    const podcastsAuthor = screen.getAllByTestId('podcast-author-testid').map(getNodeText)
    expect(podcastsAuthor).toContain(podcastMock[0].author)
  })
})
