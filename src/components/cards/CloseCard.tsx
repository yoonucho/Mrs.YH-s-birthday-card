import { useRef } from "react";
import Image from "next/image";
import useShowCardStore from "@/stores/useShowCardStore";
import HeartIcon from "../icons/heart/HeartIcon";
import styles from "./card.module.css";

export default function CloseCard() {
	const { showCard } = useShowCardStore();

	const audioRef = useRef<HTMLAudioElement>(null);

	const handleClick = () => {
		if (audioRef.current) {
			audioRef.current?.play();
			audioRef.current.onended = () => showCard();
		}
	};
	return (
		<div className={styles.container}>
			<button aria-label="카드봉투 클릭" className={`${styles.openCardBtn} up`} onClick={handleClick}>
				<audio ref={audioRef} src="/sounds/card-open.wav" />
				<div className={styles.heartIconContainer}>
					<HeartIcon />
				</div>

				<Image src="/assets/images/close-card.svg" alt="close card" width={0} height={0} sizes="100vw" />
			</button>
			<p className={`${styles.clickText}`}>카드를 클릭하세요!</p>
		</div>
	);
}
