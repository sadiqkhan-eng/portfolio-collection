import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  grid?: boolean;
}

export function Section({ children, className, id, grid = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 px-4 sm:px-6 lg:px-8",
        grid && "grid-background",
        className
      )}
    >
      {children}
    </section>
  );
}
