import { Suspense } from "react";
import Loading from "@/components/icons/loading/LoadingIcon";
import Heart from "@/components/heart/Heart";
import styles from "./page.module.css";

export const metadata = {
	title: "Home",
};

// const Main = lazy(() => import("@/components/heart/Heart"));

export default function HomePage() {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<div className={styles.container}>
					<Heart />
				</div>
			</Suspense>
		</>
	);
}

export const runtime = "edge";
