import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: {
		template: " | %s",
		default: "",
	},
	description: "",
	icons: {
		icon: "/favicon.ico",
	},
	openGraph: {
		title: "",
		description: "",
		siteName: "",
		images: { url: "" },
		url: "",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body>{children}</body>
		</html>
	);
}
