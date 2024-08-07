import React, { ReactElement } from 'react'
import { Box, Divider, Typography } from '@mui/material'
import './Episode.styles.css'
import { audioElementStyles, dividerEpisodeStyle, episodeBoxStyles } from './utils'
import { Episode as EpisodeI } from '../../../../../domain/models/Episode'

export interface EpisodeProps {
  episode: EpisodeI | null
}

function Episode({ episode }: EpisodeProps): ReactElement {
  const { title, description, audioUrl, episodeContentType, episodeFileExtension } =
    episode || ({} as EpisodeI)

  const audioContentType: string =
    episodeContentType && episodeFileExtension
      ? `${episodeContentType}/${episodeFileExtension}`
      : 'audio/mpeg'

  return (
    <Box sx={episodeBoxStyles} data-testid='episode-wrapper-testid'>
      <Typography variant='h5' gutterBottom data-testid='episode-name-testid'>
        {title}
      </Typography>
      <Typography
        variant='subtitle2'
        fontStyle='italic'
        fontWeight='normal'
        gutterBottom
        data-testid='episode-description-testid'
      >
        {description}
      </Typography>
      <Divider sx={dividerEpisodeStyle} />
      <audio controls muted style={audioElementStyles} data-testid='audio-podcast-testid'>
        <source src={audioUrl} type={audioContentType} />
      </audio>
    </Box>
  )
}

export default Episode
