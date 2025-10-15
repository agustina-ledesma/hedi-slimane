"use client";

import React from "react";
import Link from "next/link";

export default function HouseNotFound() {
  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-center text-md uppercase">
        Fashion house not found.
      </h1>
      <Link
        href="/fashion"
        className="uppercase  text-xs underline decoration-2 underline-offset-5 "
      >
        Back to Fashion houses
      </Link>
    </div>
  );
}
