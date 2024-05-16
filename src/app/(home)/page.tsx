import { Suspense } from "react";
import Loading from "@/components/icons/loading/LoadingIcon";
import Heart from "@/components/heart/Heart";
import styles from "./page.module.css";

export const metadata = {
	title: "Home",
};

// const Main = lazy(() => import("@/components/heart/Heart"));

const HomePage: React.FC = () => {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<div className={styles.container}>
					<Heart />
				</div>
			</Suspense>
		</>
	);
};

export default HomePage;

export const runtime = "edge";
