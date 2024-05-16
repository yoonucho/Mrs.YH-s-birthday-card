import HappyBirthDayImg from "../images/HappyBirthDayImg";
import useShowContentStore from "@/stores/useShowContentStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "../cardContent.module.css";
import Card from "@/components/cards/Card";

const CardBody: React.FC = () => {
	const { showContent, showScrollButton } = useShowContentStore();
	const setShowContent = useShowContentStore(state => state.setShowContent);

	const scrollToContent = (): void => {
		// showContent 상태를 토글
		setShowContent();
	};

	return (
		<div className={styles.cardBody}>
			<HappyBirthDayImg />
			{showScrollButton && (
				<button aria-label="화살표 클릭하면 숨겨진 콘텐츠로 이동" className={styles.scrollBtn} onClick={scrollToContent}>
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
