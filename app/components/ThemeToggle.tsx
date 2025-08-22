"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
  className?: string;
  labelClassName?: string;
  label?: string;
  switchContainerClassName?: string;
  switchButtonClassName?: string;
  switchImageClassName?: string;
}

export default function ThemeToggle({
  className = "",
  labelClassName = "",
  label = "Display Mode",
  switchContainerClassName = "",
  switchButtonClassName = "",
  switchImageClassName = "",
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div
      className={`flex flex-row items-center justify-between gap-2 ${className}`}
    >
      <span
        className={`text-sm font-semibold text-secondary dark:text-white ${labelClassName}`}
      >
        {label}
      </span>

      <div
        className={`flex p-2 flex-row items-center rounded-md gap-2 shadow-sm shadow-secondary ${switchContainerClassName}`}
      >
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`p-2 rounded-md ${
            theme === "dark" ? "" : "bg-secondary"
          } ${switchButtonClassName}`}
        >
          <Sun
            className={`w-6 h-6 ${
              theme === "dark" ? "text-secondary" : "text-white"
            } ${switchImageClassName}`}
          />
        </button>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`p-2 rounded-md ${
            theme === "dark" ? "bg-secondary" : ""
          } ${switchButtonClassName}`}
        >
          <Moon
            className={`w-6 h-6 ${
              theme === "dark" ? "text-white" : "text-secondary"
            } ${switchImageClassName}`}
          />
        </button>
      </div>
    </div>
  );
}
