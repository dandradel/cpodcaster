import { Episode } from '../../../../domain/models/Episode'
import { Podcast } from '../../../../domain/models/Podcast'
import {
  PodcastByIdDTO,
  PodcastEntries,
  PodcastResults,
  PodcastsDTO,
} from '../shared/http/DTO/PodcastDTO'

interface MapToPodcastModalArgs {
  podcast: PodcastResults
  episodes: Episode[]
  updated?: string
}

export const mapToPodcasts = (podcasts: PodcastsDTO): Podcast[] => {
  const {
    feed: { entry, updated },
  } = podcasts

  return entry?.map((podcast: PodcastEntries) => {
    return {
      id: podcast.id.attributes['im:id'],
      name: podcast['im:name'].label,
      author: podcast['im:artist'].label,
      summary: podcast.summary.label,
      image: podcast['im:image'][2].label,
      releaseDate: podcast['im:releaseDate'].attributes.label,
      title: podcast.title.label,
      updated: updated?.label,
    }
  })
}

export const mapToPodcastById = (podcastDto: PodcastByIdDTO): Podcast => {
  const { results } = podcastDto

  const episodes: Episode[] = getEpisodes(results)

  const mapToPodcastModalArgs: MapToPodcastModalArgs = {
    podcast: results[0],
    episodes,
  }

  return mapToPodcastModel(mapToPodcastModalArgs)
}

const mapToPodcastModel = ({ episodes, podcast }: MapToPodcastModalArgs): Podcast => {
  const {
    collectionId,
    collectionName,
    artistName,
    description,
    artworkUrl600,
    releaseDate,
    trackName,
  } = podcast
  const podcastModel: Podcast = {
    id: collectionId,
    name: collectionName,
    author: artistName,
    summary: description,
    image: artworkUrl600,
    releaseDate: releaseDate,
    title: trackName,
    episodes,
  }

  return podcastModel
}

const getEpisodes = (results: PodcastResults[]): Episode[] => {
  return results?.map((episode: PodcastResults) => {
    const {
      episodeGuid,
      trackName,
      releaseDate,
      shortDescription,
      episodeUrl,
      trackTimeMillis,
      episodeContentType,
      episodeFileExtension,
    } = episode
    return {
      id: episodeGuid,
      title: trackName,
      date: releaseDate,
      duration: trackTimeMillis,
      description: shortDescription,
      audioUrl: episodeUrl,
      episodeContentType,
      episodeFileExtension,
    }
  })
}
