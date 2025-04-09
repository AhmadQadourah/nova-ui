import React from "react";
import clsx from "clsx";

type Variant = "outlined" | "filled" | "underlined";
type InputSize = "sm" | "md" | "lg";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  id?: string;
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  inputSize?: InputSize;
  variant?: Variant;
  size?: InputSize;
}

const Input: React.FC<InputProps> = ({
  id = `input-${Math.random().toString(36).substring(2, 9)}`,
  type = "text",
  value,
  onChange,
  label,
  placeholder = "Enter text...",
  disabled = false,
  error,
  icon,
  size = "md",
  variant = "outlined",
  className,
  ...props
}) => {
  const sizeClasses: Record<InputSize, string> = {
    sm: "text-sm py-1 px-2",
    md: "text-base py-2 px-4",
    lg: "text-lg py-3 px-5",
  };

  const variantClasses: Record<Variant, string> = {
    outlined: "border border-gray-300 focus:ring-2 focus:ring-blue-500",
    filled: "bg-gray-100 border-none focus:ring-2 focus:ring-blue-500",
    underlined: "border-b-2 border-gray-300 rounded-none focus:border-blue-500",
  };

  const inputClass = clsx(
    "w-full transition rounded-md focus:outline-none",
    sizeClasses[size],
    variantClasses[variant],
    {
      "bg-gray-200 cursor-not-allowed": disabled,
      "pl-10": icon,
    },
    className
  );

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={id} className="mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative w-full">
        {icon && (
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
            {icon}
          </span>
        )}

        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={inputClass}
          {...props}
        />

        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    </div>
  );
};
export default Input;
