import Link from "next/link";

const AllLinks = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Learning Buddy",
		href: "/",
	},
	{
		title: "SkillSphere Academy",
		href: "/skillsphere-academy",
	},
	{
		title: "About Us",
		href: "/about",
	},
	{
		title: "Our Teams",
		href: "/teams",
	},
	{
		title: "Blog",
		href: "/",
	},
];

export default function Footer() {
	return (
		<div className="container my-4 py-6 border-t border-slate-300 dark:border-slate-800">
			<ul className="flex flex-wrap gap-3 justify-center text-xs font-light text-slate-500 sm:text-sm">
				{AllLinks.map((item) => {
					return (
						<>
							<li>
								<Link className="hover:underline dark:hover:text-slate-400" href={item.href}>{item.title}</Link>
							</li>
						</>
					);
				})}
			</ul>
		</div>
	);
}
