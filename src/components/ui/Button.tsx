"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "orange" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      withArrow = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex flex-row items-center justify-center whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5100] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer";

    const variants = {
      primary:
        "bg-white text-[#060607] hover:bg-[#FAFAFA]/90 hover:shadow-lg hover:shadow-white/10 rounded-full font-semibold",
      orange:
        "bg-[#FF5100] text-[#060607] hover:bg-[#e04800] hover:text-white font-semibold rounded-full",
      secondary:
        "bg-transparent text-[#FAFAFA] hover:text-[#FF5100] underline-offset-4 hover:underline p-0",
      outline:
        "border border-[#2A2A2D] bg-[#121214] text-[#FAFAFA] hover:border-[#FF5100] hover:bg-[#1A1A1C] rounded-full",
      ghost:
        "text-[#8A8A8E] hover:text-[#FAFAFA] hover:bg-white/5 rounded-full",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs tracking-tight",
      md: "h-11 px-5 text-sm tracking-tight",
      lg: "h-12 px-7 text-sm tracking-tight",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
        {withArrow && (
          <ArrowUpRight className="ml-1.5 h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
