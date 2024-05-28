import { create } from "zustand";

interface ShowCardState {
	isHeartClose: boolean;
	isCardOpen: boolean;
	closeHeart: () => void;
	showCard: () => void;
}

const useShowCardStore = create<ShowCardState>(set => ({
	isHeartClose: false,
	isCardOpen: false,
	closeHeart: () => set({ isHeartClose: true }),
	showCard: () => set({ isCardOpen: true }),
}));

export default useShowCardStore;
export type { ShowCardState };
