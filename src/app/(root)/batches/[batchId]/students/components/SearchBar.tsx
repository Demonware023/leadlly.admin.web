// src/app/(root)/batches/[batchId]/students/components/SearchBar.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input"; // shadcn UI input (example)

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex items-center w-full md:w-1/3">
      <Input
        type="search"
        placeholder="Search a teacher"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mr-2"
      />
      <span className="material-icons text-gray-400 -ml-8">search</span>
    </div>
  );
}
