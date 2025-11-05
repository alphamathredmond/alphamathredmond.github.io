import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span className={`inline-flex items-center justify-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 ${className}`}>
      {children}
    </span>
  );
}
