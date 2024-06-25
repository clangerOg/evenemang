import React from "react";

export interface FormStatus<T> {
  state: "idle" | "loading" | "error" | "success";
  message?: string;
  description?: string;
  data?: T;
}

export function useFormStatus<T>(initial?: FormStatus<T>) {
  const [status, setStatus] = React.useState<FormStatus<T>>(
    initial ?? { state: "idle" },
  );

  const loading = status.state === "loading";

  return { status, setStatus, loading };
}
