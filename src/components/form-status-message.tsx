import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const formStatusMessageVariants = cva("block text-center text-sm font-medium", {
  variants: {
    state: {
      idle: "text-muted-foreground",
      loading: "text-muted-foreground",
      error: "text-red-500",
      success: "text-green-500",
    },
  },
});

interface FormStatusMessageProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof formStatusMessageVariants> {
  message?: string;
}

const FormStatusMessage = React.forwardRef<
  HTMLSpanElement,
  FormStatusMessageProps
>((props, ref) => {
  const { className, state, message, ...rest } = props;

  if (state !== "idle" && state !== "loading") {
    return (
      <span
        ref={ref}
        {...rest}
        className={cn(formStatusMessageVariants({ state, className }))}
      >
        {message}
      </span>
    );
  }
  return null;
});
FormStatusMessage.displayName = "FormStatusMessage";

export { FormStatusMessage };
