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