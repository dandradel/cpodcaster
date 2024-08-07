/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from 'react'
import { Box, Divider, Typography } from '@mui/material'
import './PodcastCard.styles.css'
import {
  podcastCardBoxStyles,
  podcastImageBoxStyles,
  podcastCardTextBoxStyles,
  podcastDescriptionTextStyles,
  podcastTextStyles,
} from './utils'
import { useNavigate } from 'react-router-dom'

export interface PodcastCardProps {
  podcastImage?: string
  podcastName?: string
  podcastAuthor?: string
  podcastDescription?: string
  podcastId?: string | number
}

export interface PodcastCardArgs {
  podcastCard: PodcastCardProps
}

function PodcastCard({ podcastCard }: PodcastCardArgs): ReactElement {
  const navigate = useNavigate()

  const {
    podcastImage = '',
    podcastName = '',
    podcastAuthor = '',
    podcastDescription = '',
    podcastId = '',
  } = podcastCard

  const handlePodcastCardRedirectionClick = (): void => {
    navigate(`/podcast/${podcastId}`)
  }

  return (
    <Box sx={podcastCardBoxStyles} data-testid='podcast-wrapper-testid'>
      <Box sx={podcastImageBoxStyles}>
        <img
          className='podcastCard__image'
          src={podcastImage}
          onClick={handlePodcastCardRedirectionClick}
          data-testid='podcast-image-testid'
        />
      </Box>
      <Divider variant='middle' />
      <Box sx={podcastCardTextBoxStyles}>
        <Typography
          variant='subtitle1'
          fontWeight='bold'
          gutterBottom
          data-testid='podcast-name-testid'
          onClick={handlePodcastCardRedirectionClick}
          sx={podcastTextStyles}
        >
          {podcastName}
        </Typography>
        <Typography
          variant='subtitle2'
          fontStyle='italic'
          gutterBottom
          data-testid='podcast-author-testid'
          onClick={handlePodcastCardRedirectionClick}
          sx={podcastTextStyles}
        >
          by {podcastAuthor}
        </Typography>
      </Box>
      <Divider variant='middle' />
      <Box sx={podcastDescriptionTextStyles}>
        <Typography
          variant='subtitle2'
          fontWeight='bold'
          gutterBottom
          data-testid='podcast-description-testid'
        >
          Description:
        </Typography>
        <Typography
          variant='subtitle2'
          fontStyle='italic'
          gutterBottom
          data-testid='podcast-description1-testid'
        >
          {podcastDescription}
        </Typography>
      </Box>
    </Box>
  )
}

export default PodcastCard
