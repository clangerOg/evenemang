export type ActionResult<T> =
  | {
      success: true;
      data: T;
      message?: string;
      error?: null;
    }
  | {
      success: false;
      data?: null;
      message?: string;
      error: unknown;
    };
