"use client";
import React from "react";
import Link from "next/link";

export default function FooterLayout() {
  return (
    <footer className="border-t-1 border-black">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex justify-center p-2 md:p-4 md:justify-start">
          <div className="flex flex-col justify-center gap-1 pt-3">
            <span className="text-sm text-center md:text-start">
              HEDI SLIMANE
            </span>
            <span className="text-xs "> &copy; 2025 All rights reserved.</span>
          </div>
        </div>

        <div className="flex-1 flex justify-center p-2 md:p-4 md:justify-end">
          <div className="flex p-2 md:justify-end gap-6 sm:gap-6">
            <Link href="/" className="text-sm">
              HOME
            </Link>
            <Link href="/fashion" className="text-sm">
              FASHION
            </Link>
            <Link href="/#books" className="text-sm">
              BOOKS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
