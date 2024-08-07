import '@testing-library/jest-dom'
import { FilterPodcastsArgs, filterPodcasts, checkStringInLabel } from './helpers'
import podcasts from '../../shared/__mocks__/podcasts.json'

describe('helpers', () => {
  test('filterPodcasts should return localPodcasts if string is empty', () => {
    const filterPodcastsArgs: FilterPodcastsArgs = {
      stringSearch: '',
      localPodcasts: podcasts,
      dispatch: jest.fn(),
    }
    filterPodcasts(filterPodcastsArgs)
    expect(filterPodcastsArgs.dispatch).toBeCalled()
  })
  test('filterPodcasts should return filteredPodcasts if string is not empty', () => {
    const filterPodcastsArgs: FilterPodcastsArgs = {
      stringSearch: 'test',
      localPodcasts: podcasts,
      dispatch: jest.fn(),
    }
    filterPodcasts(filterPodcastsArgs)
    expect(filterPodcastsArgs.dispatch).toBeCalled()
  })
  test('checkStringInLabel should return true if string is in label', () => {
    const label = 'test'
    const stringSearch = 'test'
    const result = checkStringInLabel({ label, stringSearch })
    expect(result).toBe(true)
  })
  test('checkStringInLabel should return false if string is not in label', () => {
    const label = 'test'
    const stringSearch = 'test2'
    const result = checkStringInLabel({ label, stringSearch })
    expect(result).toBe(false)
  })
})
