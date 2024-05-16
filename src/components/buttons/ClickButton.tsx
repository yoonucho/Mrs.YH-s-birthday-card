import React, { useRef } from "react";
import HeartIcon from "../icons/heart/HeartIcon";
import useShowCardStore from "@/stores/useShowCardStore";
import styles from "./clickBtn.module.css";

const ClickButton: React.FC = () => {
	// useShowCardStore에서 isCardOpen을 가져옴
	const { closeHeart } = useShowCardStore();
	// useRef를 사용하여 audio 태그에 접근
	const audioRef = useRef<HTMLAudioElement>(null);

	const handleClick = (): void => {
		if (audioRef.current) {
			audioRef.current?.play();
			audioRef.current.onended = (): void => closeHeart();
		}
	};

	return (
		<div className={styles.container}>
			<audio ref={audioRef} src="/sounds/click-button.wav" />
			<button aria-label="하트아이콘 클릭" className={styles.clickBtn} onClick={handleClick}>
				<HeartIcon />
			</button>
		</div>
	);
};

export default ClickButton;
