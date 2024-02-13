import { create } from 'zustand';

interface BearState {
  count: number;
  increase: () => void;
}

const store = create<BearState>()((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
}));

export default store;
