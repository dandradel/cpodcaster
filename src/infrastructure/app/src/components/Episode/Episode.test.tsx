import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, renderWithProviders, screen } from '../../shared/test/test-utils'
import Episode from './Episode'
import episodeMock from '../../shared/__mocks__/episodes.json'

describe('Episode', () => {
  const episode = episodeMock[0]
  afterEach(cleanup)

  test('renders Episode', () => {
    const container = renderWithProviders(<Episode episode={episode} />)
    expect(container).toMatchSnapshot()
  })

  test('renders Episode with name', () => {
    renderWithProviders(<Episode episode={episode} />)
    const episodeName = screen.getByTestId('episode-name-testid')
    expect(episodeName).toBeInTheDocument()
  })

  test('renders Episode with description', () => {
    renderWithProviders(<Episode episode={episode} />)
    const episodeDescription = screen.getByTestId('episode-description-testid')
    expect(episodeDescription).toBeInTheDocument()
  })

  test('renders Episode with audio', () => {
    renderWithProviders(<Episode episode={episode} />)
    const episodeAudio = screen.getByTestId('audio-podcast-testid')
    expect(episodeAudio).toBeInTheDocument()
  })
})
