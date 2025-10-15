// app/not-found.tsx
"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="mb-4 uppercase text-md font-semibold">Page Not Found</h1>
      <p className="mb-6 text-gray-800 uppercase text-sm">Sorry, the page you’re looking for doesn’t exist.</p>
      <Link
        href="/"
        className="uppercase  text-xs underline decoration-2 underline-offset-5 "
      >
        Back to Home
      </Link>
    </main>
  );
}
