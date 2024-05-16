"use client";

import { useEffect } from "react";
import CardHeader from "./happy-birthday-card/CardHeader";
import CardBody from "./happy-birthday-card/CardBody";
import CardFooter from "./happy-birthday-card/CardFooter";
import useShowContentStore from "@/stores/useShowContentStore";
import styles from "./cardContent.module.css";

const HappyBirthDayCard: React.FC = () => {
	const { showContent } = useShowContentStore();

	useEffect(() => {
		const element = document.querySelector(`.${styles.hiddenContainer}`) as HTMLElement;
		if (element) {
			const yCoord = element.offsetHeight - 50;
			// console.log(yCoord);
			window.scrollTo({ top: yCoord, behavior: "smooth" });
		}
	}, [showContent]);

	return (
		<div className={styles.container}>
			<article className={styles.cardInner}>
				<CardHeader />
				<CardBody />
				<CardFooter />
			</article>
		</div>
	);
};

export default HappyBirthDayCard;
