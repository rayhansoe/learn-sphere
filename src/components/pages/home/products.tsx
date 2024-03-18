import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Products() {
  return (
    <div>
				<section className="container sm:max-w-3xl md:max-w-7xl my-12 flex flex-col  gap-10">
					<h1 className="text-3xl font-bold text-center">Products and Services</h1>
					<div className="flex flex-wrap gap-8 justify-center lg:gap-8">
						<Card className="max-w-lg md:max-w-md lg:max-w-sm">
							<Link href={"/"}>
								<CardHeader>
									<CardTitle>SkillSphere Academy</CardTitle>
								</CardHeader>
								<CardContent>
									<p>
										SkillSphere Academy is an innovative educational institution focused
										on honing essential skills for success in the modern world.
									</p>
								</CardContent>
								<CardFooter>
									<Button variant={"link"}>Learn More</Button>
								</CardFooter>
							</Link>
						</Card>
						<Card className="max-w-lg md:max-w-md lg:max-w-sm">
							<Link href={"/"}>
								<CardHeader>
									<CardTitle>Learning Buddy</CardTitle>
								</CardHeader>
								<CardContent>
									<p>
										Learning Buddy is your trusted companion on the journey to knowledge,
										offering personalized support and guidance every step of the way.
									</p>
								</CardContent>
								<CardFooter>
									<Button variant={"link"}>Learn More</Button>
								</CardFooter>
							</Link>
						</Card>
						<Card className="max-w-lg md:max-w-md lg:max-w-sm">
							<Link href={"/"}>
								<CardHeader>
									<CardTitle>Learning Space</CardTitle>
								</CardHeader>
								<CardContent>
									<p>
										Learning Space is your collaborative sanctuary, where knowledge flows
										freely and innovation thrives, provided by LearnSphere
									</p>
								</CardContent>
								<CardFooter>
									<Button variant={"link"}>Learn More</Button>
								</CardFooter>
							</Link>
						</Card>
						<Card className="max-w-lg md:max-w-md lg:max-w-sm">
							<Link href={"/"}>
								<CardHeader>
									<CardTitle>Online Courses</CardTitle>
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
						<Card className="max-w-lg md:max-w-md lg:max-w-sm">
							<Link href={"/"}>
								<CardHeader>
									<CardTitle>Evaly.io</CardTitle>
								</CardHeader>
								<CardContent>
									<p>
										LearnSphere&apos;s learning management system, powered by Evaly.io,
										offers efficient and user-friendly online exams, ideal for educators
										and students in the digital age.
									</p>
								</CardContent>
								<CardFooter>
									<Button variant={"link"}>Learn More</Button>
								</CardFooter>
							</Link>
						</Card>
					</div>
				</section>
			</div>
  )
}