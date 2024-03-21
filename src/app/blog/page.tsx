import { getArticles } from "@/lib/articles";
import { IArticle } from "@/types/types";
import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 5

export const metadata: Metadata = {
	title: "Our Blog"
}

export default async function Home() {
	const articles: IArticle[] = await getArticles();
	return (
		<>
			<div className="max-w-sm h-full mx-auto">
				<h1>Blog</h1>
				<div>
					{
						articles.map(article => {
							return (
								<div key={article.id}>
									<Link href={`/blog/${article.id}`}>{article.title}</Link>
								</div>
							)
						})
					}
				</div>
			</div>
		</>
	);
}
