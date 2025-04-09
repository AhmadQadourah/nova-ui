import React from "react";
import clsx from "clsx";

type Accent =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | "link";

type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  accent?: Accent;
  size?: Size;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  accent = "primary",
  size = "md",
  outline = false,
  disabled = false,
  children,
  className,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-md transition focus:outline-none border shadow-md";

  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const accentClasses: Record<Accent, string> = {
    primary: outline
      ? "border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white"
      : "bg-blue-500 text-white hover:bg-blue-600",
    secondary: outline
      ? "border-gray-600 text-gray-600 bg-transparent hover:bg-gray-600 hover:text-white"
      : "bg-gray-600 text-white hover:bg-gray-700",
    success: outline
      ? "border-green-500 text-green-500 bg-transparent hover:bg-green-500 hover:text-white"
      : "bg-green-500 text-white hover:bg-green-600",
    danger: outline
      ? "border-red-500 text-red-500 bg-transparent hover:bg-red-500 hover:text-white"
      : "bg-red-500 text-white hover:bg-red-600",
    warning: outline
      ? "border-yellow-500 text-yellow-500 bg-transparent hover:bg-yellow-500 hover:text-black"
      : "bg-yellow-500 text-black hover:bg-yellow-600",
    info: outline
      ? "border-cyan-500 text-cyan-500 bg-transparent hover:bg-cyan-500 hover:text-white"
      : "bg-cyan-500 text-white hover:bg-cyan-600",
    light: outline
      ? "border-gray-300 text-gray-500 bg-transparent hover:bg-gray-200 hover:text-black"
      : "bg-gray-200 text-black hover:bg-gray-300",
    dark: outline
      ? "border-black text-black bg-transparent hover:bg-black hover:text-white"
      : "bg-black text-white hover:bg-gray-900",
    link: "text-blue-500 underline bg-transparent hover:text-blue-700 border-none",
  };

  const finalClass = clsx(
    base,
    sizeClasses[size],
    accentClasses[accent],
    {
      "cursor-not-allowed opacity-50": disabled,
    },
    className
  );

  return (
    <button className={finalClass} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
