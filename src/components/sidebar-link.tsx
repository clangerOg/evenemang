"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarLinkProps
  extends Omit<React.HTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
}

const SidebarLink = React.forwardRef<HTMLAnchorElement, SidebarLinkProps>(
  (props, ref) => {
    const pathname = usePathname();

    const { className, children, href, ...rest } = props;

    return (
      <Link
        ref={ref}
        href={href}
        {...rest}
        data-state={pathname.startsWith(href) ? "active" : "inactive"}
        className={cn(
          "flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors focus-within:ring-offset-2 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-background data-[state=active]:text-zinc-800 [&_svg]:data-[state=active]:text-orange-500",
          className,
        )}
      >
        {children}
      </Link>
    );
  },
);
SidebarLink.displayName = "SidebarLink";

export { SidebarLink };
