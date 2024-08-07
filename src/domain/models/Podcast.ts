import { Episode } from './Episode'

export interface Podcast {
  id: string | number
  name: string
  author: string
  summary: string
  image: string
  releaseDate: string
  title: string
  episodes?: Episode[]
  updated?: string
}
