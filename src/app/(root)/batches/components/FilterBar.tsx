// src/app/(root)/batches/components/FilterBar.tsx
"use client"; // Because we need interactivity

import * as React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function FilterBar() {
  const [filter1, setFilter1] = React.useState("All");
  const [filter2, setFilter2] = React.useState("All");
  const [filter3, setFilter3] = React.useState("All");

  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium">Filter by:</span>
      </div>
      <Select value={filter1} onValueChange={setFilter1}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All</SelectItem>
          <SelectItem value="Active">Active</SelectItem>
          <SelectItem value="Inactive">Inactive</SelectItem>
        </SelectContent>
      </Select>

      <Select value={filter2} onValueChange={setFilter2}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All</SelectItem>
          <SelectItem value="Physics">Physics</SelectItem>
          <SelectItem value="Chemistry">Chemistry</SelectItem>
          <SelectItem value="Maths">Mathematics</SelectItem>
        </SelectContent>
      </Select>

      <Select value={filter3} onValueChange={setFilter3}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All</SelectItem>
          <SelectItem value="Dr. Sarah Wilson">Dr. Sarah Wilson</SelectItem>
          <SelectItem value="Dr. John Doe">Dr. John Doe</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
