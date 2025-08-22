"use client";
import { X } from "lucide-react";
import React from "react";
import { useCurrencyStore } from "../../store/useCurrencyStore";
import { currency_data } from "../../constants/constantsData";

interface CurrencySelectionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CurrencySelectionPopup: React.FC<CurrencySelectionPopupProps> = ({
  isOpen,
  onClose,
}) => {
  const { currency, setCurrency } = useCurrencyStore();

  const handleCurrencySelect = (selectedCurrency: string) => {
    setCurrency(selectedCurrency as "MY" | "HK" | "EU");
  };
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[100%] bg-gray-300 flex flex-col dark:bg-[rgb(43,43,51)] shadow-lg transform transition-[transform, background] duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          <div
            id="morebet-header"
            className="flex flex-col gap-2 bg-[rgb(43,43,51)] text-white p-4"
          >
            <div className="flex flex-row items-start justify-between gap-3 flex-shrink-0">
              <h2 className="text-base font-semibold">{"Odds Type"}</h2>

              <button onClick={onClose} className="">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div id="currency-list" className="flex flex-col px-4  bg-white">
            {currency_data.map((currencyOption) => (
              <div
                key={currencyOption.value}
                className="flex items-center gap-2 justify-between py-3 border-b border-gray-300 last:border-b-0 cursor-pointer"
                onClick={() => handleCurrencySelect(currencyOption.value)}
              >
                <span className="text-lg ml-3 font-medium text-black dark:text-white">
                  {currencyOption.label}
                </span>
                {currency === currencyOption.value && (
                  <div className="text-green-500 mr-3">
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrencySelectionPopup;
