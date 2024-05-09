import { Suspense, lazy } from "react";
import Loading from "../components/icons/LoadingIcon";
import Logo from "../components/Logo";

export const metadata = {
	title: "Home",
};

// const Main = lazy(() => import("@/components/home/Main"));

export default function HomePage() {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<Logo />
			</Suspense>
		</>
	);
}

export const runtime = "edge";
