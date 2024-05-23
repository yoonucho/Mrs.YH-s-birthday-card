"use client";

import React, { useEffect } from "react";
import HappyBirthDayImg from "../images/HappyBirthDayImg";
import useShowContentStore from "@/stores/useShowContentStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./cardBody.module.css";

const CardBody: React.FC = () => {
	const { showContent, showScrollButton } = useShowContentStore();
	const setShowContent = useShowContentStore(state => state.setShowContent);

	const scrollToContent = (): void => {
		// showContent 상태를 토글
		setShowContent();
	};

	useEffect(() => {
		const element = document.querySelector(`.${styles.cardBody}`) as HTMLElement;
		if (element) {
			const yCoord = element.offsetHeight + 250;
			// console.log(yCoord);
			window.scrollTo({ top: yCoord, behavior: "smooth" });
		}
	}, [showContent]);

	return (
		<div data-testid="card-body" className={styles.cardBody}>
			<HappyBirthDayImg />
			{showScrollButton && (
				<button aria-label="화살표 클릭하면 숨겨진 콘텐츠로 이동" data-testid="scroll-btn" className={styles.scrollBtn} onClick={scrollToContent}>
					<span className={styles.btnText}>화살표버튼을 클릭해주세요!</span>
					<span className={`fa-2x up`}>
						<FontAwesomeIcon icon={showContent ? faChevronUp : faChevronDown} />
					</span>
				</button>
			)}
		</div>
	);
};

export default CardBody;
