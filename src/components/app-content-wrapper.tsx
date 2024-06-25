import { cn } from "@/lib/utils";
import React from "react";

interface AppContentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  innerClass?: string;
}

const AppContentWrapper = React.forwardRef<
  HTMLDivElement,
  AppContentWrapperProps
>((props, ref) => {
  const { className, children, innerClass, ...rest } = props;

  return (
    <div
      ref={ref}
      {...rest}
      className={cn("h-full w-full p-1.5 pl-0", className)}
    >
      <div
        className={cn(
          "h-full min-h-full w-full rounded-xl border border-zinc-200 bg-zinc-50",
          innerClass,
        )}
      >
        {children}
      </div>
    </div>
  );
});
AppContentWrapper.displayName = "AppContentWrapper";

export { AppContentWrapper };
