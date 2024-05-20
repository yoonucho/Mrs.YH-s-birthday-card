import { RenderResult, render, screen, within } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import HappyBirthDayCard from "../components/card-content/HappyBirthDayCard";
import useShowContentStore from "@/stores/useShowContentStore";
import { act } from "@testing-library/react";

const originalState = useShowContentStore.getState();

beforeEach(() => {
	useShowContentStore.setState(originalState);
});

describe("HappyBirthDayCard", () => {
	beforeEach(() => {
		window.scrollTo = jest.fn();

		// useShowContentStore.setState({ showContent: false });
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("renders CardHeader ", () => {
		renderHappyBirthDayCard();

		expect(screen.getByRole("article")).toBeInTheDocument();
		expect(screen.getByTestId("card-header")).toBeInTheDocument();
		expect(screen.getByText(/정여사님오신날/)).toBeInTheDocument();
	});

	it("triggers window.scrollTo CardBody", () => {
		renderHappyBirthDayCard();

		const cardBody = screen.getByTestId("card-body");
		const yCoord = cardBody.offsetHeight + 250;

		expect(window.scrollTo).toHaveBeenCalledWith({ top: yCoord, behavior: "smooth" });
	});

	it("renders CardBody ", () => {
		renderHappyBirthDayCard();

		const cardBody = screen.getByTestId("card-body");
		const images = within(cardBody).getAllByRole("img");
		expect(images).toHaveLength(2);
	});

	it("renders CardFooter ", () => {
		renderHappyBirthDayCard();

		let cardFooter = screen.getByTestId("card-footer");
		expect(cardFooter).toHaveClass("cardFooter");
		expect(cardFooter).not.toHaveClass("visible");

		// Mock showContent to be true and rerender
		act(() => {
			useShowContentStore.setState({ showContent: true });
		});
		cardFooter = screen.getByTestId("card-footer");
		expect(cardFooter).toHaveClass("cardFooter visible");
	});
});

const renderHappyBirthDayCard = (): RenderResult => {
	return render(<HappyBirthDayCard />);
};
