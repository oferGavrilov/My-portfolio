export interface Project {
  title: string
  description: string
  images: string[]
  tags: string[]
  source: string
  color: string
  architecture: string
  visit: string
  id: string
}

export interface Technology {
  id: string
  type: string
  names: string[]
  imgUrls: string[]
}
