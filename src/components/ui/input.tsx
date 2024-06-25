import { cn } from "@/lib/utils";
import * as React from "react";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "h-9 w-full rounded-lg border border-border px-2.5 py-1.5 text-sm shadow-sm placeholder:text-zinc-400 focus-within:outline-none focus-within:ring-4 focus-within:ring-zinc-100 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
