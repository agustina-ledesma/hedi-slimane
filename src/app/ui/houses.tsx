"use client";
import React from "react";
import Image from "next/image";
import { housesMap } from "@/utils/housesMap";
import Link from "next/link";
import HousesScroll from "./partials/houses-scroll";


export default function Houses() {
  return (
    <>
      <div className="">
        {/*   columna 1 */}
        <div className="py-3">
          <h2 className="text-4xl lg:text-5xl font-semibold px-6 my-5">
            THE FASHION HOUSES
          </h2>
          <div className="lg:hidden">
            <HousesScroll />
          </div>

          <div className="flex flex-col gap-4 max-w-3xl my-10 px-6">
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
        {/*   columa 2 */}
        <div>
          <div className="hidden lg:flex justify-center items-center py-10">
            <div className="flex flex-wrap gap-6 justify-center">
              {housesMap.slice(0, 4).map((item, idx) => (
                <Link
                  href={`/fashion/collection/${item.slug}`}
                  key={idx}
                  className="transition-transform duration-300 hover:scale-[1.10]"
                >
                  <div className="flex flex-col items-start flex-1 min-w-[200px] lg:max-w-[220px] xl:max-w-[270px]">
                    <div className="w-full">
                      <img
                        src={item.cover}
                        alt={item.name}
                        className="w-full h-full object-cover min-w-[220px] max-w-[270px]"
                      />
                    </div>
                    <span className="flex flex-col mt-2">
                      <span className="text-sm">{item.year}</span>
                      <span className="uppercase text-md">{item.name}</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
