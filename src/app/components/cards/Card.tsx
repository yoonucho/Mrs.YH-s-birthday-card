"use client";

import OpenCard from "./OpenCard";
import CloseCard from "./CloseCard";
import useShowCardStore from "@/app/stores/useShowCardStore";
import styles from "./card.module.css";

export default function Card() {
	const { isCardOpen } = useShowCardStore();

	return (
		<div className={styles.container}>
			{isCardOpen ? (
				<>
					<OpenCard />
				</>
			) : (
				<>
					<CloseCard />
				</>
			)}
		</div>
	);
}
