// src/app/(root)/batches/[batchId]/students/components/FilterButtons.tsx
"use client";

import * as React from "react";

const filterLevels = ["All", "Excellent", "Optimal", "Inefficient"];

export function FilterButtons() {
  const [activeFilter, setActiveFilter] = React.useState("All");

  return (
    <div className="flex items-center gap-2">
      {filterLevels.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 py-2 text-sm rounded-md border
            ${activeFilter === filter ? "bg-purple-500 text-white" : "bg-white"}
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
