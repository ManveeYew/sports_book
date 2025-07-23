import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { api } from "@/app/services/api";
import { User } from "@/types/user";
import { useAuthStore } from "./useAuthStore";

interface UserState {
  user?: User | null;
  setUser: (user: User | null) => void;
  fetchUser: (token: string) => Promise<any>;
  refetchUser: () => Promise<any>;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: null,

      setUser: (user) => {
        set({ user });
      },

      fetchUser: async (token) => {
        if (!token) return null;
        const user = await api.getUser(token).then((res) => res.data);
        set({ user });
        return user;
      },

      refetchUser: async () => {
        const { token } = useAuthStore.getState();
        if (!token) return null;
        const user = await api.getUser(token).then((res) => res.data);

        set({ user });
        return user;
      },
    }),
    {
      name: "userSessionWeb",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {},
    }
  )
);

export const useMemberUser = () =>
  useUserStore((state) => state.user as User | null);
