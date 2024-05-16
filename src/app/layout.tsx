import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: {
		template: "정여사님의 생신을 축하합니다 | %s",
		default: "정여사님의 축하 카드 페이지",
	},
	description: "정윤희여사님의 66번째 생신을 축하드립니다!",
	icons: {
		icon: "/favicon.ico",
	},
	openGraph: {
		title: "정여사님의 생신을 축하합니다",
		description: "정윤희여사님의 66번째 생신을 축하드립니다!",
		siteName: "정여사님의 생신을 축하합니다",
		images: { url: "https://mrs-yh-s-birthday-card.vercel.app/assets/images/yu-open-graph.png" },
		url: "https://mrs-yh-s-birthday-card.vercel.app",
		type: "website",
	},
};

interface RootLayoutProps {
	children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
	return (
		<html lang="ko">
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
