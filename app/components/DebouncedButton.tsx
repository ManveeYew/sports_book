"use client";
import React, { useCallback, useRef, useEffect, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type DebouncedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: () => void;
  debounceDelay?: number;
  isLoading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
};

const DebouncedButton = forwardRef<HTMLButtonElement, DebouncedButtonProps>(
  (
    {
      onClick,
      debounceDelay = 300,
      isLoading = false,
      loadingText,
      children,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    // Debounce ref to store timeout
    const debounceRef = useRef<NodeJS.Timeout | null>(null);

    // Debounced click handler
    const handleDebouncedClick = useCallback(() => {
      // Clear previous timeout
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      // Set new timeout
      debounceRef.current = setTimeout(() => {
        onClick();
      }, debounceDelay);
    }, [onClick, debounceDelay]);

    // Cleanup timeout on unmount
    useEffect(() => {
      return () => {
        if (debounceRef.current) {
          clearTimeout(debounceRef.current);
        }
      };
    }, []);

    <button
      onClick={() => {}}
      className="bg-primary text-white w-[60%] py-3 rounded-full"
    >
      <span className="text-lg font-bold text-white">Bet</span>
    </button>;

    return (
      <button
        ref={ref}
        onClick={handleDebouncedClick}
        disabled={disabled || isLoading}
        className={twMerge(
          `
          relative
          overflow-hidden
          bg-primary 
          text-white 
          text-base
          border border-primary 
          rounded-full
          transition-all duration-200 ease-in-out
          hover:shadow-lg
          active:scale-95 active:shadow-sm
          disabled:opacity-80 disabled:cursor-not-allowed
          py-3
          px-2
          ${className}
        `
        )}
        {...props}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.2)]">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <span className={`inline-block ${isLoading ? "opacity-70" : ""}`}>
          {!isLoading && children}
        </span>
      </button>
    );
  }
);

DebouncedButton.displayName = "DebouncedButton";
export default DebouncedButton;
