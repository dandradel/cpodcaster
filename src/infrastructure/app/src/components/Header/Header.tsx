import React from 'react'
import Box from '@mui/material/Box'
import { headerBoxStyles } from './utils'
import { Link } from 'react-router-dom'
import './Header.styles.css'
import { setEpisodes } from '../../store/reducers/episodesSlice'
import { setPodcastCard } from '../../store/reducers/podcastsSlice'
import { useDispatch } from 'react-redux'
import useError from '../../shared/hooks/useError'

function Header(): React.ReactElement {
  const dispatch = useDispatch()
  const { setErrorState } = useError()

  const handleHeaderLinkClick = (): void => {
    dispatch(setPodcastCard(null))
    dispatch(setEpisodes(null))
    setErrorState(null)
  }

  return (
    <Box sx={headerBoxStyles}>
      <Link className='header' to='/' onClick={handleHeaderLinkClick}>
        Podcaster
      </Link>
    </Box>
  )
}

export default Header
