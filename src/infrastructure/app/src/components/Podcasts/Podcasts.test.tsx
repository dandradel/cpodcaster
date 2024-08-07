import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, renderWithProviders, screen } from '../../shared/test/test-utils'
import Podcasts from './Podcasts'
import podcastMock from '../../shared/__mocks__/podcasts.json'

describe('Podcasts', () => {
  afterEach(cleanup)
  test('renders Podcasts', () => {
    const container = renderWithProviders(<Podcasts podcasts={podcastMock} />)
    expect(container).toMatchSnapshot()
  })
  test('renders Podcasts with podcasts store', () => {
    renderWithProviders(<Podcasts podcasts={podcastMock} />)
    const podcastsCover = screen.getAllByTestId('podcastCover-wrapper-testid')
    expect(podcastsCover).toHaveLength(podcastMock.length)
  })
})
