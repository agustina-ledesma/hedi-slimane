"use client";

import React from "react";

export default function CollectionsSkeleton() {
  return (
    <div className="p-6 min-h-screen">
      <div className="p-6 space-y-4 animate-pulse">
        {/* Skeleton del título principal */}
        <div className="h-12 md:h-16 lg:h-20 bg-neutral-100 w-3/4"></div>

        {/* Skeleton del subtexto */}
        <div className="h-6 bg-neutral-50 w-1/2"></div>

        {/* Skeleton de filtros (simula los selects) */}
        <div className="flex gap-3 mt-4">
          <div className="h-10 bg-neutral-100  w-24"></div>
          <div className="h-10 bg-neutral-100  w-24"></div>
          <div className="h-10 bg-neutral-100 w-24"></div>
        </div>

        {/* Skeleton de colecciones */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-10 justify-items-center px-3 py-3">
          {Array.from({ length: 12 }).map((_, idx) => (
            <div
              key={idx}
              className="w-full min-w-[120px] max-w-[250px] h-[350px] bg-neutral-100 animate-pulse "
            />
          ))}
        </div>
      </div>
    </div>
  );
}
