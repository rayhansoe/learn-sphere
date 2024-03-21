import { Button } from "@/components/ui/button";
import { getOurTeam } from "@/lib/team";
import { Github, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Teams() {
	const team = await getOurTeam();

	return (
		<main className="container max-w-4xl flex flex-col bg-slate-50 dark:bg-slate-950">
			<section className="safe-paddings my-6 md:my-12 lg:my-16 xl:my-20 ">
				<h1 className="text-4xl font-bold leading-dense text-black dark:text-white xl:text-5xl">
					Meet The Team
				</h1>
				<p className="mt-6">
					The LearnSphere team is a dedicated group of experts in education,
					technology, and innovation. With a shared passion for lifelong learning,
					our team is committed to empowering individuals and organizations through
					transformative educational solutions. Led by experienced leaders like CEO
					Rayhan H. Sutrisno, we strive to revolutionize the way people learn and
					grow.
				</p>
				<ul className="flex flex-col gap-4 mt-16 md:grid grid-cols-2 gap-x-4 gap-y-9">
					{team?.results?.map((person) => {
						return (
							<li className=" ml-4 mb-4 flex gap-3" key={person.cell}>
								<Image
									className="rounded shadow-avatar shrink-0 dark:shadow-avatar-dark"
									src={person.picture.large}
									width={144}
									height={144}
									alt={`${person.name.first} ${person.name.last}`}
								/>
								<div className="flex flex-col gap-3 mt-1">
									<h4 className="text-xl font-semibold">{`${person.name.first} ${person.name.last}`}</h4>
									<p>Designer</p>
									<ul>
										<li key={`${person.name.first} ${person.name.last}`} className="flex gap-2">
											<Button variant="default" size="icon" className="rounded-full">
												<Link href={`mailto:${person.email}`}>
												<Mail className="h-5 w-5" />
												<span className="sr-only">Mail Link</span>
												</Link>
											</Button>
											<Button variant="default" size="icon" className="rounded-full">
												<Link href={`tell:${person.phone}`}>
												<Phone className="h-5 w-5" />
												<span className="sr-only">Phone Link</span>
												</Link>
											</Button>
											<Button variant="default" size="icon" className="rounded-full">
												<Link href={`https://github.com/rayhansoe`} target="_blank" >
												<Github className="h-5 w-5" />
												<span className="sr-only">Github Link</span>
												</Link>
											</Button>
										</li>
									</ul>
								</div>
							</li>
						);
					})}
				</ul>
			</section>
		</main>
	);
}
