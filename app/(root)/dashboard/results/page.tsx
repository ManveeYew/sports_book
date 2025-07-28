"use client";
import Loader from "@/app/components/Loader";
import React from "react";
import { useAuthStore } from "@/store/useAuthStore";

const Page = () => {
  const { isLoggedIn, isHydrated } = useAuthStore();

  return (
    <div className="relative flex flex-1 min-h-screen bg-white">
      {!isHydrated && (
        <div className="flex justify-center items-center h-screen bg-white">
          <Loader />
        </div>
      )}

      {isHydrated && isLoggedIn && (
        <div className="flex flex-1 justify-center items-center">
          <span>Results</span>
        </div>
      )}
    </div>
  );
};

export default Page;
