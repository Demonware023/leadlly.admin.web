// src/app/(root)/batches/[batchId]/students/page.tsx

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FilterButtons } from "./components/FilterButtons";
import { SearchBar } from "@/app/(root)/batches/[batchId]/students/components/SearchBar";
import { StudentGrid } from "@/app/(root)/batches/[batchId]/students/components/StudentGrid";
import type { IStudent } from "@/types/IStudent";

// Optional: Provide SEO info
export const metadata: Metadata = {
  title: "Leadlly | Students Info",
  description: "View students in a specific batch",
};

// Mock: fetch data from your backend
async function fetchStudents(batchId: string): Promise<IStudent[]> {
  // In production:
  // const res = await fetch(`https://your-backend.com/api/batches/${batchId}/students`);
  // if (!res.ok) throw new Error("Failed to fetch");
  // return res.json();

  // Sample mock data for demonstration
  return [
    {
      id: "student1",
      name: "Abhinav Mishra",
      class: 11,
      level: "Excellent", // could be "Excellent", "Optimal", or "Inefficient"
      avatar: "https://placekitten.com/100/100",
    },
    {
      id: "student2",
      name: "Abhinav Mishra",
      class: 11,
      level: "Optimal",
      avatar: "https://placekitten.com/120/120",
    },
    {
      id: "student3",
      name: "Abhinav Mishra",
      class: 11,
      level: "Inefficient",
      avatar: "https://placekitten.com/110/110",
    },
    // Add more as needed...
  ];
}

export default async function StudentsPage({ params }: { params: { batchId: string } }) {
  const { batchId } = params;
  // 1. Fetch students from your backend
  const students = await fetchStudents(batchId);

  if (!students) {
    notFound();
  }

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Students Info</h1>

      {/* Search + Filter Row */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <SearchBar />
        <FilterButtons />
        {/* Right-side icons or user avatar can go here */}
        <div className="ml-auto flex items-center space-x-4">
          {/* Example icons (use shadcn or your own) */}
          <button className="p-2 rounded-full hover:bg-gray-100">
            <span className="material-icons">image</span>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <span className="material-icons">groups</span>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <span className="material-icons">notifications</span>
          </button>
          <img
            src="https://placekitten.com/40/40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Student Grid */}
      <StudentGrid students={students} />
    </main>
  );
}
