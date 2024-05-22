import { RenderResult, render, screen, within, act, waitFor } from "@testing-library/react";
import HappyBirthDayCard from "../components/card-content/HappyBirthDayCard";
import userEvent from "@testing-library/user-event";
import useShowContentStore from "@/stores/useShowContentStore";
// import { create } from "zustand";

// interface ShowContentState {
// 	showContent: boolean;
// 	showScrollButton: boolean;
// }

// const useShowContentStore = create<ShowContentState>(set => ({
// 	showContent: false,
// 	setShowContent: (): void => set(state => ({ showContent: !state.showContent })),
// 	showScrollButton: false,
// 	setShowScrollButton: (value: boolean): void => set({ showScrollButton: value }),
// }));

const originalState = useShowContentStore.getState();

beforeEach(() => {
	useShowContentStore.setState(originalState, true);
	useShowContentStore.setState({ showContent: false, showScrollButton: true });

	window.scrollTo = jest.fn();
});

afterEach(() => {
	jest.clearAllMocks();
});

describe("HappyBirthDayCard", () => {
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

	it("shows content when scroll button is clicked", async () => {
		renderHappyBirthDayCard();
		const user = userEvent.setup();

		// 버튼이 처음에 존재하는지 확인
		await waitFor(() => {
			expect(screen.getByRole("button"));
			console.log("버튼이 존재합니다.");
		});

		const scrollBtn = screen.getByRole("button");

		// 콘텐츠가 처음에는 보이지 않는지 확인
		const cardFooter = screen.getByTestId("card-footer");
		expect(cardFooter).not.toHaveClass("visible");

		// 버튼을 클릭
		await act(async () => {
			await user.click(scrollBtn);
		});

		expect(cardFooter).toHaveClass("cardFooter visible");
	});
});

const renderHappyBirthDayCard = (): RenderResult => {
	return render(<HappyBirthDayCard />);
};
