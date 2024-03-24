import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Products() {
	return (
		<div>
			<section className="container sm:max-w-3xl md:max-w-7xl my-12 flex flex-col  gap-10">
				<h1 className="text-3xl font-bold text-center">Products and Services</h1>
				<div className="flex flex-wrap gap-8 justify-center lg:gap-8">
					<Card className="max-w-lg md:max-w-[328px] lg:max-w-sm shadow-md hover:shadow-lg dark:bg-slate-900/70 dark:hover:bg-slate-900">
						<Link href={"/"}>
							<CardHeader>
								<CardTitle className="flex items-center gap-3 justify-between">
									Online Courses
									<Badge className="bg-sky-900 shadow shadow-sky-900 dark:bg-blue-300 dark:shadow-blue-900 animate-pulse">
										New
									</Badge>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									LearnSphere&apos;s online courses provide dynamic, immersive learning
									experiences from expert instructors, fostering personal and
									professional growth.
								</p>
							</CardContent>
							<CardFooter>
								<Button variant={"link"}>Learn More</Button>
							</CardFooter>
						</Link>
					</Card>
					<Card className="max-w-lg md:max-w-[328px] lg:max-w-sm opacity-70 bg-slate-100">
						{/* <Link href={"/"}> */}
						<CardHeader>
							<CardTitle className="flex items-center gap-3 justify-between">
								LearnSphere Academy<Badge className="opacity-40">Soon</Badge>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								LearnSphere Academy is an innovative educational institution focused on
								honing essential skills for success in the modern world.
							</p>
						</CardContent>
						<CardFooter>
							<Button variant={"link"} className="hover:no-underline cursor-default">
								Learn More
							</Button>
						</CardFooter>
						{/* </Link> */}
					</Card>
					<Card className="max-w-lg md:max-w-[328px] lg:max-w-sm opacity-70 bg-slate-100">
						{/* <Link href={"/"}> */}
						<CardHeader>
							<CardTitle className="flex items-center gap-3 justify-between">
								Learning Buddy<Badge className="opacity-40">Soon</Badge>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								Learning Buddy is your trusted companion on the journey to knowledge,
								offering personalized support and guidance every step of the way.
							</p>
						</CardContent>
						<CardFooter>
							<Button variant={"link"} className="hover:no-underline cursor-default">
								Learn More
							</Button>
						</CardFooter>
						{/* </Link> */}
					</Card>
					<Card className="max-w-lg md:max-w-[328px] lg:max-w-sm opacity-70 bg-slate-100">
						{/* <Link href={"/"}> */}
						<CardHeader>
							<CardTitle className="flex items-center gap-3 justify-between">
								Learning Space<Badge className="opacity-40">Soon</Badge>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								Learning Space is your collaborative sanctuary, where knowledge flows
								freely and innovation thrives, provided by LearnSphere
							</p>
						</CardContent>
						<CardFooter>
							<Button variant={"link"} className="hover:no-underline cursor-default">
								Learn More
							</Button>
						</CardFooter>
						{/* </Link> */}
					</Card>
					<Card className="max-w-lg md:max-w-[328px] lg:max-w-sm opacity-70 bg-slate-100">
						{/* <Link href={"/"}> */}
						<CardHeader>
							<CardTitle className="flex items-center gap-3 justify-between">
								Evaly.io<Badge className="opacity-40">Soon</Badge>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								LearnSphere&apos;s learning management system, powered by Evaly.io,
								offers efficient and user-friendly online exams, ideal for educators and
								students in the digital age.
							</p>
						</CardContent>
						<CardFooter>
							<Button variant={"link"} className="hover:no-underline cursor-default">
								Learn More
							</Button>
						</CardFooter>
						{/* </Link> */}
					</Card>
				</div>
			</section>
		</div>
	);
}
