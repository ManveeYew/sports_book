import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { api } from "@/app/services/api";
import { useUserStore } from "./useUserStore";

interface AuthState {
  token?: string;
  isHydrated: boolean;
  isLoggedIn: boolean;
  setIsHydrated: () => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;

  login: (data: { email: string; password: string }) => Promise<any>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: undefined,
      isHydrated: false,
      isLoggedIn: false,

      login: async ({ email, password }) => {
        // const response = await api.login({ email, password });
        // const token = response.data.token;
        const token = "test";
        // const { fetchUser } = useUserStore.getState();
        // await fetchUser(token);

        set({ token, isLoggedIn: true });
        return token;
      },

      logout: async () => {
        // try {
        //   await api.logout();
        // } catch (error) {
        //   // Optionally handle or log error
        //   console.error("Logout failed:", error);
        // }

        // This runs no matter what (success or failure)
        // const { setUser } = useUserStore.getState();
        // setUser(null);
        set({
          token: undefined,
          isLoggedIn: false,
        });
      },

      setIsHydrated: () => set({ isHydrated: true }),

      setIsLoggedIn: (isLoggedIn) => {
        set({ isLoggedIn: isLoggedIn });
      },
    }),
    {
      name: "authSessionWeb",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setIsHydrated();
      },
    }
  )
);
