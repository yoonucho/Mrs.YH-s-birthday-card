import Image from "next/image";
import useShowCardStore from "@/app/stores/useShowCardStore";
import styles from "./card.module.css";

export default function CloseCard() {
	const { showCard } = useShowCardStore();
	const handleClick = () => {
		showCard();
	};
	return (
		<div className={styles.container}>
			<button onClick={handleClick}>
				<Image src="/assets/images/close-card.svg" alt="close card" width={300} height={300} />
			</button>
		</div>
	);
}
