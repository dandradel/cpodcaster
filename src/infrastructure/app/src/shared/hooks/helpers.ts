import { Podcast } from '../../../../../domain/models/Podcast'
import { PodcastCardProps } from '../../components/PodcastCard/PodcastCard'

export const mapToPodcastCardProps = (podcast: Podcast): PodcastCardProps => {
  const { id, name, author, summary, image } = podcast

  return {
    podcastImage: image,
    podcastName: name,
    podcastAuthor: author,
    podcastDescription: summary,
    podcastId: id,
  }
}
