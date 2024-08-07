import { SxProps } from '@mui/material'

export const episodesBoxStyles: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '100%',
  flex: 1,
}
export const episodeNumberBoxStyles: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  boxShadow: 3,
  minHeight: 30,
  alignItems: 'center',
  justifyContent: 'left',
  p: 1,
}
export const episodesTableStyles: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  boxShadow: 3,
  minHeight: 30,
  alignItems: 'center',
  justifyContent: 'left',
  p: 1,
  my: 3,
}
export const tableCellStyles: SxProps = {
  fontWeight: 'bold',
}
export const tableRowStyles = {
  '&:last-child td, &:last-child th': { border: 0 },
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '#f5f5f5',
  },
}
