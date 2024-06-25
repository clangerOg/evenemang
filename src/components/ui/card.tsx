import { cn } from "@/lib/utils";
import React from "react";

const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <div
      ref={ref}
      {...rest}
      className={cn(
        "overflow-hidden rounded-lg border border-border shadow-lg",
        className,
      )}
    />
  );
});
Root.displayName = "Root";

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return <div ref={ref} {...rest} className={cn("p-4", className)}></div>;
});
Header.displayName = "Header";

const Title = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <p
      ref={ref}
      {...rest}
      className={cn("text-lg font-semibold text-foreground", className)}
    />
  );
});
Title.displayName = "Title";

const Description = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <p
      ref={ref}
      {...rest}
      className={cn("mt-1 text-sm text-muted-foreground", className)}
    />
  );
});
Description.displayName = "Description";

const Content = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return <div ref={ref} {...rest} className={cn("p-4", className)}></div>;
});
Content.displayName = "Content";

const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <div
      ref={ref}
      {...rest}
      className={cn("border-t border-border bg-zinc-50 px-4 py-2.5", className)}
    />
  );
});
Footer.displayName = "Footer";

export { Content, Description, Footer, Header, Root, Title };
