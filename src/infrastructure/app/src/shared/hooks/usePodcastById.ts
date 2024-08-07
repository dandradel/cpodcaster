/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect } from 'react'
import PodcastService from '../../services/PodcastService'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setEpisodes } from '../../store/reducers/episodesSlice'
import { setPodcastCard } from '../../store/reducers/podcastsSlice'
import { RootState } from '../../store/store'
import useError from './useError'
import { mapToPodcastCardProps } from './helpers'
import { Podcast } from '../../../../../domain/models/Podcast'

const usePodcastById = () => {
  const { podcastId } = useParams<{ podcastId: string }>()
  const episodes = useSelector((state: RootState) => state.episodes.episodes)
  const podcastCardProps = useSelector((state: RootState) => state.podcasts.podcastCard)
  const dispatch = useDispatch()
  const { setErrorState } = useError()

  const getPodcastById = useCallback(async () => {
    try {
      const responsePodcast: Podcast = await PodcastService().getPoscastById(podcastId ?? '')
      const { episodes = [] } = responsePodcast
      dispatch(setEpisodes(episodes))
      const podcastCardData = await mapToPodcastCardProps(responsePodcast)
      dispatch(setPodcastCard(podcastCardData))
    } catch (error: any) {
      setErrorState(error?.code as string)
    }
  }, [])

  useEffect(() => {
    if (!episodes || episodes?.length === 0) getPodcastById()
  }, [])

  return { podcastCardProps, episodes }
}

export default usePodcastById
