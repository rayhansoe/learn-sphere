import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";

export default function HomeLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {

	console.log('rerender blog template');
	

	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			<div className="relative flex min-h-screen flex-col">
				<SiteHeader />
				<div className="flex-1">{children}</div>
			</div>
		</ThemeProvider>
	);
}
