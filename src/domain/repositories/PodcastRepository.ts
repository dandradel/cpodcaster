import { Podcast } from '../models/Podcast'

export interface PodcastRepository {
  getPodcasts: () => Promise<Podcast[]>
  getPoscastById: (id: string) => Promise<Podcast>
}
