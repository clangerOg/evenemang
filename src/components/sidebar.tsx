import * as Nav from "@/components/sidebar-nav";
import { cn } from "@/lib/utils";
import { HomeIcon, UserIcon } from "@heroicons/react/20/solid";
import React from "react";
import { SidebarLink } from "./sidebar-link";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <aside
      ref={ref}
      {...rest}
      className={cn("h-full w-full max-w-xs space-y-12 p-4", className)}
    >
      <div className="rounded-lg bg-zinc-800 p-6">
        <p className="text-sm font-medium text-white">
          Thanks for checking out!
        </p>
        <p className="mt-2 text-xs text-zinc-300">
          We hope you enjoy your stay. If you have any questions, feel free to
          ask.
        </p>
      </div>
      <Nav.Root>
        <Nav.Title>General</Nav.Title>
        <Nav.List>
          <SidebarLink href="/dashboard">
            <HomeIcon className="size-5" />
            Dashboard
          </SidebarLink>
          <SidebarLink href="/settings">
            <UserIcon className="size-5" />
            Settings
          </SidebarLink>
        </Nav.List>
      </Nav.Root>
    </aside>
  );
});
Sidebar.displayName = "Sidebar";

export { Sidebar };
