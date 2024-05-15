import TypeWriterText from "./TypeWriterText";
import styles from "../cardContent.module.css";

const CardHeader: React.FC = () => {
	return (
		<div className={`${styles.cardHeader} fadeIn`}>
			<h1>🎉정여사님오신날🎉 </h1>
			<TypeWriterText />
		</div>
	);
};

export default CardHeader;
