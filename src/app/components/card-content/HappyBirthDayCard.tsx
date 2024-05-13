"use client";

import Image from "next/image";
import styles from "./cardContent.module.css";
import Typewriter from "typewriter-effect";

export default function HappyBirthDayCard() {
	return (
		<div className={styles.container}>
			<article className={styles.cardInner}>
				<figure className={styles.cardImg}>
					<Image src="/assets/images/card-img.jpg" alt="happy birthday card" width={0} height={0} sizes="100vw" />
				</figure>
				<div className={styles.cardHeader}>
					<h1>HappyBirthDayCard</h1>
				</div>
				<div className={styles.cardBody}>
					<>
						<Typewriter
							onInit={typewriter => {
								typewriter
									.typeString("Hello World!")
									.callFunction(() => {
										console.log("String typed out!");
									})
									.pauseFor(500)
									.typeString("🌹Hello World1")
									.typeString("Hello World2")
									.typeString("Hello World3")
									.typeString("Hello World4")
									.typeString("Hello World5")
									.typeString("Hello World6")
									// .deleteAll()
									.callFunction(() => {
										console.log("All strings were deleted");
									})
									.start();
							}}
						/>
						🌹
					</>
				</div>
				{/* <section className={styles.cardFooter}>
					<h3>이미지 저장하기</h3>
				</section> */}
			</article>
		</div>
	);
}
