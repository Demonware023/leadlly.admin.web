"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Institute Overview &amp; Management</h1>

      {/* Top Card: Institute Info */}
      <div className="relative rounded-lg border border-purple-200 bg-purple-50 p-4 md:flex md:items-center md:gap-6">
        {/* Edit Button */}
        <button
          className="absolute top-4 right-4 rounded-md bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-400"
          onClick={() => alert("Edit clicked!")}
        >
          ✎ Edit
        </button>

        {/* Logo + Left Info */}
        <div className="flex items-start gap-4">
          {/* Institute Logo */}
          <div className="w-24 h-24 relative">
            <Image
              src="/university-logo.png" // Replace with your actual image
              alt="Institute Logo"
              fill
              className="object-contain rounded-md"
            />
          </div>

          <div className="space-y-1">
            <p className="text-sm text-gray-600">Established in 2001</p>
            <h2 className="text-lg font-semibold">
              Chaitanya Bharathi Institute
            </h2>
            <p className="text-sm text-gray-600">
              Institute Code : <span className="font-semibold">21XYZ1234</span>
            </p>
          </div>
        </div>

        {/* Right Info: Address, Contact, Email */}
        <div className="mt-4 md:mt-0 md:ml-auto text-sm space-y-1 text-gray-700">
          <p>
            <strong>Address:</strong> 123, Main Street, City, Country
          </p>
          <p>
            <strong>Contact:</strong> +1234567890
          </p>
          <p>
            <strong>Email:</strong> info@institute.com
          </p>
        </div>
      </div>

      {/* Bottom Cards: Students & Teachers Overview */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Students Overview */}
        <div className="rounded-lg border border-green-200 bg-green-50 p-4">
          <h3 className="mb-2 text-lg font-semibold">Students Overview</h3>
          <div className="space-y-1 text-sm text-gray-700">
            <p>
              <strong>Total Students:</strong> 2284
            </p>
            <p>
              <strong>Active Courses:</strong> 84
            </p>
            <p>
              <strong>Average Attendance:</strong> 98%
            </p>
            <p>
              <strong>Performance Index:</strong> 9.0/10
            </p>
          </div>
          <button
            className="mt-3 rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-400"
            onClick={() => router.push("/batches")}
          >
            View Students
          </button>
        </div>

        {/* Teachers Overview */}
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <h3 className="mb-2 text-lg font-semibold">Teachers Overview</h3>
          <div className="space-y-1 text-sm text-gray-700">
            <p>
              <strong>Total Teachers:</strong> 24
            </p>
            <p>
              <strong>Departments:</strong> 14
            </p>
            <p>
              <strong>Active Classes:</strong> 98
            </p>
            <p>
              <strong>Satisfaction Rate:</strong> 9.0/10
            </p>
          </div>
          <button
            className="mt-3 rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-400"
            onClick={() => alert("View Teachers clicked!")}
          >
            View Teachers
          </button>
        </div>
      </div>
    </main>
  );
}
