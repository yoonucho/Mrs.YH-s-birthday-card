import { create } from "zustand";

interface ShowCardState {
	isCardOpen: boolean;
	showCard: () => void;
}

const useShowCardStore = create<ShowCardState>(set => ({
	isCardOpen: false,
	showCard: () => set({ isCardOpen: true }),
}));

export default useShowCardStore;
