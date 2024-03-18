import { IArticle } from '@/types';

export async function getArticles(): Promise<IArticle[]> {
  const res = await fetch('http://localhost:8000/articles')
  const data = await res.json()

  return data
}

export async function getArticle(id:string): Promise<IArticle> {
  const res = await fetch(`http://localhost:8000/articles/${id}`)
  const data = await res.json()

  return data
}