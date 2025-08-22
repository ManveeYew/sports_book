"use client";
import Loader from "@/app/components/Loader";
import { UserRound } from "lucide-react";
import React, { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import ThemeToggle from "@/app/components/ThemeToggle";
import { useCurrencyStore } from "@/store/useCurrencyStore";
import CurrencySelectionPopup from "@/app/components/CurrencySelectionPopup";
import { useLanguageStore } from "@/store/useLanguageStore";
import { language_data, currency_data } from "@/constants/constantsData";
import LanguageSelectionPopup from "@/app/components/LanguageSelectionPopup";

const Page = () => {
  const { isLoggedIn, isHydrated } = useAuthStore();
  const { currency } = useCurrencyStore();
  const { language } = useLanguageStore();
  const [isCurrencySelectionPopupOpen, setIsCurrencySelectionPopupOpen] =
    useState(false);
  const [isLanguageSelectionPopupOpen, setIsLanguageSelectionPopupOpen] =
    useState(false);

  return (
    <div className="relative flex flex-1 min-h-screen bg-white">
      {!isHydrated && (
        <div className="flex justify-center items-center h-screen bg-white">
          <Loader />
        </div>
      )}

      {isHydrated && isLoggedIn && (
        <div className="flex flex-col flex-1 bg-gray-300">
          <div className="flex flex-row bg-[rgb(43,43,51)] p-3 px-4">
            <span className="text-lg font-medium text-white">My Account</span>
          </div>
          <div className="bg-gradient-to-b from-[rgb(150,200,233)] to-white p-6">
            <div className="text-lg font-semibold mb-6 flex flex-row items-center">
              <div className="p-2 bg-primary rounded-full mr-4">
                <UserRound className="w-10 h-10 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-black dark:text-white">
                  bjahsbjj123ko
                </span>
              </div>
            </div>
            <div className="flex flex-col bg-white rounded-lg p-4 shadow-md gap-4">
              <div className="flex flex-row justify-between items-center gap-2">
                <span className="text-base text-black">Credit</span>
                <span className="text-base font-semibold text-black">0.00</span>
              </div>
              <div className="flex flex-row justify-between items-center gap-2">
                <span className="text-base text-black">Total Balance</span>
                <span className="text-base font-semibold text-black">
                  100.20
                </span>
              </div>
              <div className="flex flex-row justify-between items-center gap-2">
                <span className="text-base text-black">
                  Remaining Sportsbook Credit Limit
                </span>
                <span className="text-base font-semibold text-black">
                  100.00
                </span>
              </div>
              <div className="flex flex-row justify-between items-center gap-2">
                <span className="text-base text-black">Min/Max Bet</span>
                <span className="text-base font-semibold text-black">
                  0.1 / 1,000
                </span>
              </div>
              <div className="flex flex-row justify-between items-center gap-2">
                <span className="text-base text-black">Total Outstanding</span>
                <span className="text-base font-semibold text-black">
                  0.20 (2 bets)
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row p-2 px-6 bg-gradient-to-r from-secondary to-[rgb(180,230,263)]">
            <span className="text-base font-semibold text-white">
              Display Settings
            </span>
          </div>
          <div className="flex flex-col p-4 px-6 bg-white shadow-md gap-4">
            <div className="flex flex-row justify-between items-center gap-2">
              <span className="text-base font-semibold text-black">
                Odds Type
              </span>
              <div
                className="flex flex-row items-center gap-2 cursor-pointer"
                onClick={() => setIsCurrencySelectionPopupOpen(true)}
              >
                <span className="text-base font-semibold text-black">
                  {currency_data.find((curr) => curr.value === currency)
                    ?.label || ""}
                </span>
                <svg
                  className={`w-5 h-5 rotate-[-90deg] text-secondary`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <hr className="border-gray-300" />
            <div className="flex flex-row justify-between items-center gap-2">
              <span className="text-base font-semibold text-black">
                Language
              </span>
              <div
                className="flex flex-row items-center gap-2 cursor-pointer"
                onClick={() => setIsLanguageSelectionPopupOpen(true)}
              >
                <span className="text-base font-semibold text-black">
                  {language_data.find((lang) => lang.value === language)
                    ?.label || ""}
                </span>
                <svg
                  className={`w-5 h-5 rotate-[-90deg] text-secondary`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <hr className="border-gray-300" />
            <ThemeToggle
              className="!p-1"
              labelClassName="!text-base !font-semibold !text-black"
              switchContainerClassName="!shadow-none border border-secondary rounded-xl"
              switchButtonClassName="!p-1 !px-3 !rounded-md"
              switchImageClassName="!w-6 !h-6"
            />
          </div>

          <span>User</span>
        </div>
      )}

      <CurrencySelectionPopup
        isOpen={isCurrencySelectionPopupOpen}
        onClose={() => setIsCurrencySelectionPopupOpen(false)}
      />

      <LanguageSelectionPopup
        isOpen={isLanguageSelectionPopupOpen}
        onClose={() => setIsLanguageSelectionPopupOpen(false)}
      />
    </div>
  );
};

export default Page;
