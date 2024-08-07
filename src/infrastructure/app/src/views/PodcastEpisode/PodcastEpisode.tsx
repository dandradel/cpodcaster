import { Box } from '@mui/material'
import React, { ReactElement } from 'react'
import { useLocation } from 'react-router-dom'
import Episode from '../../components/Episode/Episode'
import Error from '../../components/Error/Error'
import PodcastCard from '../../components/PodcastCard/PodcastCard'
import '../../components/PodcastCover/PodcastCover.styles.css'
import Skeleton from '../../components/Skeleton/Skeleton'
import useError from '../../shared/hooks/useError'
import usePodcastById from '../../shared/hooks/usePodcastById'
import { podcastDetailBoxStyles } from '../utils'

function PodcastEpisode(): ReactElement {
  const { podcastCardProps } = usePodcastById()
  const { error } = useError()
  const { state: { episode = {} } = { episode: {} } } = useLocation()

  if (!podcastCardProps || !episode) {
    return <Skeleton />
  }

  if (error || !episode) {
    return <Error />
  }

  return (
    <>
      <Box sx={podcastDetailBoxStyles}>
        <PodcastCard podcastCard={podcastCardProps} />
        <Episode episode={episode} />
      </Box>
    </>
  )
}

export default PodcastEpisode
