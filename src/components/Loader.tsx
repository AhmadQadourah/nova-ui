import React from "react";
import clsx from "clsx";

type Size = "sm" | "md" | "lg";
type Color = "primary" | "danger" | "success" | "gray";

interface LoaderProps {
  size?: Size;
  color?: Color;
  center?: boolean;
  message?: string;
}

const sizeMap: Record<Size, string> = {
  sm: "h-6 w-6 border-2",
  md: "h-12 w-12 border-4",
  lg: "h-16 w-16 border-4",
};

const colorMap: Record<Color, string> = {
  primary: "border-blue-500",
  danger: "border-red-500",
  success: "border-green-500",
  gray: "border-gray-500",
};

const Loader: React.FC<LoaderProps> = ({
  size = "md",
  color = "primary",
  center = false,
  message,
}) => {
  const spinnerClass = clsx(
    "animate-spin rounded-full border-t-4 border-solid border-gray-200",
    sizeMap[size],
    colorMap[color]
  );

  return (
    <div
      className={clsx(
        "flex flex-col items-center",
        center && "justify-center h-64"
      )}
    >
      <div className={spinnerClass}></div>
      {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
    </div>
  );
};

export default Loader;
