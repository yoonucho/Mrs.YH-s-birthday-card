"use client";

import ClickButton from "../buttons/click-button/ClickButton";
import useShowCardStore from "@/app/stores/useShowCardStore";
import styles from "./heart.module.css";

export default function Heart() {
	const { isCardOpen, showCard } = useShowCardStore();

	return (
		<>
			<div className={styles.container}>
				<ClickButton />
				<p className={`${styles.clickText} slideX`}>클릭하세요!</p>
			</div>
		</>
	);
}
