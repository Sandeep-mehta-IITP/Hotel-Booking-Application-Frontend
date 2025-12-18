import { Loader } from "lucide-react";
import React from "react";

const Button = ({
  children,
  type = "button",
  isLoading = false,
  loadingText = "Loading...",
  disabled = false,
  className = "",
  ...rest
}) => {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={`
        w-full flex items-center justify-center gap-2
        bg-blue-200 text-black font-semibold
        py-3 rounded-lg
        transition-all duration-300
        hover:bg-blue-300 cursor-pointer
        disabled:opacity-60 disabled:cursor-not-allowed
        ${className}
      `}
      {...rest}
    >
      {isLoading ? (
        <>
          <Loader className="w-6 h-6 animate-spin font-semibold text-pink-600" />
          <span>{loadingText}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
