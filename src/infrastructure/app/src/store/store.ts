import { configureStore } from '@reduxjs/toolkit'
import podcastsSlice from './reducers/podcastsSlice'
import errorSlice from './reducers/errorSlice'
import episodesSlice from './reducers/episodesSlice'

export const store = configureStore({
  reducer: { podcasts: podcastsSlice, error: errorSlice, episodes: episodesSlice },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
