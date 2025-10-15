"use client";
import React from "react";
import Image from "next/image";
import { housesMap } from "@/utils/housesMap";
import Link from "next/link";

export default function Houses() {
  return (
    <>
      <div className="">
        <div className="px-6 py-3">
          <h2 className="text-4xl lg:text-5xl font-semibold  my-5">
            THE FASHION HOUSES
          </h2>
          <div className="flex flex-col gap-4 max-w-3xl my-10">
            <p className="leading-[1.75]">
              Slimane undertook internships and worked with various designers,
              gradually developing his distinctive style that fused minimalism,
              sharp tailored silhouettes, and a strong rock influence.
            </p>
            <p className="leading-[1.75]">
              He graduated in Art History from the{" "}
              <span className="italic">École du Louvre</span> in Paris in 1992,
              after which he worked as an assistant to fashion consultant
              <strong> Jean-Jacques Picart.</strong>
            </p>
          </div>
        </div>
        <div className="flex h-fit py-10 lg:py-15 lg:my-5 items-center w-full lg:flex justify-start lg:justify-center gap-6  overflow-x-auto no-scrollbar">
          {housesMap.map((item, idx) => (
            <Link
              href={`/fashion/collection/${item.slug}`}
              key={idx}
              className="relative shrink-0 px-3 transition-transform duration-300 
              lg:hover:scale-125"
            >
              <div className="relative z-20 mt-6 flex flex-col">
                <div className="relative w-[225px] h-[335px]">
                  <img
                    src={item.cover}
                    alt={item.name}
                    className="w-[225px] h-[335px] object-cover"
                  />
                </div>
                <span className="flex flex-col max-w-[250px] gap-1 mt-2">
                  <span className="text-sm">{item.year}</span>
                  <span className="uppercase text-md">{item.name}</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
