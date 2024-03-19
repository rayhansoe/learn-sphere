import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Menu } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";
import Link from "next/link";

export function MobileMenu() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost" size="icon" className="sm:hidden">
					<Menu className="h-5 w-5" />
					<span className="sr-only">Burger Menu</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] rounded-m">
				<nav>
					<Accordion type="single" collapsible className="w-full">
						<AccordionItem className="dark:border-b-slate-300/40" value="item-1">
							<AccordionTrigger>Products</AccordionTrigger>
							<AccordionContent>
								<div className="ml-2 flex flex-col gap-2 font-light">
									<div className="hover:underline">
										<Link href="/learning-buddy">Learning Buddy</Link>
									</div>
									<div className="hover:underline">
										<Link href="/skillsphere-academy">SkillSphere Academy</Link>
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem className="dark:border-b-slate-300/40" value="item-2">
							<AccordionTrigger>Company</AccordionTrigger>
							<AccordionContent>
								<div className="ml-2 flex flex-col gap-2 font-light">
									<div className="hover:underline">
										<Link href="/about-us">About Us</Link>
									</div>
									<div className="hover:underline">
										<Link href="/teams">Teams</Link>
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem
							className="dark:border-b-slate-300/40"
							value="item-3"
						>
							<Link href="/blog">
								<AccordionTrigger>Blog</AccordionTrigger>
							</Link>
						</AccordionItem>
					</Accordion>
				</nav>
			</DialogContent>
		</Dialog>
	);
}
