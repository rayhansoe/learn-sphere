import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: {
		template: "%s - LearnSphere",
		default: "LearnSphere | Empowering Lifelong Learning"
	},
	description: "Discover LearnSphere: Your Gateway to Lifelong Learning and Personal Growth.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen bg-slate-50 dark:bg-slate-950 font-sans antialiased  overflow-x-hidden",
					inter.variable
				)}
			>
				{children}
			</body>
		</html>
	);
}
