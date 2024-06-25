"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormStatus } from "@/hooks/use-form-status";
import { loginSchema } from "@/lib/schema";
import { login } from "@/server/actions/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { FormStatusMessage } from "../form-status-message";

function LoginForm() {
  const { status, loading, setStatus } = useFormStatus();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    setStatus({
      state: "loading",
    });
    void login(values).then((res) => {
      if (res.success) {
        setStatus({
          state: "success",
          message: "Successfully logged in. Redirecting...",
        });
      } else {
        setStatus({
          state: "error",
          message:
            res.message ?? "Something unexpected happend. Please try again.",
        });
      }
    });
  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={loading}
                  type="email"
                  placeholder="Email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={loading}
                  type="password"
                  placeholder="Password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 text-sm font-medium text-white shadow-inner shadow-zinc-50/25 transition-colors hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
          <span>Sign in</span>
        </button>
        <FormStatusMessage state={status.state} message={status.message} />
      </form>
    </Form>
  );
}
LoginForm.displayName = "LoginForm";

export { LoginForm };
