"use client";

import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site";
import { NavBar } from "./NavBar";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader() {
	return (
		<header className="bg-white/50 dark:bg-slate-950/50 backdrop-blur sticky top-0 z-40 w-full border-b border-slate-300 dark:border-slate-800">
			<div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
				<NavBar items={siteConfig.mainNav} />
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-1">
						<Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
							<div
								className={buttonVariants({
									size: "icon",
									variant: "ghost",
								})}
							>
								<Icons.gitHub className="h-5 w-5" />
								<span className="sr-only">GitHub</span>
							</div>
						</Link>
						<ThemeToggle />
						<MobileMenu />
					</nav>
				</div>
			</div>
		</header>
	);
}
