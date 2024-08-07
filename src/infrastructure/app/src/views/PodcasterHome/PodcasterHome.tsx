import React, { ReactElement } from 'react'
import Searcher from '../../components/Searcher/Searcher'
import Podcasts from '../../components/Podcasts/Podcasts'
import useError from '../../shared/hooks/useError'
import Error from '../../components/Error/Error'
import usePodcasts from '../../shared/hooks/usePodcasts'
import Skeleton from '../../components/Skeleton/Skeleton'

function PodcasterHome(): ReactElement {
  const podcasts = usePodcasts()
  const { error } = useError()
  const isPodcastsEmpty: boolean = podcasts?.length === 0

  if (error) {
    return <Error />
  }

  if (!podcasts) {
    return <Skeleton />
  }

  return (
    <>
      <Searcher chipLabel={podcasts.length} />
      {isPodcastsEmpty && <Error message='No podcasts found, try another search' />}
      <Podcasts podcasts={podcasts} />
    </>
  )
}

export default PodcasterHome
