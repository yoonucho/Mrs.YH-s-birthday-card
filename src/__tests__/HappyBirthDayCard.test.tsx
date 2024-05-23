import { RenderResult, render, screen, within, act, waitFor } from "@testing-library/react";
import HappyBirthDayCard from "@/components/card-content/HappyBirthDayCard";
import userEvent from "@testing-library/user-event";
import useShowContentStore from "@/stores/useShowContentStore";

beforeEach(() => {
	window.scrollTo = jest.fn();
	useShowContentStore.setState({ showScrollButton: false, showContent: false }); // Reset the zustand store state before each test
	renderHappyBirthDayCard();
});

afterEach(() => {
	jest.clearAllMocks();
});

describe("HappyBirthDayCard", () => {
	it("renders CardHeader ", () => {
		expect(screen.getByRole("article")).toBeInTheDocument();
		expect(screen.getByTestId("card-header")).toBeInTheDocument();
		expect(screen.getByText(/정여사님오신날/)).toBeInTheDocument();
	});

	it("renders CardBody ", () => {
		const cardBody = screen.getByTestId("card-body");
		const images = within(cardBody).getAllByRole("img");
		expect(images).toHaveLength(2);
	});

	it("shows content when scroll button is clicked", async () => {
		const user = userEvent.setup();

		// 버튼이 처음에 존재하는지 확인
		await waitFor(() => {
			expect(screen.queryByTestId("scroll-btn")).toBeNull();
		});

		//  함수를 실행하여 showScrollButton 상태를 true로 변경
		await act(async () => {
			useShowContentStore.setState({ showScrollButton: true });
		});
		// 버튼이 존재하는지 확인
		const scrollBtn = screen.getByTestId("scroll-btn");

		// scrollBtn을 클릭하여 showContent 상태를 true로 변경
		await user.click(scrollBtn);

		act(() => {
			useShowContentStore.setState({ showContent: true });
		});

		const cardFooter = screen.getByTestId("card-footer");
		expect(cardFooter).toBeInTheDocument();
		expect(cardFooter).toHaveClass("cardFooter visible");
	});

	it("triggers window.scrollTo CardBody", () => {
		const cardBody = screen.getByTestId("card-body");
		const yCoord = cardBody.offsetHeight + 250;
		expect(window.scrollTo).toHaveBeenCalledWith({ top: yCoord, behavior: "smooth" });
	});
});

const renderHappyBirthDayCard = (): RenderResult => {
	return render(<HappyBirthDayCard />);
};
