import TypeWriterText from "./TypeWriterText";
import styles from "./cardHeader.module.css";

const CardHeader: React.FC = () => {
	return (
		<div data-testid="card-header" className={`${styles.cardHeader} fadeIn`}>
			<h1>🎉정여사님오신날🎉 </h1>
			<TypeWriterText />
		</div>
	);
};

export default CardHeader;
