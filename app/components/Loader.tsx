"use client";
import Image from "next/image";
import React from "react";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-10">
      <div
        className="
            relative
            px-4 py-2
            w-50 xs:w-50 sm:w-52 md:w-54 lg:w-56 xl:w-58
            h-26 xs:h-26 sm:h-28 md:h-30 lg:h-32 xl:h-34
            overflow-hidden
          "
      >
        <div className="relative w-full h-full">
          <Image
            src={`/images/logo.png`}
            alt={"dashboard-logo"}
            fill
            loading={"lazy"}
            sizes={`
              (max-width: 468px) 6rem,
              (max-width: 575px) 6.5rem,
              (max-width: 768px) 7rem,
              (max-width: 1024px) 7.5rem,
              8rem
            `}
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-3 h-3 bg-black rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}
