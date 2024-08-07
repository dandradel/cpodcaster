import React, { ReactElement } from 'react'
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import './Episodes.styles.css'
import {
  episodesBoxStyles,
  episodeNumberBoxStyles,
  episodesTableStyles,
  tableCellStyles,
  tableRowStyles,
} from './utils'
import { NavigateFunction, useNavigate, useParams } from 'react-router-dom'
import { Episode } from '../../../../../domain/models/Episode'
import { millisToMinutesAndSeconds, TableCellI, tableHeadCells } from './helpers'

interface EpisodesProps {
  episodes: Episode[] | null
}

function Episodes({ episodes }: EpisodesProps): ReactElement {
  const { podcastId } = useParams<{ podcastId: string }>()
  const navigate: NavigateFunction = useNavigate()

  const handleEpisodeClick = (episode: Episode): void => {
    const { id } = episode
    navigate(`/podcast/${podcastId}/episode/${id}`, { state: { episode } })
  }

  const getEpisodes = (): ReactElement[] | undefined => {
    return episodes?.map((episode: Episode) => {
      const { id, title, duration, date } = episode
      const episodeDate = new Date(date).toLocaleDateString()
      const episodeTime = new Date(duration)

      return (
        <TableRow
          key={id}
          sx={tableRowStyles}
          onClick={() => handleEpisodeClick(episode)}
          data-testid='episodes-tableRow-testid'
        >
          <TableCell
            key={id}
            align='left'
            sx={{
              color: '#2E8BC0',
            }}
          >
            {title}
          </TableCell>
          <TableCell align='right'>{episodeDate}</TableCell>
          <TableCell align='right'>{millisToMinutesAndSeconds(episodeTime)}</TableCell>
        </TableRow>
      )
    })
  }

  const getTableHeadCells = (): ReactElement[] => {
    return tableHeadCells.map((tableHeadCell: TableCellI) => {
      const { id, label }: TableCellI = tableHeadCell
      return (
        <TableCell key={id} align={id === 'title' ? 'left' : 'right'} sx={tableCellStyles}>
          {label}
        </TableCell>
      )
    })
  }

  return (
    <Box sx={episodesBoxStyles} data-testid='episodes-wrapper-testid'>
      <Box sx={episodeNumberBoxStyles}>
        <Typography variant='h6' fontWeight='bold' data-testid='episodes-number-testid'>
          Episodes: {episodes?.length}
        </Typography>
      </Box>
      <Box sx={episodesTableStyles}>
        <TableContainer>
          <Table data-testid='table-episodes-testid'>
            <TableHead>
              <TableRow>{getTableHeadCells()}</TableRow>
            </TableHead>
            <TableBody>{getEpisodes()}</TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default Episodes
