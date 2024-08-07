import { Box } from '@mui/material'
import React, { ReactElement } from 'react'
import Episodes from '../../components/Episodes/Episodes'
import Error from '../../components/Error/Error'
import PodcastCard from '../../components/PodcastCard/PodcastCard'
import '../../components/PodcastCover/PodcastCover.styles.css'
import useError from '../../shared/hooks/useError'
import { podcastDetailBoxStyles } from './styles'
import usePodcastById from '../../shared/hooks/usePodcastById'
import Skeleton from '../../components/Skeleton/Skeleton'

function PodcastDetail(): ReactElement {
  const { podcastCardProps, episodes } = usePodcastById()
  const { error } = useError()

  if (error) {
    return <Error />
  }

  if (!podcastCardProps || !episodes) {
    return <Skeleton />
  }

  return (
    <>
      <Box sx={podcastDetailBoxStyles}>
        <PodcastCard podcastCard={podcastCardProps} />
        <Episodes episodes={episodes} />
      </Box>
    </>
  )
}

export default PodcastDetail
