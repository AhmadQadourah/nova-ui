import React from "react";
import clsx from "clsx";

type Variant = "elevated" | "outlined" | "bordered";
type Rounded = "none" | "sm" | "md" | "lg" | "full";
type Shadow = "none" | "sm" | "md" | "lg" | "xl";

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  variant?: Variant;
  rounded?: Rounded;
  shadow?: Shadow;
  noHover?: boolean;
  footerClasses?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title = "",
  description = "",
  image,
  variant = "elevated",
  rounded = "md",
  shadow = "md",
  noHover = false,
  footerClasses = "",
  children,
  actions,
}) => {
  const base = "overflow-hidden transition-transform flex flex-col h-full";
  const hover = !noHover ? "hover:scale-[.98] duration-200" : "";

  const variantClasses: Record<Variant, string> = {
    elevated: "bg-white shadow-lg border border-gray-200",
    outlined: "border border-gray-300 bg-white",
    bordered: "border-2 border-gray-400 bg-white",
  };

  const roundedClasses: Record<Rounded, string> = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const shadowClasses: Record<Shadow, string> = {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };

  const cardClass = clsx(
    base,
    hover,
    variantClasses[variant],
    roundedClasses[rounded],
    shadowClasses[shadow]
  );

  return (
    <div className={cardClass}>
      {image && (
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      )}
      <div className="p-4 flex flex-col flex-1">
        {title && (
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        )}
        {description && <p className="text-gray-600 mt-1">{description}</p>}
        <div className="flex-1 mt-4">{children}</div>
        {actions && (
          <div
            className={clsx(
              "mt-auto flex gap-2 pt-4 border-t border-gray-200",
              footerClasses
            )}
          >
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
