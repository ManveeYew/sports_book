import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

type Settings = {
  theme: "light" | "dark";
};

type AppState = {
  isLoaded: boolean;
  user: User | null;
  settings: Settings | null;

  setLoaded: (value: boolean) => void;
  setUser: (user: User) => void;
  setSettings: (settings: Settings) => void;
  setIsHydrated: () => void;
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      isLoaded: false,
      user: null,
      settings: null,

      setLoaded: (value) => set({ isLoaded: value }),
      setUser: (user) => set({ user }),
      setSettings: (settings) => set({ settings }),
      setIsHydrated: () => set({ isLoaded: true }),
    }),
    {
      name: "appSessionWeb",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setIsHydrated();
      },
    }
  )
);
