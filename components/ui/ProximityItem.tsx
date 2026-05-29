import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function ProximityItem({ children, className = "" }: Props) {
  return (
    <div data-prox="" className={`rounded-2xl overflow-visible ${className}`}>
      {children}
    </div>
  );
}
