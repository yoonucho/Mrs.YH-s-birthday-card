import { RenderResult, render, screen, within, act } from "@testing-library/react";
import HappyBirthDayCard from "@/components/card-content/HappyBirthDayCard";
import { mockUseShowContentStore } from "../utils/mockZustandStore";
import userEvent from "@testing-library/user-event";

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
		const user = userEvent.setup();
		jest.useFakeTimers();

		renderHappyBirthDayCard();

		expect(screen.queryByTestId("scroll-btn")).toBeNull();

		//  3초후에 함수를 실행하여 showScrollButton 상태를 true로 변경
		setTimeout(() => {
			mockUseShowContentStore({ showScrollButton: true });
		}, 3000);

		act(() => {
			// 모든 타이머를 실행
			jest.runAllTimers();
		});

		expect(screen.getByTestId("scroll-btn")).toBeInTheDocument();

		// 타이머를 원래 상태로 복원
		jest.useRealTimers();

		// 버튼이 존재하는지 확인
		const scrollBtn = screen.getByTestId("scroll-btn");

		// scrollBtn을 클릭하여 showContent 상태를 true로 변경
		await user.click(scrollBtn);

		act(() => {
			mockUseShowContentStore({ showContent: true });
		});

		const cardFooter = screen.getByTestId("card-footer");
		// expect(cardFooter).toBeInTheDocument();
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
