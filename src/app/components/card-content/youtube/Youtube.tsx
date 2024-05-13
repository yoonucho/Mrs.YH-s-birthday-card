import Image from "next/image";
import styles from "./youtube.module.css";

export default function Youtube() {
	const videoID = "QPOLrbKI5oQ";
	return (
		<div className={styles.container}>
			<a href={`https://www.youtube.com/watch?v=${videoID}`} target="_blank" rel="noopener noreferrer">
				<Image src={`https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`} alt="Watch on YouTube" width={701} height={394} />
			</a>
		</div>
	);
}
