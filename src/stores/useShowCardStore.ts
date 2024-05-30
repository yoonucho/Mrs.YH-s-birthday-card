import { create } from "zustand";

type ShowCardState = {
	isHeartClose: boolean;
	isCardOpen: boolean;
	closeHeart: () => void;
	showCard: () => void;
};

const useShowCardStore = create<ShowCardState>(set => ({
	isHeartClose: false,
	isCardOpen: false,
	closeHeart: (): void => set({ isHeartClose: true }),
	showCard: (): void => set({ isCardOpen: true }),
}));

export default useShowCardStore;
export type { ShowCardState };
