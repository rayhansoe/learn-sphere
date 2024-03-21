export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export interface IArticle {
  id: string
  title: string
  content: string
}

export type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export interface Person {
  cell: string
  name: {
    first: string
    last: string
  }
  email: string
  phone: string,
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
}

export interface Team {
  results: Person[]
}

export interface IFooter {
  links: IFooterLinks
}

export type IFooterLink = {
  href: string
  title: string
} 

export type IFooterLinks = IFooterLink[] 