// src/app/(root)/batches/components/BatchCard.tsx
"use client"; // We need interactive routing or a button click

import { useRouter } from "next/navigation";

interface IBatch {
  id: string;
  name: string;
  subject: string;
  totalStudents: number;
  maxStudents: number;
  status: string;
  teacher: string;
}

interface IBatchCardProps {
  batch: IBatch;
}

export function BatchCard({ batch }: IBatchCardProps) {
  const router = useRouter();

  const progress = Math.min(
    (batch.totalStudents / batch.maxStudents) * 100,
    100
  );

  return (
    <div className="p-4 border rounded-md shadow-sm bg-white">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold">{batch.name}</h3>
        <span className="text-green-600 text-sm">{batch.status}</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">{batch.subject}</p>
      <p className="text-sm">
        <strong>Total Students:</strong> {batch.totalStudents}
      </p>
      <div className="w-full bg-gray-200 h-2 rounded-full my-2">
        <div
          className="bg-purple-500 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-gray-500 mb-4">
        -By {batch.teacher}
      </p>
      <button
        onClick={() => router.push(`/batches/${batch.id}/students`)}
        className="px-4 py-2 bg-purple-500 text-white rounded-md text-sm"
      >
        View More
      </button>
    </div>
  );
}
