import React, { ReactElement } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import PodcasterHome from './views/PodcasterHome/PodcasterHome'
import PodcastDetail from './views/PodcastDetail/PodcastDetail'
import PodcastEpisode from './views/PodcastEpisode/PodcastEpisode'

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<PodcasterHome />} />
          <Route path='/podcast/:podcastId' element={<PodcastDetail />} />
          <Route path='/podcast/:podcastId/episode/:episodeId' element={<PodcastEpisode />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
