import { Box } from '@mui/material'
import React, { ReactElement, useMemo } from 'react'
import PodcastCover from '../PodcastCover/PodcastCover'
import { podcastsBoxStyles } from './styles'
import { Podcast } from '../../../../../domain/models/Podcast'

interface PodcastsProps {
  podcasts: Podcast[] | null
}

function Podcasts({ podcasts }: PodcastsProps): ReactElement | null {
  if (!podcasts || podcasts.length === 0) {
    return null
  }

  const podcastsCover = useMemo((): ReactElement[] | undefined => {
    return podcasts?.map((podcast) => <PodcastCover key={podcast.id} podcast={podcast} />)
  }, [podcasts])

  return (
    <Box sx={podcastsBoxStyles} data-testid='podcasts-wrapper-testid'>
      {podcastsCover}
    </Box>
  )
}

export default Podcasts
