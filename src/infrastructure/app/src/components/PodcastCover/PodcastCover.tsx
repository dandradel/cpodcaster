import React, { useCallback } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { podcastBoxStyles, podcastCoverBoxStyles } from './styles'
import './PodcastCover.styles.css'
import { Podcast } from '../../../../../domain/models/Podcast'

interface PodcastCoverProps {
  podcast: Podcast
}

function PodcastCover({ podcast }: PodcastCoverProps): React.ReactElement {
  const navigate: NavigateFunction = useNavigate()

  const { name, author, image, id } = podcast

  const handlePodcastClick = useCallback((): void => {
    navigate(`/podcast/${id}`)
  }, [navigate, id])

  return (
    <Box sx={podcastBoxStyles} data-testid='podcastCover-wrapper-testid'>
      <Box onClick={handlePodcastClick} data-testid='podcastCover-container-testid'>
        <img className='podcast__image' src={image} data-testid='podcast-image-testid' />
        <Box sx={podcastCoverBoxStyles}>
          <Typography variant='h6' gutterBottom data-testid='podcast-name-testid'>
            {name}
          </Typography>
          <Typography
            variant='subtitle1'
            gutterBottom
            color='gray'
            data-testid='podcast-author-testid'
          >
            {author}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default PodcastCover
