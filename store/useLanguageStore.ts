import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Language = "en" | "zh";

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: "en", // default language
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: "languageSessionWeb",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {},
    }
  )
);
