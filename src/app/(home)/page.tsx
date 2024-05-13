import { Suspense, lazy } from "react";
import Loading from "../components/icons/loading/LoadingIcon";
import Heart from "../components/heart/Heart";
import styles from "./page.module.css";

export const metadata = {
	title: "Home",
};

// const Main = lazy(() => import("@/components/home/Main"));

export default function HomePage() {
	return (
		<>
			<div className={styles.container}>
				<Heart />
			</div>
		</>
	);
}

export const runtime = "edge";
