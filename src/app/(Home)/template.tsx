import Footer from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { AllLinks } from "@/types/constants";
import React from "react";

export default function HomeLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			<div className="relative flex min-h-screen flex-col">
				<SiteHeader />
				<div className="flex-1">{children}</div>
				<Footer links={AllLinks} />
			</div>
		</ThemeProvider>
	);
}
