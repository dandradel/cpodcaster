/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, renderWithProviders, screen } from '../../shared/test/test-utils'
import userEvent from '@testing-library/user-event'
import Searcher from './Searcher'
import podcastsMock from '../../shared/__mocks__/podcasts.json'

describe('Searcher', () => {
  afterEach(cleanup)

  const setup = () => {
    const chipNumber = podcastsMock.length
    const utils = renderWithProviders(<Searcher chipLabel={chipNumber} />)
    const searcherInputEle = screen.getByLabelText('Filter podcasts...')
    const searcherChipEle = screen.getByText(chipNumber)
    return {
      searcherInputEle,
      searcherChipEle,
      chipNumber,
      userEvent,
      ...utils,
    }
  }

  test('renders Searcher', () => {
    const { container } = setup()
    expect(container).toMatchSnapshot()
  })
  test('renders Searcher with TextField and Chip components', () => {
    const { searcherInputEle, searcherChipEle } = setup()
    expect(searcherInputEle).toBeInTheDocument()
    expect(searcherChipEle).toBeInTheDocument()
  })
  test('renders Searcher and type in TextField', () => {
    const { searcherInputEle, userEvent } = setup()
    expect(searcherInputEle).toHaveValue('')
    userEvent.type(searcherInputEle, 'test')
    expect(searcherInputEle).toHaveValue('test')
  })
  test('renders Searcher and type in TextField and check Chip', () => {
    const { searcherInputEle, searcherChipEle, chipNumber, userEvent } = setup()
    expect(searcherInputEle).toHaveValue('')
    expect(searcherChipEle).toHaveTextContent(chipNumber as any)
    userEvent.type(searcherInputEle, 'test')
    expect(searcherInputEle).toHaveValue('test')
    expect(searcherChipEle).toHaveTextContent(chipNumber as any)
  })
})
