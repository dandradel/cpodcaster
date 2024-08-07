import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Episode } from '../../../../../domain/models/Episode'

export interface EpisodeState {
  episodes: Episode[] | null
}

const initialState: EpisodeState = {
  episodes: null,
}

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    setEpisodes: (state, action: PayloadAction<Episode[] | null>) => {
      state.episodes = action.payload
    },
  },
})

export const { setEpisodes } = episodesSlice.actions

export default episodesSlice.reducer
