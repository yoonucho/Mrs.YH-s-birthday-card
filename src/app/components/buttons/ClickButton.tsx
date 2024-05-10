"use client";
import React, { useRef } from "react";
import HeartIcon from "../icons/HeartIcon";
import styles from "@/styles/clickBtn.module.css";

export default function ClickButton() {
	// useRef를 사용하여 audio 태그에 접근
	const audioRef = useRef<HTMLAudioElement>(null);

	const handleClick = () => {
		if (audioRef.current) audioRef.current?.play();
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
