// components/Button.tsx
import { useTranslation } from "@/lib/useTranslation";
import { Loader2 } from "lucide-react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  loadingAnimation?: boolean;
  textClassName?: string;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      isLoading = false,
      loadingAnimation = false,
      textClassName = "",
      ...props
    },
    ref
  ) => {
    const t = useTranslation();

    return (
      <button
        ref={ref}
        disabled={isLoading}
        {...props}
        className={twMerge(`
          group
          overflow-hidden
          bg-primary 
          text-white 
          text-base xs:text-base sm:text-base md:text-base lg:text-lg xl:text-lg
          border border-primary 
          rounded-xl 
          transition-all duration-200 ease-in-out
          hover:shadow-lg
          active:scale-95 active:shadow-sm
          ${isLoading ? "opacity-80 cursor-not-allowed" : ""}
          ${className}
        `)}
      >
        <span
          className={twMerge(`
            inline-block
            px-6 sm:px-8 py-3 sm:py-4
            ${textClassName}
          `)}
        >
          {!loadingAnimation && children}
          {loadingAnimation &&
            (isLoading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="animate-spin w-5 h-5" />
                {t.loading}...
              </span>
            ) : (
              children
            ))}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
