import Image from "next/image";
import styles from "./birthday-images.module.css";

export default function HappyBirthDayImg() {
	return (
		<div className={`${styles.container} fadeIn`}>
			<figure className={styles.inner}>
				<Image src="/assets/images/birthday-left.png" alt="happy birthday img" width={0} height={0} sizes="100vw" />
				<Image src="/assets/images/birthday-right.png" alt="happy birthday img" width={0} height={0} sizes="100vw" />
			</figure>
		</div>
	);
}
