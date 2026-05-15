import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  className?: string;
}

export default function Button({
  text,
  onClick,
  variant = "primary",
  icon,
  className = "",
}: ButtonProps) {
  const baseStyles =
    " px-4 py-1.5 sm:px-6 sm:py-2.5 cursor-pointer rounded-[4px] font-medium transition-all duration-300 flex items-center gap-2 font-16";
  const variantStyles =
    variant === "primary"
      ? "btnPrimary text-white hover:opacity-90 shadow-md hover:shadow-lg"
      : "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
}
