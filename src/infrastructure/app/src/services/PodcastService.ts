import { Http } from '../../../../domain/repositories/Http'
import { PodcastRepository } from '../../../../domain/repositories/PodcastRepository'
import { PodcastsDTO, PodcastByIdDTO } from '../shared/http/DTO/PodcastDTO'
import { httpAxios } from '../shared/instances/httpAxios'
import { mapToPodcastById, mapToPodcasts } from './helpers'

const client: Http = httpAxios

const PodcastService = (): PodcastRepository => ({
  getPodcasts: async () => {
    const podcasts: PodcastsDTO = await client.get<PodcastsDTO>(
      'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
    )

    return mapToPodcasts(podcasts)
  },
  getPoscastById: async (id: string) => {
    const podcastDto: PodcastByIdDTO = await client.get<PodcastByIdDTO>(
      `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20'`,
    )

    return mapToPodcastById(podcastDto)
  },
})

export default PodcastService
