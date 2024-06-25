import { Sidebar } from "@/components/sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
  return (
    <main className="flex h-screen w-screen items-start justify-start bg-background">
      <Sidebar />
      {children}
    </main>
  );
}
