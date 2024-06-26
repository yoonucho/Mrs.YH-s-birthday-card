import { create } from "zustand";

type ShowContentState = {
	showScrollButton: boolean;
	showContent: boolean;
	setShowScrollButton: (value: boolean) => void;
	setShowContent: () => void;
}

const useShowContentStore = create<ShowContentState>(set => ({
	showScrollButton: false,
	showContent: false,
	setShowScrollButton: (value: boolean): void => set({ showScrollButton: value }),
	setShowContent: (): void => set(state => ({ showContent: !state.showContent })),
}));

export default useShowContentStore;
export type { ShowContentState };
