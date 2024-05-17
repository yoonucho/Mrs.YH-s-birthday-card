"use client";

import CardHeader from "./happy-birthday-card/CardHeader";
import CardBody from "./happy-birthday-card/CardBody";
import CardFooter from "./happy-birthday-card/CardFooter";
import styles from "./cardContent.module.css";

const HappyBirthDayCard: React.FC = () => {
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
