"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div className="flex flex-row items-center justify-between gap-2">
      <span className="text-sm font-semibold text-primary dark:text-white">
        Display Mode
      </span>

      <div className="flex p-2 flex-row items-center rounded-md gap-2 shadow-sm shadow-primary">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`p-2 rounded-md ${theme === "dark" ? "" : "bg-primary"}`}
        >
          <Sun
            className={`w-6 h-6 ${
              theme === "dark" ? "text-primary" : "text-white"
            }`}
          />
        </button>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`p-2 rounded-md ${theme === "dark" ? "bg-primary" : ""}`}
        >
          <Moon
            className={`w-6 h-6 ${
              theme === "dark" ? "text-white" : "text-primary"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
