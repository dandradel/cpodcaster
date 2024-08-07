import { SxProps } from '@mui/material'

export const podcastBoxStyles: SxProps = {
  minHeight: 150,
  minWidth: 250,
  maxWidth: 250,
  bgcolor: 'white ',
  '&:hover': {
    opacity: [0.9, 0.8, 0.7],
  },
  boxShadow: 3,
  p: 2,
  textAlign: 'center',
  zIndex: 2,
  position: 'relative',
  cursor: 'pointer',
}

export const podcastCoverBoxStyles: SxProps = {
  top: 70,
  position: 'relative',
}
