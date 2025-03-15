// src/app/(root)/batches/[batchId]/students/components/StudentGrid.tsx
import { StudentCard } from "./StudentCard";

interface IStudent {
  id: string;
  name: string;
  class: number;
  level: "Excellent" | "Optimal" | "Inefficient";
  avatar: string;
}

interface StudentGridProps {
  students: IStudent[];
}

export function StudentGrid({ students }: StudentGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}
