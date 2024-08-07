export interface Episode {
  id: string | number
  title: string
  date: string
  duration: number
  description: string
  audioUrl: string
  episodeContentType?: string
  episodeFileExtension?: string
}
