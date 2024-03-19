"use client";
import { NavItem } from "@/types";

interface MainNavProps {
	items?: NavItem[];
}

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
	{
		title: "Alert Dialog",
		href: "/docs/primitives/alert-dialog",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "Hover Card",
		href: "/docs/primitives/hover-card",
		description: "For sighted users to preview content available behind a link.",
	},
	{
		title: "Progress",
		href: "/docs/primitives/progress",
		description:
			"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
	},
	{
		title: "Scroll-area",
		href: "/docs/primitives/scroll-area",
		description: "Visually or semantically separates content.",
	},
	{
		title: "Tabs",
		href: "/docs/primitives/tabs",
		description:
			"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
	},
	{
		title: "Tooltip",
		href: "/docs/primitives/tooltip",
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
	},
];

export function NavigationMenuDemo() {
	return (
		<NavigationMenu className="hidden sm:flex">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Products</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
							<div className="row-span-3">
								<Link
									className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
									href="/"
								>
									<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
										<>
											<div className="mb-2 mt-4 text-lg font-medium">Learning Buddy</div>
											<p className="text-sm leading-tight text-muted-foreground">
												Beautifully designed components built with Radix UI and Tailwind
												CSS.
											</p>
										</>
									</NavigationMenuLink>
								</Link>
							</div>
							<div className="row-span-3">
								<Link
									className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
									href="/"
								>
									<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
										<>
											<div className="mb-2 mt-4 text-lg font-medium">
												SkillSphere Academy
											</div>
											<p className="text-sm leading-tight text-muted-foreground">
												Beautifully designed components built with Radix UI and Tailwind
												CSS.
											</p>
										</>
									</NavigationMenuLink>
								</Link>
							</div>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Company</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
							<div className="row-span-3">
								<Link
									className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
									href="/"
								>
									<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
										<>
											<div className="mb-2 mt-4 text-lg font-medium">About Us</div>
											<p className="text-sm leading-tight text-muted-foreground">
												Beautifully designed components built with Radix UI and Tailwind
												CSS.
											</p>
										</>
									</NavigationMenuLink>
								</Link>
							</div>
							<div className="row-span-3">
								<Link
									className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
									href="/team"
								>
									<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
										<>
											<div className="mb-2 mt-4 text-lg font-medium">Our Team</div>
											<p className="text-sm leading-tight text-muted-foreground">
												Beautifully designed components built with Radix UI and Tailwind
												CSS.
											</p>
										</>
									</NavigationMenuLink>
								</Link>
							</div>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/blog" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Blog
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<div>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</div>
	);
});
ListItem.displayName = "ListItem";

export function NavBar({ items }: MainNavProps) {
	return (
		<div className="flex gap-6 md:gap-10">
			<Link href="/" className="flex items-center space-x-2">
				{/* <Icons.logo className="h-6 w-6" /> */}
				<span className="inline-block font-extrabold  text-lg text-yellow-500/70 dark:text-amber-200">
					<span className="text-blue-950 dark:text-sky-100">Learn</span>Sphere
				</span>
			</Link>
			<NavigationMenuDemo />
			{/* {items?.length ? (
        <nav className="hidden md:flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm text-muted-foreground text-slate-500",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null} */}
		</div>
	);
}
