import useShowCardStore, { ShowCardState } from "@/stores/useShowCardStore";
import useShowContentStore, { ShowContentState } from "@/stores/useShowContentStore";

type StoreHook<T> = {
	getState: () => T;
	setState: (state: Partial<T>, replace?: boolean) => void;
};

// mockStore 함수 정의
const mockStore = <T,>(hook: StoreHook<T>, state: Partial<T>): void => {
	hook.setState(state, true);
};

// mockUseShowCardStore 함수 정의
export const mockUseShowCardStore = (state: Partial<ShowCardState>): void => {
	mockStore(useShowCardStore, state);
};

// mockUseShowContentStore 함수 정의
export const mockUseShowContentStore = (state: Partial<ShowContentState>): void => {
	const currentState = useShowContentStore.getState();
	mockStore(useShowContentStore, { ...currentState, ...state });
};
