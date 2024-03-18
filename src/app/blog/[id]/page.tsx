import { getArticle, getArticles } from "@/lib/articles";
import { Props } from "@/types";
import type { Metadata, ResolvingMetadata } from "next";

export const revalidate = 3600

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
 
  // fetch data
  const article = await getArticle(id)
 
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: article.title,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  }
}

export async function generateStaticParams() {
	const articles = await getArticles();

	return articles.map((article) => ({
		id: article.id,
	}));
}

export default async function Blog({ params }: { params: { id: string } }) {
	const article = await getArticle(params.id);

	return (
		<>
			<h1>{article.title}</h1>
			<h1>{article.content}</h1>
		</>
	);
}
