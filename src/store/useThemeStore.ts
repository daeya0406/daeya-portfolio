import { create } from "zustand";

interface ThemeStore {
  darkMode: boolean;
  toggle: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  darkMode: true,
  toggle: () => set((s) => ({ darkMode: !s.darkMode })),
}));
