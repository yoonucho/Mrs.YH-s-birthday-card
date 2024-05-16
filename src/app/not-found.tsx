"use client";
import Image from "next/image";
import styles from "./not-found.module.css";
import { useRouter } from "next/navigation";

const NotFound: React.FC = () => {
	const router = useRouter();
	const handleClick = (): void => {
		router.back();
	};

	return (
		<main className={styles.container}>
			<Image src="/assets/images/message-icon.svg" alt="not found" width={500} height={500} />
			<h1 className={styles.errorText}>요청하신 페이지가 존재하지 않습니다.</h1>
			<button aria-label="Home으로 가기" className={styles.backBtn} onClick={handleClick}>
				Home으로 가기
			</button>
		</main>
	);
};

export default NotFound;
