"use client";
import { X, SquareX } from "lucide-react";
import React, { useState, useCallback } from "react";
import DebouncedButton from "@/app/components/DebouncedButton";

interface MobileBetPopupProps {
  isOpen: boolean;
  betType: string;
  title: string;
  onClose: () => void;
  onSuccess: () => void;
}

const MobileBetPopup: React.FC<MobileBetPopupProps> = ({
  isOpen,
  onClose,
  onSuccess,
  betType,
  title,
}) => {
  const [numberInput, setNumberInput] = useState("0");
  const [isAmountError, setIsAmountError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Bet handler
  const handleBet = useCallback(async () => {
    setIsLoading(true);
    if (parseFloat(numberInput) <= 0) {
      setIsAmountError(true);
      setIsLoading(false);
      return;
    }
    setIsAmountError(false);

    // Mock delay to simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Handle bet logic here
    console.log(`Bet placed: ${numberInput} for ${betType}`);
    setIsLoading(false);
    setNumberInput("0"); // Reset input after bet
    onSuccess();
  }, [numberInput, betType, onSuccess]);

  const handleNumberInput = (value: string) => {
    if (value === "." && numberInput.includes(".")) {
      return; // Prevent multiple decimal points
    }
    if (value === "." && numberInput === "0") {
      setNumberInput("0.");
      return;
    }
    if (numberInput === "0" && value !== ".") {
      setNumberInput(value);
      return;
    }

    // Check if number already has 2 decimal places
    const decimalIndex = numberInput.indexOf(".");
    if (
      decimalIndex !== -1 &&
      numberInput.length - decimalIndex > 2 &&
      value !== "."
    ) {
      return; // Already has 2 decimal places
    }

    setNumberInput((prev) => prev + value);
  };

  const renderPopupUI = () => {
    if (betType === "match") {
      return (
        <>
          <div className="px-4">
            <div className="flex flex-row justify-between items-center mb-2 px-6">
              <span className="text-base font-medium">Indonesia</span>
              <span className="text-xs font-bold text-[rgb(227,172,37)]">
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
                    Over 2.00
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
            <div className="flex flex-row border border-gray-300 rounded-lg overflow-hidden mt-3">
              <div className="flex justify-center items-center p-3 bg-gray-200">
                <span className="text-base font-bold text-gray-500">USD</span>
              </div>
              <div className="flex-1 flex flex-row justify-end items-center p-2 px-4">
                <span className="text-lg font-bold text-black">
                  {numberInput}
                </span>
                {numberInput !== "0" && (
                  <button
                    onClick={() => setNumberInput("0")}
                    className="text-white ml-3 bg-gray-400 p-1 rounded-full"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-col mt-3 justify-center items-end">
              <div className="flex flex-row">
                <span className="text-base font-medium text-gray-600 mr-1">
                  Available Funds:
                </span>
                <span className="text-base font-medium text-[rgb(255,138,38)] mr-3">
                  0
                </span>
                <span className="text-base font-medium text-gray-600 mr-1">
                  Payout:
                </span>
                <span className="text-base font-medium text-[rgb(255,138,38)] mr-3">
                  3.97
                </span>
              </div>
              <div className="flex flex-row mt-1">
                <span className="text-base font-medium text-gray-600 mr-1">
                  Min Bet:
                </span>
                <span className="text-base font-medium text-[rgb(255,138,38)] mr-3">
                  0.10
                </span>
                <span className="text-base font-medium text-gray-600 mr-1">
                  Max Bet:
                </span>
                <span className="text-base font-medium text-[rgb(255,138,38)] mr-3">
                  1000.00
                </span>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 mt-3 pb-6">
            <div id="keypad" className="grid grid-cols-4 p-3">
              <button
                onClick={() => handleNumberInput("1")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">1</span>
              </button>
              <button
                onClick={() => handleNumberInput("2")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">2</span>
              </button>
              <button
                onClick={() => handleNumberInput("3")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">3</span>
              </button>
              <button
                onClick={() =>
                  setNumberInput(String(parseFloat(numberInput) + 10))
                }
                className="flex flex-row justify-center items-center border border-gray-300 bg-gray-300 rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">+10</span>
              </button>
              <button
                onClick={() => handleNumberInput("4")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">4</span>
              </button>
              <button
                onClick={() => handleNumberInput("5")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">5</span>
              </button>
              <button
                onClick={() => handleNumberInput("6")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">6</span>
              </button>
              <button
                onClick={() =>
                  setNumberInput(String(parseFloat(numberInput) + 25))
                }
                className="flex flex-row justify-center items-center border border-gray-300 bg-gray-300 rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">+25</span>
              </button>
              <button
                onClick={() => handleNumberInput("7")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">7</span>
              </button>
              <button
                onClick={() => handleNumberInput("8")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">8</span>
              </button>
              <button
                onClick={() => handleNumberInput("9")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">9</span>
              </button>
              <button
                onClick={() =>
                  setNumberInput(String(parseFloat(numberInput) + 50))
                }
                className="flex flex-row justify-center items-center border border-gray-300 bg-gray-300 rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">+50</span>
              </button>
              <button
                onClick={() => handleNumberInput(".")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">.</span>
              </button>
              <button
                onClick={() => handleNumberInput("0")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">0</span>
              </button>
              <button
                onClick={() => {
                  const newValue = numberInput.slice(0, -1);
                  setNumberInput(newValue || "0");
                }}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <SquareX className="w-5 h-5 text-black font-bold" />
              </button>
              <button
                onClick={() => setNumberInput("1000")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-gray-300 rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">Max</span>
              </button>
            </div>
            <hr className="mb-6 mt-6 border-gray-500"></hr>
            <div className="flex flex-row justify-center">
              <DebouncedButton
                onClick={handleBet}
                isLoading={isLoading}
                className="w-[60%] py-3"
                debounceDelay={300}
              >
                <span className="text-lg font-bold text-white">Bet</span>
              </DebouncedButton>
            </div>
          </div>
        </>
      );
    } else if (betType === "outright") {
      return (
        <>
          <div className="px-4">
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

            {isAmountError && (
              <div className="mt-3 p-4 py-1 bg-red-600 rounded-sm flex flex-row items-center justify-center">
                <span className="text-base font-semibold text-white">
                  Please place a bet amount
                </span>
              </div>
            )}

            <div className="flex flex-row border border-gray-300 rounded-lg overflow-hidden mt-3">
              <div className="flex justify-center items-center p-3 bg-gray-200">
                <span className="text-base font-bold text-gray-500">USD</span>
              </div>
              <div className="flex-1 flex flex-row justify-end items-center p-2 px-4">
                <span className="text-lg font-bold text-black">
                  {numberInput}
                </span>
                {numberInput !== "0" && (
                  <button
                    onClick={() => setNumberInput("0")}
                    className="text-white ml-3 bg-gray-400 p-1 rounded-full"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-col mt-3 justify-center items-end">
              <div className="flex flex-row">
                <span className="text-base font-medium text-gray-600 mr-1">
                  Available Funds:
                </span>
                <span className="text-base font-medium text-[rgb(255,138,38)] mr-3">
                  0
                </span>
                <span className="text-base font-medium text-gray-600 mr-1">
                  Payout:
                </span>
                <span className="text-base font-medium text-[rgb(255,138,38)] mr-3">
                  3.97
                </span>
              </div>
              <div className="flex flex-row mt-1">
                <span className="text-base font-medium text-gray-600 mr-1">
                  Min Bet:
                </span>
                <span className="text-base font-medium text-[rgb(255,138,38)] mr-3">
                  0.10
                </span>
                <span className="text-base font-medium text-gray-600 mr-1">
                  Max Bet:
                </span>
                <span className="text-base font-medium text-[rgb(255,138,38)] mr-3">
                  1000.00
                </span>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 mt-3 pb-6">
            <div id="keypad" className="grid grid-cols-4 p-3">
              <button
                onClick={() => handleNumberInput("1")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">1</span>
              </button>
              <button
                onClick={() => handleNumberInput("2")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">2</span>
              </button>
              <button
                onClick={() => handleNumberInput("3")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">3</span>
              </button>
              <button
                onClick={() =>
                  setNumberInput(String(parseFloat(numberInput) + 10))
                }
                className="flex flex-row justify-center items-center border border-gray-300 bg-gray-300 rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">+10</span>
              </button>
              <button
                onClick={() => handleNumberInput("4")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">4</span>
              </button>
              <button
                onClick={() => handleNumberInput("5")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">5</span>
              </button>
              <button
                onClick={() => handleNumberInput("6")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">6</span>
              </button>
              <button
                onClick={() =>
                  setNumberInput(String(parseFloat(numberInput) + 25))
                }
                className="flex flex-row justify-center items-center border border-gray-300 bg-gray-300 rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">+25</span>
              </button>
              <button
                onClick={() => handleNumberInput("7")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">7</span>
              </button>
              <button
                onClick={() => handleNumberInput("8")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">8</span>
              </button>
              <button
                onClick={() => handleNumberInput("9")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">9</span>
              </button>
              <button
                onClick={() =>
                  setNumberInput(String(parseFloat(numberInput) + 50))
                }
                className="flex flex-row justify-center items-center border border-gray-300 bg-gray-300 rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">+50</span>
              </button>
              <button
                onClick={() => handleNumberInput(".")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">.</span>
              </button>
              <button
                onClick={() => handleNumberInput("0")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">0</span>
              </button>
              <button
                onClick={() => {
                  const newValue = numberInput.slice(0, -1);
                  setNumberInput(newValue || "0");
                }}
                className="flex flex-row justify-center items-center border border-gray-300 bg-white rounded-lg m-1 mb-0 p-2"
              >
                <SquareX className="w-5 h-5 text-black font-bold" />
              </button>
              <button
                onClick={() => setNumberInput("1000")}
                className="flex flex-row justify-center items-center border border-gray-300 bg-gray-300 rounded-lg m-1 mb-0 p-2"
              >
                <span className="text-base font-extrabold text-black">Max</span>
              </button>
            </div>
            <hr className="mb-6 mt-6 border-gray-500"></hr>
            <div className="flex flex-row justify-center">
              <DebouncedButton
                onClick={handleBet}
                isLoading={isLoading}
                className="w-[60%] py-3"
                debounceDelay={300}
              >
                <span className="text-lg font-bold text-white">Bet</span>
              </DebouncedButton>
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
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-50 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed bottom-0 left-0 w-full max-h-[90%] bg-white dark:bg-[rgb(43,43,43)] shadow-lg transform transition-[transform, background] duration-300 ease-in-out z-50 rounded-t-2xl overflow-hidden flex flex-col ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
          </div>
        )}

        {/* Fixed Header */}
        <div className="flex flex-row items-start justify-between gap-3 p-4 pb-2 flex-shrink-0">
          <h2 className="text-base font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div>{renderPopupUI()}</div>
        </div>
      </div>
    </>
  );
};

export default MobileBetPopup;
