"use client";
import { X, Check } from "lucide-react";
import React, { useState, useCallback, useEffect } from "react";
import DebouncedButton from "@/app/components/DebouncedButton";

interface MobileBetSuccessPopupProps {
  isOpen: boolean;
  betType: string;
  onClose: () => void;
  onCheckStatement: () => void;
}

const MobileBetSuccessPopup: React.FC<MobileBetSuccessPopupProps> = ({
  isOpen,
  onClose,
  onCheckStatement,
  betType,
}) => {
  const [isLoading] = useState(false);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Bet handler
  const handleBetOthers = useCallback(async () => {
    onClose();
  }, [onClose]);

  const handleCheckStatement = useCallback(async () => {
    onCheckStatement();
  }, [onCheckStatement]);

  const renderPopupUI = () => {
    if (betType === "match") {
      return (
        <>
          <div className="px-4">
            <div className="flex flex-row justify-center items-center py-2 px-6">
              <h2 className="text-base font-semibold text-gray-600">
                {"⚽ China Football Super League"}
              </h2>
            </div>

            <div className="flex flex-row justify-center items-center mb-3 px-6">
              <span className="text-base font-medium">Indonesia</span>
              <span className="text-xs font-bold text-[rgb(227,172,37)] mx-3">
                VS
              </span>
              <span className="text-base font-medium">Malaysia</span>
            </div>

            <div className="p-4 py-3 bg-gradient-to-r from-[rgb(255,148,28)] to-[rgb(255,204,47)] rounded-xl">
              <div className="flex flex-row justify-between items-center gap-2">
                <div className="flex flex-col">
                  <span className="text-base font-medium text-white">
                    Soccer over/under
                  </span>
                  <span className="text-lg font-bold text-white">
                    Liverpool
                  </span>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="py-2 px-4 bg-white rounded-full flex items-center justify-center">
                    <span className="text-base font-bold text-black">0.93</span>
                  </div>
                  <span className="text-sm font-medium text-black">(HK)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white mt-10 pb-6">
            <div className="flex flex-row justify-between">
              <div className="flex w-[50%] px-5">
                <DebouncedButton
                  onClick={handleBetOthers}
                  isLoading={isLoading}
                  className="w-[100%] py-4"
                  debounceDelay={300}
                >
                  <span className="text-base font-bold text-white">
                    Bet on other Events
                  </span>
                </DebouncedButton>
              </div>
              <div className="flex w-[50%] px-5">
                <DebouncedButton
                  onClick={handleCheckStatement}
                  isLoading={isLoading}
                  className="w-[100%] py-4 bg-secondary border-secondary"
                  debounceDelay={300}
                >
                  <span className="text-base font-bold text-white">
                    Check Statement
                  </span>
                </DebouncedButton>
              </div>
            </div>
          </div>
        </>
      );
    } else if (betType === "outright") {
      return (
        <>
          <div className="px-4">
            <div className="flex flex-row justify-center items-center py-2 px-6">
              <h2 className="text-base font-semibold text-gray-600">
                {"⚽ China Football Super League"}
              </h2>
            </div>

            <div className="p-4 py-3 bg-gradient-to-r from-[rgb(255,148,28)] to-[rgb(255,204,47)] rounded-xl">
              <div className="flex flex-row justify-between items-center gap-2">
                <div className="flex flex-col">
                  <span className="text-base font-medium text-white">
                    Soccer over/under
                  </span>
                  <span className="text-lg font-bold text-white">
                    Liverpool
                  </span>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="py-2 px-4 bg-white rounded-full flex items-center justify-center">
                    <span className="text-base font-bold text-black">0.93</span>
                  </div>
                  <span className="text-sm font-medium text-black">(HK)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white mt-10 pb-6">
            <div className="flex flex-row justify-between">
              <div className="flex w-[50%] px-5">
                <DebouncedButton
                  onClick={handleBetOthers}
                  isLoading={isLoading}
                  className="w-[100%] py-4"
                  debounceDelay={300}
                >
                  <span className="text-base font-bold text-white">
                    Bet on other Events
                  </span>
                </DebouncedButton>
              </div>
              <div className="flex w-[50%] px-5">
                <DebouncedButton
                  onClick={handleCheckStatement}
                  isLoading={isLoading}
                  className="w-[100%] py-4 bg-secondary border-secondary"
                  debounceDelay={300}
                >
                  <span className="text-base font-bold text-white">
                    Check Statement
                  </span>
                </DebouncedButton>
              </div>
            </div>
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-60 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        onTouchMove={(e) => e.preventDefault()}
        onWheel={(e) => e.preventDefault()}
      />

      {/* Drawer Container - No overflow hidden to allow check icon to show */}
      <div
        className={`fixed bottom-0 left-0 w-full max-h-[90%] transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Check Icon - Outside the main content */}
        {isOpen && (
          <div className="absolute top-[-32px] z-10 left-1/2 transform -translate-x-1/2 bg-success rounded-full p-2 text-white border-4 border-white">
            <Check className="w-10 h-10" />
          </div>
        )}

        {/* Main Content with rounded corners and overflow hidden */}
        <div className="bg-white dark:bg-[rgb(43,43,43)] shadow-lg rounded-t-2xl overflow-hidden flex flex-col h-full">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)] z-20">
              <div className="w-8 h-8 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
            </div>
          )}

          {/* Fixed Header */}
          <div className="flex flex-row items-start justify-between gap-3 p-4 pb-2 flex-shrink-0 bg-success relative">
            <h2 className="text-base font-semibold"></h2>
            <button onClick={onClose} className="text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center px-4 pb-4 flex-shrink-0 bg-success relative text-white">
            <h2 className="text-lg font-bold">Your bet has been accepted</h2>
            <h2 className="text-base font-medium">Ticket ID: HJASDK1239KQSD</h2>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div>{renderPopupUI()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileBetSuccessPopup;
