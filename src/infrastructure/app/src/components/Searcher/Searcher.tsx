/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, useCallback } from 'react'
import { Chip, Box, TextField } from '@mui/material'
import { searcherBoxStyles, searcherChipStyles, searcherTextFieldStyles } from './styles'
import { useDispatch } from 'react-redux'
import useLocalStorage from '../../shared/hooks/useLocalStorage'
import { filterPodcasts } from './helpers'

interface SearcherProps {
  chipLabel: number | string | undefined
}

function Searcher({ chipLabel }: SearcherProps): ReactElement {
  const [localPodcasts] = useLocalStorage('podcasts', [])
  const dispatch = useDispatch()

  const handleSearcherChange = useCallback((e: any): void => {
    const stringSearch = e?.target.value

    filterPodcasts({ stringSearch, localPodcasts, dispatch })
  }, [localPodcasts, dispatch])

  return (
    <Box sx={searcherBoxStyles} data-testid='searcher-wrapper-testid'>
      <TextField
        label='Filter podcasts...'
        size='small'
        sx={searcherTextFieldStyles}
        onChange={handleSearcherChange}
      />
      <Chip
        color='primary'
        label={chipLabel}
        size='small'
        sx={searcherChipStyles}
        data-testid='search-chip-number-testid'
      />
    </Box>
  )
}

export default Searcher
