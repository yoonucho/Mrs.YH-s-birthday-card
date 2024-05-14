"use client";

import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Youtube from "./youtube/Youtube";
import HappyBirthDayImg from "./images/HappyBirthDayImg";
import AuthorList from "./author/AuthorList";
import styles from "./cardContent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function HappyBirthDayCard() {
	const [showScrollButton, setShowScrollButton] = useState(false);
	const [showContent, setShowContent] = useState(false);

	useEffect(() => {
		const element = document.querySelector(`.${styles.hiddenContainer}`) as HTMLElement;
		if (element) {
			const yCoord = element.offsetHeight - 50;
			console.log(yCoord);
			window.scrollTo({ top: yCoord, behavior: "smooth" });
		}
	}, [showContent]);

	const scrollToContent = () => {
		// showContent 상태를 토글
		setShowContent(prev => !prev);
	};

	return (
		<div className={styles.container}>
			<article className={styles.cardInner}>
				{/* <figure className={styles.cardImg}>
					<Image src="/assets/images/card-img.jpg" alt="happy birthday card" width={0} height={0} sizes="100vw" />
				</figure> */}
				<div className={`${styles.cardHeader} fadeIn`}>
					<h1>🎉정여사님 오신날🎉 </h1>
					<Typewriter
						onInit={typewriter => {
							typewriter
								.pauseFor(2000)
								.typeString('<span style="color: #DA70D6;font-size: 4rem">정윤희</span>여사님의 16번째')
								.deleteChars(4)
								.typeString('<strong><span style="color: var(--accent-color);font-size: 4rem">66</span></strong>번째 ')
								.typeString("탄신 경축")
								.deleteChars(6)
								.typeString('<strong><span style="color: #DA70D6;font-size: 4rem"> 생신</span>을 <span style="color: #DA70D6;font-size: 4rem">축하</span></strong>드립니다!')
								.callFunction(() => {
									setShowScrollButton(true);
								})
								.start();
						}}
					/>
				</div>
				<div className={styles.cardBody}>
					<HappyBirthDayImg />
					{showScrollButton && (
						<button className={styles.scrollBtn} onClick={scrollToContent}>
							<span className={styles.btnText}>화살표버튼을 클릭해주세요!</span>
							<span className={`fa-2x up`}>
								<FontAwesomeIcon icon={showContent ? faChevronUp : faChevronDown} />
							</span>
						</button>
					)}
				</div>

				<div className={`${styles.hiddenContainer} ${showContent ? `${styles.visible}` : ""}`}>
					<Youtube />
					<AuthorList />
				</div>
			</article>
		</div>
	);
}
