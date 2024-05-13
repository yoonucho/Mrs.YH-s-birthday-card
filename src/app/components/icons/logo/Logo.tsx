import Image from "next/image";
import styles from "./logo.module.css";

export default function Logo() {
	return (
		<div className={styles.iconContainer}>
			<Image className={styles.icon} src="/assets/images/logo-w.png" alt="logo icon" width={100} height={100} sizes="100vw" />
		</div>
	);
}
