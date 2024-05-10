import { Suspense, lazy } from "react";
import Loading from "../components/icons/LoadingIcon";
import ClickButton from "../components/buttons/ClickButton";
import styles from "@/styles/page.module.css";

export const metadata = {
	title: "Home",
};

// const Main = lazy(() => import("@/components/home/Main"));

export default function HomePage() {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<div className={styles.container}>
					<ClickButton />
					<p className={`${styles.clickText} slideX`}>클릭하세요!</p>
				</div>
			</Suspense>
		</>
	);
}

export const runtime = "edge";
