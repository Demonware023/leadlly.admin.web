// src/app/(root)/batches/components/BatchGroup.tsx
import { BatchCard } from "../../batches/components/BatchCard";

interface IBatch {
  id: string;
  name: string;
  subject: string;
  totalStudents: number;
  maxStudents: number;
  status: string;
  teacher: string;
}

interface IBatchGroupProps {
  group: {
    standard: string;
    batches: IBatch[];
  };
}

export function BatchGroup({ group }: IBatchGroupProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{group.standard}</h2>
        <button className="text-purple-500 font-medium">+ Add batch</button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {group.batches.map((batch) => (
          <BatchCard key={batch.id} batch={batch} />
        ))}
      </div>
    </div>
  );
}
