import { Box } from '@mui/material'
import React, { ReactElement } from 'react'
import PodcastCover from '../PodcastCover/PodcastCover'
import { podcastsBoxStyles } from './utils'
import { Podcast } from '../../../../../domain/models/Podcast'

interface PodcastsProps {
  podcasts: Podcast[] | null
}

function Podcasts({ podcasts }: PodcastsProps): ReactElement | null {
  if (!podcasts || podcasts.length === 0) {
    return null
  }

  const getPodcastsCover = (): ReactElement[] | undefined => {
    return podcasts?.map((podcast) => <PodcastCover key={podcast.id} podcast={podcast} />)
  }

  return (
    <Box sx={podcastsBoxStyles} data-testid='podcasts-wrapper-testid'>
      {getPodcastsCover()}
    </Box>
  )
}

export default Podcasts
