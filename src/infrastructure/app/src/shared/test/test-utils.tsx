/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { PropsWithChildren, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { PreloadedState, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import errorSlice from '../../store/reducers/errorSlice'
import podcastsSlice from '../../store/reducers/podcastsSlice'
import { RootState } from '../../store/store'
import podcastsMocks from '../../shared/__mocks__/podcasts.json'
import episodeMocks from '../../shared/__mocks__/episodes.json'
import episodesSlice from '../../store/reducers/episodesSlice'
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: any
  route?: string
}

function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState = {
      podcasts: { podcasts: podcastsMocks },
      episodes: { episodes: episodeMocks },
      error: { error: null },
    } as PreloadedState<RootState>,
    store = configureStore({
      reducer: { podcasts: podcastsSlice, error: errorSlice, episodes: episodesSlice },
      preloadedState,
    }),
    route = '/',
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<any>): JSX.Element {
    return (
      <>
        <BrowserRouter>
          <Provider store={store}>{children}</Provider>
        </BrowserRouter>
      </>
    )
  }
  window.history.pushState({}, 'Test page', route)
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export * from '@testing-library/react'
export { renderWithProviders }
