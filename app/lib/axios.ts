import axios from "axios";
import { useAuthStore } from "@/store/useAuthStore"; // update path as needed
import { getErrorMessage } from "../services/getErrorMessage";

const memberAxios = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL + "/member-api" ||
    "https://lambo-club-backend.test/member-api",
});

memberAxios.interceptors.request.use((config) => {
  const { token } = useAuthStore.getState();

  if (token && !config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // if (language) {
  //   config.headers["Accept-Language"] = language;
  // }

  return config;
});

memberAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { isLoggedIn, logout } = useAuthStore.getState();
    const status = error.response?.status;
    const error_message = getErrorMessage(error);

    // Get the original request URL
    const requestUrl = error.config?.url;

    // Skip handling if the failed request is the logout endpoint
    const isLogoutEndpoint = requestUrl?.includes("/logout");

    if (
      status === 401 &&
      error_message === "Unauthenticated." &&
      isLoggedIn &&
      !isLogoutEndpoint
    ) {
      await logout(); // clear auth state
      window.location.href = "/";
    }

    return Promise.reject(error); // let others handle the error
  }
);

export { memberAxios };
