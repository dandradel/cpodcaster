import { SxProps } from '@mui/material'

export const podcastCardBoxStyles: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '100%',
  flex: 0.5,
  maxHeight: 500,
  maxWidth: 300,
  bgcolor: 'white',
  boxShadow: 3,
  borderRadius: 1,
}
export const podcastImageBoxStyles: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  my: 2,
}
export const podcastCardTextBoxStyles: SxProps = {
  display: 'block',
  alignItems: 'left',
  justifyContent: 'left',
  p: 2,
  m: 1,
}
export const podcastDescriptionTextStyles: SxProps = {
  display: 'block',
  alignItems: 'left',
  justifyContent: 'left',
  p: 2,
}
export const podcastTextStyles: SxProps = { cursor: 'pointer' }
