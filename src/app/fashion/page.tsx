"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { housesMap } from "@/utils/housesMap";

export default function fashion() {
  useEffect(() => {
    document.title = "Hedi Slimane – Fashion Gallery";
  }, []);

  return (
    <>
      <div className="min-h-screen">
        <div className="p-6">
          <h1 className="text-3xl md:text-4xl py-3 lg:text-5xl font-semibold">
            THE FASHION HOUSES
          </h1>
          <p className="font-semibold text-2xl my-8 lg:text-[32px] max-w-4xl">
            A journey through Hedi Slimane’s four fashion houses — from his
            early work at Yves Saint Laurent, to the revolution of Dior Homme,
            the reinvention of Saint Laurent, and his current vision at Celine.
          </p>
        </div>

        <div className="flex flex-col gap-5 items-start lg:flex-row">
          {/* Columna 1 */}
          <div className="w-fit lg:w-1/3 flex justify-start p-4 md:p-6">
            <div className="lg:mx-0 flex flex-col justify-end max-w-[300px] max-h-[300px]">
              <div className=" bg-blue-100">
                <Image
                  src="/images/hedi-slimane/hedi-fashion.jpg"
                  alt="Hedi Slimane"
                  className="object-contain"
                  width={300}
                  height={300}
                  style={{ width: "300px", height: "auto" }}
                />
              </div>
              <span className="text-sm flex justify-end py-2 text-gray-600">
                | Hedi Slimane
              </span>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="w-full  lg:flex lg:justify-end  overflow-x-auto no-scrollbar">
            {/* Contenedor de cards */}
            <div className="flex gap-4 lg:gap-8 px-5 w-fit lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:justify-end">
              {housesMap.map((item, idx) => (
                <Link
                  href={`/fashion/collection/${item.slug}`}
                  key={idx}
                  className="w-fit"
                >
                  <div className="relative w-fit  z-20 flex flex-col">
                    {/* contenedor fijo para la imagen */}
                    <div className="relative min-w-[270px] min-h-[350px] 2xl:w-[400px] 2xl:h-[500px]">
                      <img
                        width={300}
                        height={350}
                        src={item.cover}
                        alt={item.name}
                        className="object-cover min-w-[270px] min-h-[350px] 2xl:w-[400px] 2xl:h-[500px]"
                        
                      />
                    </div>

                    {/* texto */}
                    <span className="flex flex-col max-w-[250px] gap-1 mt-2">
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
