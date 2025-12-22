// app/not-found.tsx
"use client";
import Link from "next/link";

export default function Maintenance() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="mb-4 uppercase text-md font-semibold">Under Maintenance</h1>
      <p className="mb-6 text-gray-800 uppercase text-sm">
        This gallery is currently under maintenance. Thank you for your
        understanding.
      </p>
      <Link
        href="/"
        className="uppercase  text-xs underline decoration-2 underline-offset-5 "
      >
        Back to Home
      </Link>
    </main>
  );
}
