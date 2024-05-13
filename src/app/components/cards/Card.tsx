import OpenCard from "./OpenCard";
import CloseCard from "./CloseCard";
import useShowCardStore from "@/app/stores/useShowCardStore";

export default function Card() {
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
}
