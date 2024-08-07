/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PodcastService from '../../services/PodcastService'
import { setPodcasts } from '../../store/reducers/podcastsSlice'
import { RootState } from '../../store/store'
import useLocalStorage from './useLocalStorage'
import useError from './useError'
import { isOneDayAgo } from '../utils'
import { Podcast } from '../../../../../domain/models/Podcast'

const usePodcasts = () => {
  const [lastUpdatePodcasts, setLastUpdatePodcasts] = useState<string | undefined>('')
  const podcasts = useSelector((state: RootState) => state.podcasts.podcasts)
  const [localPodcasts, setLocalPodcasts] = useLocalStorage('podcasts', [])
  const dispatch = useDispatch()
  const { setErrorState } = useError()

  const getPodcasts = useCallback(async () => {
    try {
      const responsePodcasts: Podcast[] = await PodcastService().getPodcasts()
      dispatch(setPodcasts(responsePodcasts))
      setLocalPodcasts(responsePodcasts)
      const lastUpdate = responsePodcasts[0].updated
      setLastUpdatePodcasts(lastUpdate)
    } catch (error: any) {
      setErrorState(error?.code as string)
    }
  }, [])

  useEffect(() => {
    if (isOneDayAgo(lastUpdatePodcasts) || localPodcasts.length === 0) {
      getPodcasts()
      return
    }
    dispatch(setPodcasts(localPodcasts))
  }, [])

  return podcasts
}

export default usePodcasts
