import useShowCardStore, { ShowCardState } from "@/stores/useShowCardStore";
import useShowContentStore, { ShowContentState } from "@/stores/useShowContentStore";

const mockStore = (hook: { getState: () => any; setState: (state: any, replace?: boolean) => void }, state: any) => {
	hook.setState(state, true);
};

export const mockUseShowCardStore = (state: Partial<ShowCardState>) => {
	mockStore(useShowCardStore, state);
};

export const mockUseShowContentStore = (state: Partial<ShowContentState>) => {
	const currentState = useShowContentStore.getState();
	mockStore(useShowContentStore, { ...currentState, ...state });
};
