"use client";
import { useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useAuthStore } from "@/store/useAuthStore";
import Loader from "../components/Loader";

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

function AppLayout({ children }: { children: React.ReactNode }) {
  const appRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage } = useLanguageStore();
  const { isHydrated } = useAuthStore();

  return (
    <main
      ref={appRef}
      className="flex flex-col min-h-screen relative overflow-hidden"
    >
      {!isHydrated && (
        <div className="flex justify-center items-center h-screen bg-white">
          <Loader />
        </div>
      )}

      {isHydrated && (
        <>
          <div className="absolute top-4 right-4 z-30">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as "en" | "zh")}
              className="p-2 border rounded"
            >
              <option value="en">🇬🇧 English</option>
              <option value="zh">🇨🇳 中文</option>
            </select>
          </div>
          <div className="flex-1 relative">{children}</div>
        </>
      )}
    </main>
  );
}
