"use client";
import { useEffect, useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuthStore } from "@/store/useAuthStore";
import Loader from "../components/Loader";
import { useRouter } from "next/navigation";

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
  const { isHydrated, isLoggedIn } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
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
      className="flex flex-col min-h-screen relative overflow-hidden"
    >
      {!isHydrated && (
        <div className="flex justify-center items-center h-screen bg-white">
          <Loader />
        </div>
      )}

      {isHydrated && (
        <>
          <div className="flex-1 relative">{children}</div>
        </>
      )}
    </main>
  );
}
