import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import styles from "./youtube.module.css";

export default function Youtube() {
	const videoID = "w4fOQDxMmIQ";
	return (
		<>
			<div className={`${styles.container}`}>
				<a href={`https://www.youtube.com/watch?v=${videoID}`} target="_blank" rel="noopener noreferrer">
					<Image src={`/assets/images/youtube-img.png`} alt="Watch on YouTube" width={310} height={560} />
					<span className="fa-6x">
						<FontAwesomeIcon icon={faCirclePlay} />
					</span>
				</a>
			</div>
		</>
	);
}
