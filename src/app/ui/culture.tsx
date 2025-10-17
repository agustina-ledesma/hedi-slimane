"use client";
import React from "react";
import Image from "next/image";

export default function Culture() {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-6 p-6">
      <div className="lg:w-1/2 p-4">
        <div className=" mx-auto lg:mx-0 flex flex-col justify-end max-w-[300px]">
          <Image
            src="/images/gallery/karl2.png"
            alt="Karl Lagerfeld"
            width={300}
            height={300}
            style={{ width: "300px", height: "auto" }}
          />
          <div className="w-full ps-8 my-5 flex flex-col justify-end">
            <p className=" text-3xl lg:text-4xl text-end italic font-semibold">
              “I had to go on a diet just to fit into Hedi’s jeans.”
            </p>
            <span className="flex justify-end mt-10">| Karl Lagerfeld </span>
          </div>
        </div>
      </div>

      <div className="lg:w-1/ p-4">
        <h2 className="text-4xl lg:text-5xl font-semibold my-5">
          THE HEDI CULT AND THE HEDI BOYS
        </h2>
        <div className="max-w-4xl flex flex-col gap-6">
          <p className="leading-[1.75]">
            Closely tied to music, nightlife, and Slimane’s black-and-white
            photography, the movement spread from Paris to London, New York, and
            Tokyo, becoming a global symbol of youth culture and defining an era
            of menswear. <strong>Karl Lagerfeld</strong> famously remarked:{" "}
            <span className="italic font-semibold">
              “I had to go on a diet just to fit into Hedi’s jeans.”
            </span>{" "}
          </p>
          <p className="leading-[1.75]">
            During his Dior Homme years, <b>Hedi Slimane </b>reshaped menswear with
            razor-thin silhouettes and a rock-inspired edge. This gave rise to
            the Hedi Boys, young men who adopted his style as both fashion and
            lifestyle, defined by skinny jeans, sharp jackets, leather and
            boots.
          </p>
        </div>
      </div>
    </div>
  );
}
