import OpenCard from "./OpenCard";
import CloseCard from "./CloseCard";
import useShowCardStore from "@/stores/useShowCardStore";

const Card: React.FC = () => {
	const { isCardOpen } = useShowCardStore();

	return (
		<>
			{isCardOpen ? (
				<>
					<OpenCard />
				</>
			) : (
				<>
					<CloseCard />
				</>
			)}
		</>
	);
};

export default Card;
