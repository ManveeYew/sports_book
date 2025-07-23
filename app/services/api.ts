// app/services/api.ts
import { memberAxios } from "@/app/lib/axios";

export const api = {
  login: (payload: { email: string; password: string }) =>
    memberAxios.post("/login", payload).then((res) => res.data),

  logout: () => memberAxios.post("/logout").then((res) => res.data),

  getUser: (token: string) =>
    memberAxios
      .get("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data),
};
