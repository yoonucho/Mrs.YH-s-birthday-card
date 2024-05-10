import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import styles from "@/styles/heartIcon.module.css";

export default function heartIcon() {
	return (
		<div className={styles.container}>
			<div className="fa-6x">
				<FontAwesomeIcon className={styles.heartIcon} icon={faHeart} beat />
			</div>
		</div>
	);
}
