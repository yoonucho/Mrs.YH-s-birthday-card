import HappyBirthDayCard from "@/components/card-content/HappyBirthDayCard";
import HappyBirthDayMusic from "@/components/card-content/HappyBirthDayMusic";

const CardContent: React.FC = () => {
	return (
		<div>
			<HappyBirthDayMusic />
			<HappyBirthDayCard />
		</div>
	);
};

export default CardContent;
