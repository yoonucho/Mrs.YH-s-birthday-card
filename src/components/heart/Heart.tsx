"use client";

import ClickButton from "../buttons/ClickButton";
import useShowCardStore from "@/stores/useShowCardStore";
import Card from "../cards/Card";
import styles from "./heart.module.css";

const Heart: React.FC = () => {
	const { isHeartClose } = useShowCardStore();

	return (
		<div className={styles.container}>
			{isHeartClose ? (
				<div className={styles.inner}>
					<Card />
				</div>
			) : (
				<div className={styles.clickInner}>
					<ClickButton />
					<p className={`${styles.clickText} slideX`}>클릭하세요!</p>
				</div>
			)}
		</div>
	);
};

export default Heart;
