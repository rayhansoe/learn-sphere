import { Button } from "@/components/ui/button";
import { getOurTeam } from "@/lib/team";
import { Github, Mail, Phone } from "lucide-react";
import { Courgette, Bitter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const courgette = Courgette({
	weight: "400",
	subsets: ["latin"],
});

const bitter = Bitter({
	weight: "400",
	subsets: ["latin"],
});

export default async function About() {
	const team = await getOurTeam();
	return (
		<main className="container max-w-4xl flex flex-col bg-slate-50 dark:bg-slate-950">
			<div
				className={`${bitter.className} my-10 mt-32 flex flex-col gap-6 sm:flex-row sm:max-w-screen-sm lg:max-w-screen-lg lg:justify-between`}
			>
				<div className="flex flex-col  sm:w-1/3">
					<h1 className={`${courgette.className} text-5xl`}>Letter</h1>
					<h1 className="text-4xl">From Our CEO</h1>
				</div>
				<div className="flex flex-col gap-4  sm:w-4/6">
					<p className="">
						Visi Dicoding adalah menjadi platform edukasi teknologi terdepan yang
						mendorong akses literasi digital yang lebih luas untuk semua. Dicoding
						memiliki misi untuk mengakselerasi transisi Indonesia menuju dunia digital
						melalui pendidikan teknologi yang mentransformasi kehidupan.
					</p>
					<p className="">
						Kini semua bangsa bergerak menuju dunia digital yang bertumpu pada inovasi
						teknologi di semua sendi kehidupan. Kami yakin pendidikan teknologi adalah
						fondasi bagi setiap bangsa agar menjadi yang terdepan dalam menghadapi
						dunia digital.
					</p>
					<p className="">
						Dicoding hadir sebagai platform pendidikan teknologi yang membantu
						menghasilkan talenta digital berstandar global. Semua demi mengakselerasi
						Indonesia agar menjadi yang terdepan.
					</p>
				</div>
			</div>

			{/* Milestone */}
			<section className="flex flex-col gap-6 my-6 md:my-12 lg:my-16 xl:my-28">
				<h3 className="text-2xl font-bold leading-dense text-black dark:text-white xl:text-3xl">
					Milestone
				</h3>
				<ol className="items-center sm:flex">
					<li className="relative mb-6 sm:mb-0">
						<div className="flex items-center">
							<div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
								<svg
									className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
								</svg>
							</div>
							<div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
						</div>
						<div className="mt-3 sm:pe-8">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								Flowbite Library v1.0.0
							</h3>
							<time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
								Released on December 2, 2021
							</time>
							<p className="text-base font-normal text-gray-500 dark:text-gray-400">
								Get started with dozens of web components and interactive elements.
							</p>
						</div>
					</li>
					<li className="relative mb-6 sm:mb-0">
						<div className="flex items-center">
							<div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
								<svg
									className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
								</svg>
							</div>
							<div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
						</div>
						<div className="mt-3 sm:pe-8">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								Flowbite Library v1.2.0
							</h3>
							<time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
								Released on December 23, 2021
							</time>
							<p className="text-base font-normal text-gray-500 dark:text-gray-400">
								Get started with dozens of web components and interactive elements.
							</p>
						</div>
					</li>
					<li className="relative mb-6 sm:mb-0">
						<div className="flex items-center">
							<div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
								<svg
									className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
								</svg>
							</div>
							<div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
						</div>
						<div className="mt-3 sm:pe-8">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								Flowbite Library v1.3.0
							</h3>
							<time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
								Released on January 5, 2022
							</time>
							<p className="text-base font-normal text-gray-500 dark:text-gray-400">
								Get started with dozens of web components and interactive elements.
							</p>
						</div>
					</li>
				</ol>
			</section>

			<section className="safe-paddings my-6 md:my-12 lg:my-16 xl:my-28 ">
				<h3 className="text-2xl font-bold leading-dense text-black dark:text-white xl:text-3xl">
					Meet The Team
				</h3>
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
										<li
											key={`${person.name.first} ${person.name.last}`}
											className="flex gap-2"
										>
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
												<Link href={`https://github.com/rayhansoe`} target="_blank">
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

			{/* Cultures */}
			<section className="flex flex-col gap-6 my-6 md:my-12 lg:my-16 xl:my-28">
				<div className="flex flex-col gap-6">
					<h3>Explore our team’s and cultures in Barcelona</h3>
					<div className="flex flex-col">
						<p>
							Join us on a visual tour through our offsite gathering in Barcelona,
							explore the best moments, thrilling activities, and bonding experiences.
						</p>
						<p>
							Every frame showcases our culture, serving as a testament to our
							collaborative spirit that propels us toward greater heights.
						</p>
						<p>
							Discover the heart of our team away from the office and get a glimpse
							into our vibrant corporate culture.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}

function name() {
	
}

const myFUnc = () => {
	
}
