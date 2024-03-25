"use client";
import { NavItem } from "@/types/types";

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
import { Badge } from "./ui/badge";

export function NavigationMenuDemo() {
	return (
		<NavigationMenu className="hidden sm:flex">
			<NavigationMenuList>
				<NavigationMenuItem key={"products"}>
					<NavigationMenuTrigger>Products</NavigationMenuTrigger>
					<NavigationMenuContent>
						{/* <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
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
												LearnSphere Academy
											</div>
											<p className="text-sm leading-tight text-muted-foreground">
												Beautifully designed components built with Radix UI and Tailwind
												CSS.
											</p>
										</>
									</NavigationMenuLink>
								</Link>
							</div>
						</div> */}
						<ul className="grid gap-3 p-6 w-96 md:w-[500px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-4" key={"learnsphere-academy"}>
								<Link
									className="flex h-full w-full select-none flex-col bg-slate-200 hover:bg-slate-200/80 dark:bg-slate-700/30 dark:hover:bg-slate-700/60 rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
									href="/courses"
								>
									<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
										<>
											<div className="flex justify-between">
												<Icons.logo className="h-6 w-6" />
												<Badge className="w-min bg-sky-900 shadow shadow-sky-900 dark:bg-blue-300 dark:shadow-blue-900 animate-pulse">
													NEW
												</Badge>
											</div>
											<h6 className="mb-2 mt-4 text-lg font-medium">Online Courses</h6>
											<p className="text-sm leading-tight text-muted-foreground">
												Beautifully designed components that you can copy and paste into
												your apps. Accessible. Customizable. Open Source.
											</p>
										</>
									</NavigationMenuLink>
								</Link>
							</li>
							<li
								key={"courses"}
								className="opacity-70 p-3 bg-slate-100 dark:bg-slate-800/40 rounded-md"
							>
								<Link className=" cursor-default" href="#" legacyBehavior passHref>
									<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
										<>
											<h6 className="mb-2 text-lg font-medium">
												LearnSphere Academy<Badge className="opacity-40">SOON</Badge>
											</h6>
											<p className="text-sm leading-tight text-muted-foreground">
												Beautifully designed components built with Radix UI and Tailwind
												CSS.
											</p>
										</>
									</NavigationMenuLink>
								</Link>
							</li>
							<li
								key={"learning-buddy"}
								className="opacity-70 p-3 bg-slate-100 dark:bg-slate-800/40 rounded-md"
							>
								<Link className=" cursor-default" href="#" legacyBehavior passHref>
									<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
										<>
											<h6 className="mb-2 text-lg font-medium">
												Learning Buddy <Badge className="opacity-40">SOON</Badge>
											</h6>
											<p className="text-sm leading-tight text-muted-foreground">
												Beautifully designed components built with Radix UI and Tailwind
												CSS.
											</p>
										</>
									</NavigationMenuLink>
								</Link>
							</li>
							<li
								key={"learning-space"}
								className="opacity-70 p-3 bg-slate-100 dark:bg-slate-800/40 rounded-md"
							>
								<Link className=" cursor-default" href="#" legacyBehavior passHref>
									<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
										<>
											<h6 className="mb-2 text-lg font-medium">
												Learning Space <Badge className="opacity-40">SOON</Badge>
											</h6>
											<p className="text-sm leading-tight text-muted-foreground">
												Beautifully designed components built with Radix UI and Tailwind
												CSS.
											</p>
										</>
									</NavigationMenuLink>
								</Link>
							</li>
							<li
								key={"evaly"}
								className="opacity-70 p-3 bg-slate-100 dark:bg-slate-800/40 rounded-md"
							>
								<Link className=" cursor-default" href="#" legacyBehavior passHref>
									<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
										<>
											<h6 className="mb-2 text-lg font-medium">
												Evaly.io <Badge className="opacity-40">SOON</Badge>
											</h6>
											<p className="text-sm leading-tight text-muted-foreground">
												Beautifully designed components built with Radix UI and Tailwind
												CSS.
											</p>
										</>
									</NavigationMenuLink>
								</Link>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem key={"company"}>
					<NavigationMenuTrigger>Company</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
							<div className="row-span-3">
								<Link
									className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
									href="/about-us"
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
				{/* <NavigationMenuItem  key={"blog"}>
					<Link href="/blog" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Blog
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem> */}
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
