import { create } from "zustand";

interface ShowScrollButtonState {
	showScrollButton: boolean;
	setShowScrollButton: (value: boolean) => void;
}

const useShowContentStore = create<ShowScrollButtonState>(set => ({
	showScrollButton: false,
	setShowScrollButton: (value: boolean): void => set({ showScrollButton: value }),
}));

export default useShowContentStore;
