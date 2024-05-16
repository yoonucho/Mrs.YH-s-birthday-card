import Youtube from "../youtube/Youtube";
import AuthorList from "../author/AuthorList";
import useShowContentStore from "@/stores/useShowContentStore";
import styles from "./cardFooter.module.css";

const CardFooter: React.FC = () => {
	const { showContent } = useShowContentStore();
	return (
		<div className={`${styles.cardFooter} ${showContent ? `${styles.visible}` : ""}`}>
			<Youtube />
			<AuthorList />
		</div>
	);
};

export default CardFooter;
