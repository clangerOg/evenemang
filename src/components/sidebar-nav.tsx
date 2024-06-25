import { cn } from "@/lib/utils";
import React from "react";

const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return <div ref={ref} {...rest} className={cn("", className)} />;
});
Root.displayName = "SidebarNav";

const Title = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <span
      ref={ref}
      {...rest}
      className={cn(
        "mb-2 block pl-2 text-xs font-medium tracking-wider text-muted-foreground",
        className,
      )}
    />
  );
});
Title.displayName = "SidebarNavTitle";

const List = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return <ul ref={ref} {...rest} className={cn("space-y-1.5", className)} />;
});
List.displayName = "SidebarNavList";

export { List, Root, Title };
