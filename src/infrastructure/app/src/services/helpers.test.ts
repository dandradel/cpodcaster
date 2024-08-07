import '@testing-library/jest-dom'
import podcastsResponseMock from '../shared/__mocks__/podcastsResponse.json'
import podcastResponseMock from '../shared/__mocks__/podcastResponse.json'
import podcastsNoEpisodesMock from '../shared/__mocks__/podcastsNoEpisodes.json'
import podcastsMock from '../shared/__mocks__/podcasts.json'
import { mapToPodcastById, mapToPodcasts } from './helpers'

describe('helpers', () => {
  test('mapToPodcasts should return Podcast array ', () => {
    expect(mapToPodcasts(podcastsResponseMock)).toEqual(podcastsNoEpisodesMock)
  })
  test('mapToPodcastById should return Podcast', () => {
    expect(mapToPodcastById(podcastResponseMock)).toEqual(podcastsMock[0])
  })
})
