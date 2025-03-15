const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchBatches() {
  const response = await fetch(`${API_URL}/batches`);
  if (!response.ok) {
    throw new Error("Failed to fetch batches");
  }
  return response.json();
}

export async function fetchStudents(batchId: string) {
  const response = await fetch(`${API_URL}/batches/${batchId}/students`);
  if (!response.ok) {
    throw new Error("Failed to fetch students");
  }
  return response.json();
}
