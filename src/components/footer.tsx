import { IFooter } from "@/types/types";
import Link from "next/link";

export default function Footer({ links }: IFooter) {
	return (
		<div data-cy="footer" className="mt-auto border-t border-slate-300/95 dark:border-slate-800/95">
			<div className="container py-6">
				<ul className="flex flex-wrap gap-3 justify-center text-xs font-light text-slate-500 sm:text-sm">
					{links.map((item, index) => {
						return (
							<>
								<li key={`${index}-${item.title}`} data-cy="footer-item">
									<Link
										data-cy="footer-link"
										className="hover:underline dark:hover:text-slate-400"
										href={item.href}
									>
										{item.title}
									</Link>
								</li>
							</>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
