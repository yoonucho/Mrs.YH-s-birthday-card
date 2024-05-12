import Image from "next/image";
import styles from "./card.module.css";
export default function OpenCard() {
	return (
		<div className={styles.container}>
			<Image src="/assets/images/open-card.svg" alt="open card" width={300} height={300} />
		</div>
	);
}
