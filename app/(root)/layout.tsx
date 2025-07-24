"use client";
import { useEffect, useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuthStore } from "@/store/useAuthStore";
import Loader from "../components/Loader";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/store/useAppStore";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>{children}</AppLayout>
    </QueryClientProvider>
  );
}

const BREAKPOINT = 768;

function AppLayout({ children }: { children: React.ReactNode }) {
  const appRef = useRef<HTMLDivElement>(null);
  const { isHydrated, isLoggedIn } = useAuthStore();
  const router = useRouter();
  const { uiType, setUiType } = useAppStore();
  const [localLoading, setLocalLoading] = useState(true);
  const [isAppLoading, setIsAppLoading] = useState(true);
  const resizeTimeout = useRef<NodeJS.Timeout | null>(null);

  const determineUI = () => {
    const width = window.innerWidth;
    return width < BREAKPOINT ? "mobile" : "desktop";
  };

  useEffect(() => {
    // Only determine on first load if uiType is null
    if (uiType === null) {
      const type = determineUI();
      setUiType(type);
    }
    setLocalLoading(false);

    const handleResize = () => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);

      setLocalLoading(true); // show loading screen on resize

      resizeTimeout.current = setTimeout(() => {
        const type = determineUI();
        setUiType(type);
        setLocalLoading(false);
      }, 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setUiType, uiType]);

  useEffect(() => {
    if (isHydrated) {
      setIsAppLoading(false);
    }
    if (isHydrated && isLoggedIn) {
      router.push("/dashboard");
    } else if (isHydrated && !isLoggedIn) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHydrated, isLoggedIn]);

  return (
    <main
      ref={appRef}
      className={`flex flex-col min-h-screen relative overflow-hidden font-geistsans ${
        uiType === "mobile" ? "max-h-screen" : ""
      }`}
    >
      {(isAppLoading || localLoading || uiType === null) && (
        <div className="absolute top-0 left-0 flex justify-center items-center h-screen w-screen bg-white z-200">
          <Loader />
        </div>
      )}

      {isHydrated && uiType !== null && (
        <>
          <div className="flex-1 relative">{children}</div>
        </>
      )}
    </main>
  );
}
