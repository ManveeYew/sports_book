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

type UiType = "mobile" | "desktop";

type AppState = {
  isLoaded: boolean;
  user: User | null;
  settings: Settings | null;
  uiType: UiType | null;

  setUiType: (type: UiType) => void;
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
      uiType: null,

      setUiType: (type) => set({ uiType: type }),
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
