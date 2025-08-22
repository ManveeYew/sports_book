import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Currency = "MY" | "HK" | "EU";

interface CurrencyState {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

export const useCurrencyStore = create<CurrencyState>()(
  persist(
    (set, get) => ({
      currency: "MY", // default currency
      setCurrency: (currency) => set({ currency }),
    }),
    {
      name: "currencySessionWeb",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {},
    }
  )
);
