import Image from "next/image";
import styles from "@/styles/logo.module.css";

export default function Logo() {
	return (
		<div className={styles.iconContainer}>
			<Image className={styles.icon} src="/assets/images/bh_logo-w.png" alt="logo icon" width={0} height={0} sizes="100vw" />
		</div>
	);
}
