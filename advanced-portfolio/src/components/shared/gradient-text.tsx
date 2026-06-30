import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  variant?: "purple-blue" | "electric" | "violet-pink";
}

export function GradientText({ children, className, variant = "purple-blue" }: GradientTextProps) {
  const gradients = {
    "purple-blue": "bg-gradient-to-r from-purple-400 to-blue-500",
    "electric": "bg-gradient-to-r from-blue-400 to-cyan-400",
    "violet-pink": "bg-gradient-to-r from-violet-400 to-pink-400",
  };

  return (
    <span
      className={cn(
        "bg-clip-text text-transparent font-bold",
        gradients[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
