// src/app/(root)/batches/error.tsx
"use client"; // Must be a client component

import { useEffect } from "react";

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-6">
      <h2 className="text-red-500 font-bold">Something went wrong!</h2>
      <button
        className="mt-4 px-4 py-2 bg-red-200"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
