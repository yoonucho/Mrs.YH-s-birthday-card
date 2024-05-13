import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Logo from "../icons/logo/Logo";
import Image from "next/image";
import styles from "./card.module.css";
export default function OpenCard() {
	const audioRef = useRef<HTMLAudioElement>(null);
	const router = useRouter();

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current?.play();
			audioRef.current.onended = () => router.push("/card-content");
		}
	});

	return (
		//  <div className={`${styles.container}`}>
		<div className={`${styles.container} ballonRise`}>
			<audio ref={audioRef} src="/sounds/card-rise.wav" />
			<Logo />
			<Image src="/assets/images/open-card.svg" alt="open card" width={300} height={300} />
		</div>
	);
}
