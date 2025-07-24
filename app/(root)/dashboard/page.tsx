"use client";
import Loader from "@/app/components/Loader";
import React, { useEffect, useRef } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import BannerCarousel from "./components/BannerCarousel";
import MatchList from "./components/MatchList/MatchList";

const Page = () => {
  const homeRef = useRef(null);
  const { isLoggedIn, isHydrated } = useAuthStore();
  const router = useRouter();

  return (
    <div ref={homeRef} className="relative flex flex-1 min-h-screen bg-white">
      {!isHydrated && (
        <div className="flex justify-center items-center h-screen bg-white">
          <Loader />
        </div>
      )}

      {isHydrated && isLoggedIn && (
        <div className="flex flex-1 flex-col">
          <BannerCarousel />
          <div className="p-2">
            <MatchList />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
