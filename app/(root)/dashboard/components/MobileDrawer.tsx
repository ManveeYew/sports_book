"use client";
import ThemeToggle from "@/app/components/ThemeToggle";
import { UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
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
        className={`fixed top-0 left-0 h-full w-[80%] bg-white dark:bg-[rgb(43,43,43)] shadow-lg transform transition-[transform, background] duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="text-lg font-semibold mb-4 flex flex-row items-center">
            <div className="p-2 bg-primary rounded-full mr-2">
              <UserRound className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-black dark:text-white">
                bjahsbjj123ko
              </span>
              <span className="text-sm font-semibold text-gray-400">MY</span>
            </div>
          </div>
          <hr className="mb-4 border-gray-200" />
          <ThemeToggle />
          <hr className="my-4 border-gray-200" />
          <Link href={"/dashboard/betting-rules"} onClick={() => onClose()}>
            <span className="text-sm font-semibold text-primary dark:text-white">
              Rules & Regulations
            </span>
          </Link>
          <hr className="my-4 border-gray-200" />
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
