// create EpisodeDTO interface with the following properties: id, title, description, image, podcastId
export interface EpisodeDTO {
  id: string
  title: string
  description: string
  duration: number
  published: Date
  url: string
  image: string
}
