import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <section className="my-12 text-center px-8 mt-20 sm:mt-32 md:mt-40">
				<h2 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">
					Learning How to Learn
				</h2>
				<figure>
					<blockquote>
						<p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
						LearnSphere is dedicated to revolutionizing learning with our foundation <span className="min-w-fit text-yellow-500 dark:text-amber-200">“Learning How to Learn.”</span> Our mission is to empower lifelong learners with essential skills and knowledge. We envision a future where curiosity thrives, potential is unlocked, and growth knows no bounds. Join us as we shape the future of education and unlock the power of learning.
						</p>
					</blockquote>
					<figcaption className="mt-6 flex items-center justify-center space-x-4 text-left">
						<Button variant={"outline"}>
							<Link href='/about-us'>
							About Us
							</Link>
						</Button>
					</figcaption>
				</figure>
			</section>
  )
}