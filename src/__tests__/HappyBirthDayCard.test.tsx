import { RenderResult, render, screen, within, act, waitFor } from "@testing-library/react";
import HappyBirthDayCard from "@/components/card-content/HappyBirthDayCard";
import userEvent from "@testing-library/user-event";
import useShowContentStore from "@/stores/useShowContentStore";

beforeEach(() => {
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
			expect(screen.queryByTestId("scroll-btn")).toBeNull();
			console.log("버튼이 존재하지 않습니다.");
		});

		//  함수를 실행하여 showScrollButton 상태를 true로 변경
		await act(async () => {
			useShowContentStore.setState({ showScrollButton: true });
			console.log("버튼이 존재합니다.");
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
		console.log("cardFooter 콘텐츠가 보입니다.");

		expect(cardFooter).toHaveClass("cardFooter visible");
	});

	it("triggers window.scrollTo CardBody", () => {
		renderHappyBirthDayCard();

		const cardBody = screen.getByTestId("card-body");
		const yCoord = cardBody.offsetHeight + 250;

		expect(window.scrollTo).toHaveBeenCalledWith({ top: yCoord, behavior: "smooth" });
	});
});

const renderHappyBirthDayCard = (): RenderResult => {
	return render(<HappyBirthDayCard />);
};
