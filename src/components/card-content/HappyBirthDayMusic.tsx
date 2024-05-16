"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faMusic } from "@fortawesome/free-solid-svg-icons";
import styles from "./music.module.css";

const HappyBirthDayMusic: React.FC = () => {
	const effectSoundRef = useRef<HTMLAudioElement>(null);
	const birthdayMusicRef = useRef<HTMLAudioElement>(null);
	const [showPlayButton, setShowPlayButton] = useState(false);

	useEffect(() => {
		// effectSoundRef.current를 지역 변수에 할당
		const effectAudio = effectSoundRef.current;

		const handleEffectEnd = (): void => {
			if (birthdayMusicRef.current) {
				birthdayMusicRef.current?.play();
				setShowPlayButton(true);
			}
		};

		if (effectAudio) {
			effectAudio.play();
			effectAudio.addEventListener("ended", handleEffectEnd);
		}

		return (): void => {
			if (effectAudio) {
				effectAudio.removeEventListener("ended", handleEffectEnd);
			}
		};
	}, []);

	const pauseMusic = (): void => {
		if (birthdayMusicRef.current) {
			birthdayMusicRef.current.pause();
		}
	};

	const rePlayMusic = (): void => {
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
						<FontAwesomeIcon icon={faMusic} />
						<span>BGM</span>
						<span>재시작</span>
						<button aria-label="재시작" className="fa-2x" onClick={rePlayMusic}>
							<FontAwesomeIcon icon={faPlay} />
						</button>
					</div>
					<div className={styles.inner}>
						<span>멈춤</span>
						<button aria-label="음악 멈춤" className="fa-2x" onClick={pauseMusic}>
							<FontAwesomeIcon icon={faPause} />
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default HappyBirthDayMusic;
