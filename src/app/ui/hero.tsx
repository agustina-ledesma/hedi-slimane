"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col gap-6 w-full p-6 2xl:mt-10">
        {/* Título */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold">
          WHO THE F*CK IS HEDI SLIMANE?
        </h1>

        {/* Imagen (tamaño fijo y centrado) */}
        <div className="flex flex-col gap-3 pb-2 w-full">
          <div className="mx-auto">
            {" "}
            <Image
              src={"/images/hedi-slimane/hedi-home.png"}
              alt="Hedi Slimane"
              width={1900}
              height={500}
              priority
            />{" "}
          </div>
          <div className="flex lg:justify-end py-2 mb-3">
            <p className="leading-[1.75] uppercase text-md  lg:text-lg lg:text-right max-w-3xl">
              French designer and photographer — Hedi Slimane fuses rock attitude
              with refined minimalism, redefining the essence of modern
              elegance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
