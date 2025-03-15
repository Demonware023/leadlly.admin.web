import { Metadata } from "next";
import { FilterBar } from "./components/FilterBar";
import { notFound } from "next/navigation";
import { BatchGroup } from "./components/BatchGroup";

// Optional: Provide SEO info
export const metadata: Metadata = {
  title: "Leadlly | Admin | Batches",
  description: "Student Batches of Institute",
};

// Mock data for demonstration
async function fetchBatches() {
  // In production, fetch from your API:
  // const res = await fetch("https://your-backend.com/api/batches");
  // return await res.json();
  return [
    {
      standard: "11th standard",
      batches: [
        {
          id: "omega1",
          name: "Omega",
          subject: "Chemistry, Physics, Biology",
          totalStudents: 120,
          maxStudents: 180,
          status: "Active",
          teacher: "Dr. Sarah Wilson",
        },
        {
          id: "sigma1",
          name: "Sigma",
          subject: "Mathematics, Chemistry, Physics",
          totalStudents: 120,
          maxStudents: 180,
          status: "Active",
          teacher: "Dr. Sarah Wilson",
        },
        {
          id: "omega2",
          name: "Omega",
          subject: "Physics",
          totalStudents: 120,
          maxStudents: 180,
          status: "Active",
          teacher: "Dr. Sarah Wilson",
        },
      ],
    },
    {
      standard: "12th standard",
      batches: [
        {
          id: "omega3",
          name: "Omega",
          subject: "Chemistry",
          totalStudents: 120,
          maxStudents: 180,
          status: "Active",
          teacher: "Dr. Sarah Wilson",
        },
        {
          id: "sigma2",
          name: "Sigma",
          subject: "Mathematics",
          totalStudents: 120,
          maxStudents: 180,
          status: "Active",
          teacher: "Dr. Sarah Wilson",
        },
        {
          id: "omega4",
          name: "Omega",
          subject: "Physics",
          totalStudents: 120,
          maxStudents: 180,
          status: "Active",
          teacher: "Dr. Sarah Wilson",
        },
      ],
    },
  ];
}

export default async function BatchesPage() {
  // 1. Fetch or mock the data
  const data = await fetchBatches();

  if (!data) {
    notFound();
  }

  // 2. Render
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Student Batches of Institute</h1>

      {/* Filter bar at the top */}
      <FilterBar />

      {/* Render each standard (e.g. 11th standard, 12th standard) */}
      {data.map((group) => (
        <BatchGroup key={group.standard} group={group} />
      ))}
    </main>
  );
}