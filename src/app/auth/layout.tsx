import { TicketIcon } from "@heroicons/react/20/solid";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="relative flex h-screen w-screen flex-col items-center justify-center p-8">
      <div className="absolute bottom-8 left-8">
        <p className="mb-1 text-xs text-zinc-500">Powered by</p>
        <div className="flex items-center justify-center gap-2 rounded-lg border border-border bg-zinc-50 px-2 py-1">
          <TicketIcon className="mt-0.5 size-5 text-orange-500" />
          <p className="text-sm font-medium text-zinc-900">evenemang</p>
        </div>
      </div>
      {children}
    </main>
  );
}
