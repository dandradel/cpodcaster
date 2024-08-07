import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Podcast } from '../../../../../domain/models/Podcast'
import { PodcastCardProps } from '../../components/PodcastCard/PodcastCard'

export interface PodcastsState {
  podcasts: Podcast[] | null
  podcastCard: PodcastCardProps | null
}

const initialState: PodcastsState = {
  podcasts: null,
  podcastCard: null,
}

export const podcastsSlice = createSlice({
  name: 'podcasts',
  initialState,
  reducers: {
    setPodcasts: (state, action: PayloadAction<Podcast[] | null>) => {
      state.podcasts = action.payload
    },
    setPodcastCard: (state, action: PayloadAction<PodcastCardProps | null>) => {
      state.podcastCard = action.payload
    },
  },
})

export const { setPodcasts, setPodcastCard } = podcastsSlice.actions

export default podcastsSlice.reducer
