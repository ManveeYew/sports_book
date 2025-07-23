// components/Loader.tsx
import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-full py-10">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-3 h-3 bg-black rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}
