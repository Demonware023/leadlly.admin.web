// src/app/(root)/batches/[batchId]/students/components/StudentCard.tsx
import clsx from "clsx";

interface IStudent {
  id: string;
  name: string;
  class: number;
  level: "Excellent" | "Optimal" | "Inefficient";
  avatar: string;
}

export function StudentCard({ student }: { student: IStudent }) {
  // Color-coded background based on "level"
  const bgColor = clsx({
    "bg-green-100": student.level === "Excellent",
    "bg-orange-100": student.level === "Optimal",
    "bg-red-100": student.level === "Inefficient",
    },
    // default fallback
    student.level === undefined && "bg-green-100"
  );

  // Example "progress" bar or indicator
  const progressColor = clsx({
    "bg-green-500": student.level === "Excellent",
    "bg-orange-500": student.level === "Optimal",
    "bg-red-500": student.level === "Inefficient",
  });

  return (
    <div className={`p-4 rounded-md ${bgColor} shadow-sm`}>
      <div className="flex items-center gap-3 mb-2">
        <img
          src={student.avatar}
          alt={student.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold">{student.name}</h2>
          <p className="text-sm text-gray-600">Class: {student.class}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-2">
        Level: <span className="font-semibold">{student.level}</span>
      </p>
      <div className="h-2 bg-gray-200 rounded-full">
        <div className={`h-2 rounded-full ${progressColor} w-3/4`} />
      </div>
    </div>
  );
}
