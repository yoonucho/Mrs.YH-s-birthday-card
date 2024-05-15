import React, { useRef } from "react";
import HeartIcon from "../icons/heart/HeartIcon";
import useShowCardStore from "@/stores/useShowCardStore";
import styles from "./clickBtn.module.css";

export default function ClickButton() {
	// useShowCardStore에서 isCardOpen을 가져옴
	const { closeHeart } = useShowCardStore();
	// useRef를 사용하여 audio 태그에 접근
	const audioRef = useRef<HTMLAudioElement>(null);

	const handleClick = () => {
		if (audioRef.current) {
			audioRef.current?.play();
			audioRef.current.onended = () => closeHeart();
		}
	};

	return (
		<div className={styles.container}>
			<audio ref={audioRef} src="/sounds/click-button.wav" />
			<button className={styles.clickBtn} onClick={handleClick}>
				<HeartIcon />
			</button>
		</div>
	);
}
