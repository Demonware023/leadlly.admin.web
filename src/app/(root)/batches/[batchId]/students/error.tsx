// src/app/(root)/batches/[batchId]/students/error.tsx
"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-6">
      <h2 className="text-red-600 font-bold">Something went wrong!</h2>
      <button
        className="mt-4 px-4 py-2 bg-red-100 text-red-700 rounded"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
