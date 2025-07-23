"use client";
import Loader from "@/app/components/Loader";
import React, { useEffect, useRef } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Page = () => {
  const homeRef = useRef(null);
  const { isLoggedIn, isHydrated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isHydrated && !isLoggedIn) {
      router.push("/");
      toast.error("Please Relogin");
    }
  }, [isHydrated, isLoggedIn, router]);

  return (
    <div
      ref={homeRef}
      className="relative flex flex-1 min-h-screen w-screen bg-white"
    >
      {!isHydrated && (
        <div className="flex justify-center items-center h-screen bg-white">
          <Loader />
        </div>
      )}

      {isHydrated && isLoggedIn && (
        <div className="flex flex-1 justify-center items-center">
          <span>Home</span>
        </div>
      )}
    </div>
  );
};

export default Page;
