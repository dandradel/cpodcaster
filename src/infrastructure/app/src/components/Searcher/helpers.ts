import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { Podcast } from '../../../../../domain/models/Podcast'
import { setPodcasts } from '../../store/reducers/podcastsSlice'

export interface FilterPodcastsArgs {
  stringSearch: string
  localPodcasts: Podcast[]
  dispatch: Dispatch<AnyAction>
}

export interface CheckStringInLabelArgs {
  label: string
  stringSearch: string
}

export const checkStringInLabel = ({ label, stringSearch }: CheckStringInLabelArgs): boolean =>
  label.toLowerCase().includes(stringSearch.toLowerCase())

export const filterPodcasts = ({
  stringSearch,
  localPodcasts,
  dispatch,
}: FilterPodcastsArgs): void => {
  if (stringSearch.length === 0) {
    dispatch(setPodcasts(localPodcasts))
    return
  }

  const filteredPodcasts: Podcast[] = []

  localPodcasts?.filter((podcast: Podcast) => {
    const { name, author } = podcast
    const podcastNameExists = checkStringInLabel({ label: author, stringSearch })
    const podcastAuthorExists = checkStringInLabel({
      label: name,
      stringSearch,
    })

    if (podcastNameExists || podcastAuthorExists) {
      filteredPodcasts?.push(podcast)
    }
  })

  dispatch(setPodcasts(filteredPodcasts))
}
