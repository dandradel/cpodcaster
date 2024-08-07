export interface PodcastEntries {
  id: {
    attributes: {
      'im:id': string
    }
  }
  'im:name': {
    label: string
  }
  'im:image': {
    label: string
  }[]
  'im:artist': {
    label: string
    attributes: {
      href: string
    }
  }
  'im:releaseDate': {
    attributes: {
      label: string
    }
  }
  summary: {
    label: string
  }
  title: {
    label: string
  }
}

export interface PodcastsDTO {
  feed: {
    entry: PodcastEntries[]
    updated?: {
      label: string
    }
  }
}

export interface PodcastResults {
  artworkUrl60: string
  collectionId: string | number
  collectionName: string
  episodeGuid: string | number
  description: string
  releaseDate: string
  trackId: number
  trackName: string
  shortDescription: string
  kind: string
  episodeFileExtension: string
  episodeContentType: string
  episodeUrl: string
  artworkUrl600: string
  artistName: string
  trackTimeMillis: number
}

export interface PodcastByIdDTO {
  resultCount: number
  results: PodcastResults[]
  podcastId?: string
}
