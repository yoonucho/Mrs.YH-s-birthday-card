"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import styles from "./music.module.css";

export default function HappyBirthDayMusic() {
	const effectSoundRef = useRef<HTMLAudioElement>(null);
	const birthdayMusicRef = useRef<HTMLAudioElement>(null);
	const [showPlayButton, setShowPlayButton] = useState(false);

	useEffect(() => {
		// effectSoundRef.current를 지역 변수에 할당
		const effectAudio = effectSoundRef.current;

		const handleEffectEnd = () => {
			if (birthdayMusicRef.current) {
				birthdayMusicRef.current?.play();
				setShowPlayButton(true);
			}
		};

		if (effectAudio) {
			effectAudio.play();
			effectAudio.addEventListener("ended", handleEffectEnd);
		}

		return () => {
			if (effectAudio) {
				effectAudio.removeEventListener("ended", handleEffectEnd);
			}
		};
	}, []);

	const pauseMusic = () => {
		if (birthdayMusicRef.current) {
			birthdayMusicRef.current.pause();
		}
	};

	const rePlayMusic = () => {
		if (birthdayMusicRef.current) {
			birthdayMusicRef.current.play();
		}
	};

	return (
		<div>
			<audio ref={effectSoundRef} src="/sounds/happy-birthday-crowd.mp3" />
			{/* <audio ref={birthdayMusicRef} src="/sounds/happy-birthday-to-you.mp3" muted /> */}
			<audio ref={birthdayMusicRef} src="/sounds/happy-birthday-to-you.mp3" loop />
			{showPlayButton && (
				<div className={styles.container}>
					<div className={styles.inner}>
						<span>재시작</span>
						<button className="fa-2x" onClick={rePlayMusic}>
							<FontAwesomeIcon icon={faPlay} />
						</button>
					</div>
					<div className={styles.inner}>
						<span>멈춤</span>
						<button className="fa-2x" onClick={pauseMusic}>
							<FontAwesomeIcon icon={faPause} />
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
