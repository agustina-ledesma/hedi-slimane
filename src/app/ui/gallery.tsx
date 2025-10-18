"use client";

import React from "react";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="flex flex-col gap-10 p-6 lg:mt-10">
      <h2 className="text-4xl lg:text-5xl font-semibold max-w-3xl">
        THE BLACK AND WHITE <br /> VISION
      </h2>
      <div className="max-w-3xl flex flex-col gap-6">
        <p className="leading-[1.75]">
          Hedi Slimane is renowned not only as a fashion designer but also as a
          visionary photographer. His black-and-white photography, marked by raw
          intimacy and a cinematic aesthetic, has been showcased in
          international exhibitions and acclaimed publications.{" "}
        </p>
        <p className="leading-[1.75]">
          Through his lens, Slimane captures youth culture, music, and timeless
          portraits that mirror his signature artistic universe.
        </p>
      </div>
      <a
        href="https://www.hedislimane.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black font-semibold text-2xl underline decoration-3 underline-offset-8 "
      >
        GALLERY
      </a>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="py-4">
          <figure className="flex flex-col gap-2">
            <Image
              src="/images/gallery/gallery-1.png"
              alt="Hedi Slimane diary - 2025-02-04 / 7150"
              width={338}
              height={203}
              style={{ width: "338px", height: "203px" }} 
            />
            <figcaption className="text-sm italic text-gray-600">
              Hedi Slimane diary - 2025-02-04 / 7150
            </figcaption>
          </figure>

          <figure className="flex flex-col gap-2">
            <Image
              src="/images/gallery/gallery-4.png"
              alt="hedi slimane sonic fondation pierre bergé"
              width={338}
              height={203}
              style={{ width: "338px", height: "203px" }}
            />
            <figcaption className="text-sm italic text-gray-600">
              Hedi slimane sonic fondation pierre bergé
            </figcaption>
          </figure>
        </div>

        <div className="flex justify-end p-4">
          <figure className="flex flex-col gap-2">
            <Image
              src="/images/gallery/gallery-3.png"
              alt="Fragments Americana - Almine Rech gallery brussels, February 2011"
              width={494}
              height={624}
              style={{ width: "490px", height: "auto" }}
            />
            <figcaption className="text-sm italic text-gray-600">
              Fragments Americana - Almine Rech gallery brussels, February 2011
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
