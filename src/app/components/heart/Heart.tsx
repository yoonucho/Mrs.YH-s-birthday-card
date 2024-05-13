"use client";

import ClickButton from "../buttons/click-button/ClickButton";
import useShowCardStore from "@/app/stores/useShowCardStore";
import Card from "../cards/Card";
import styles from "./heart.module.css";

export default function Heart() {
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
}
