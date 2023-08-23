export interface Project {
  title: string
  name: string
  description: string
  tags: string[]
  source: string
  color: string
  architecture: string
  visit: string
  id: string
  mainImg: string
  largeImg: string
  tabletImg: string
  mobileImg: string
  mockupDesktop: string
  mockupLaptop: string
  mockupMobile: string
}

export interface Technology {
  id: string
  type: string
  names: string[]
  imgUrls: string[]
}
