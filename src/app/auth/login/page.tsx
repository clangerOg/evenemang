import { LoginForm } from "@/components/forms/login-form";
import * as Card from "@/components/ui/card";
import Link from "next/link";

export default async function LoginPage() {
  return (
    <Card.Root className="relative w-full max-w-[26rem]">
      <div className="absolute -bottom-6">
        <p className="text-sm font-medium text-red-500">
          Something went wrong! Please try again later.
        </p>
      </div>
      <Card.Header className="flex flex-col items-center justify-center pt-6 [&>p]:text-center">
        <Card.Title>Hello there! 👋</Card.Title>
        <Card.Description>Create an account to get started.</Card.Description>
      </Card.Header>
      <Card.Content className="space-y-6 pb-6">
        <LoginForm />
      </Card.Content>
      <Card.Footer>
        <p className="text-center text-sm text-zinc-500">
          Don&apos;t have an Account yet?
          <Link
            href={"/auth/register"}
            className="ms-1 font-medium text-zinc-900 transition-colors hover:text-orange-500"
          >
            Sign up.
          </Link>
        </p>
      </Card.Footer>
    </Card.Root>
  );
}
