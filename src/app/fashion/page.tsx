"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { housesMap } from "@/utils/housesMap";
import HousesScroll from "@/ui/partials/houses-scroll";

export default function Fashion() {
  useEffect(() => {
    document.title = "Hedi Slimane – Fashion Gallery";
  }, []);

  return (
    <>
      <div className="min-h-screen">
        <div className="p-6 flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            THE FASHION HOUSES
          </h1>
          <p className="font-semibold text-2xl lg:text-[32px] max-w-4xl">
            A journey through Hedi Slimane’s four fashion houses — from his
            early work at Yves Saint Laurent, to the revolution of Dior Homme,
            the reinvention of Saint Laurent, and his current vision at Celine.
          </p>
        </div>
        <div className="lg:hidden pb-5">
          <div className="flex flex-col w-fit px-6">
            <Image
              src="/images/hedi-slimane/hedi-fashion.jpg"
              alt="Hedi Slimane"
              className="object-contain"
              width={300}
              height={300}
              style={{ width: "300px", height: "300" }}
              sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw"
              priority
            />
            <span className="text-sm flex justify-end py-2 text-gray-600">
              | Hedi Slimane
            </span>
          </div>
          <HousesScroll />
        </div>
        <div className="hidden lg:block pb-10">
          <div className="flex flex-col gap-5 items-start lg:flex-row">
            {/* Columna 1 */}
            <div className="w-fit lg:w-1/3 flex flex-col justify-start px-4 md:px-6">
              <div className="lg:mx-0 flex flex-col justify-end max-w-[300px] max-h-[300px]">
                <div className="">
                  <Image
                    src="/images/hedi-slimane/hedi-fashion.jpg"
                    alt="Hedi Slimane"
                    className="object-contain"
                    width={300}
                    height={300}
                    style={{ width: "300px", height: "auto" }}
                    sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw"
                    priority
                  />
                </div>
                <span className="text-sm flex justify-end py-2 text-gray-600">
                  | Hedi Slimane
                </span>
              </div>
            </div>

            {/* Columna 2 */}
            <div className="w-full hidden lg:flex py-10 md:py-0  lg:justify-end  overflow-x-auto no-scrollbar">
              {/* Contenedor de cards */}
              <div className="flex gap-4 lg:gap-8 px-5 w-fit lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:justify-end">
                {housesMap.map((item, idx) => (
                  <Link
                    href={`/fashion/collection/${item.slug}`}
                    key={idx}
                    className="w-fit"
                  >
                    <div className="flex flex-col items-start flex-1 min-w-[200px] lg:max-w-[220px] xl:max-w-[250px]">
                      <div className="w-full">
                        <img
                          src={item.cover}
                          alt={item.name}
                          className="w-full h-full object-cover min-w-[220px] max-w-[280px]"
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
      </div>
    </>
  );
}
