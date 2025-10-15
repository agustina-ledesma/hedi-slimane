"use client";
import React from "react";
import Image from "next/image";
import { Shadows_Into_Light } from "next/font/google";
import {
  DraggableCardBody,
  DraggableCardContainer,
  DraggableIcon,
} from "@/components/ui/draggable-card";
import { IconStar, IconHeart } from "@tabler/icons-react";
import { Skeleton } from "@heroui/react";

const shadows = Shadows_Into_Light({
  weight: "400",
  subsets: ["latin"],
});

export default function Intro() {
  const items = [
    {
      title: "Kate Moss 2008 - Hedi diary",
      image: "images/hedi-slimane/katemoss.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Hedi Slimane - 1998",
      image: "images/hedi-slimane/hedi_young.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Young Hedi Slimane",
      image: "images/hedi-slimane/hedi_kid.jpg",

      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Hedi :)",
      image: "images/hedi-slimane/hedi.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
  ];

  const icons = [
    {
      image: "images/hedi-slimane/start.png",
      title: "Start",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      image: "images/hedi-slimane/start.png",
      title: "Start",
      className: "absolute top-40 left-[10%] rotate-[-7deg]",
    },
    {
      image: "images/hedi-slimane/start.png",
      title: "Start",
      className: "absolute top-50 left-[65%] rotate-[-10deg]",
    },
  ];

  const [loadedImages, setLoadedImages] = React.useState<boolean[]>(
    Array(items.length).fill(false)
  );

  return (
    <div className="lg:min-h-screen flex lg:mt-10 flex-col gap-6 lg:my-5 p-6">
      <h2 className="text-2xl md:text-4xl font-semibold">
        HEDI SLIMANE, THE ICON
      </h2>

       <div className="flex justify-center items-center">
        <DraggableCardContainer className="relative h-[600px] flex justify-center  w-full items-center  overflow-clip">
          <p className="absolute top-1/2 mx-auto max-w-lg -translate-y-3/4 text-center text-2xl italic md:text-4xl">
            Fashion somehow, for me, is purely and happily irrational.
          </p>

          {items.map((item, index) => (
            <div key={index}>
              <DraggableCardBody className={item.className}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="pointer-events-none relative z-10 h-80 w-80 object-cover mx-auto"
                />
                
                <h3
                  className={`${shadows.className} mt-4 text-center text-lg lg:text-2xl text-neutral-900`}
                >
                  {item.title}
                </h3>
              </DraggableCardBody>
            </div>
          ))}

          {icons.map((item, index) => (
            <div key={index}>
              <DraggableIcon className={item.className}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="pointer-events-none relative z-10 h-20 w-20 mx-auto"
                />
              </DraggableIcon>
            </div>
          ))}
        </DraggableCardContainer>
      </div>
      
      <div className="flex lg:justify-end mt-10">
        <div className="flex flex-col gap-4 max-w-2xl">
          {/* <h2 className="text-2xl md:text-4xl font-semibold">HEDI SLIMANE,  THE ICON</h2> */}
          <p className="leading-[1.75]">
            From a young age, <b>Hedi Slimane</b> developed a fascination with
            fashion and photography, deeply influenced by rock culture and
            music. While studying, he began to explore design and experiment
            with the aesthetics of the male silhouette, laying the foundation
            for his future vision.
          </p>
          <p>
            Slimane studied at the{" "}
            <span className="italic">École du Louvre</span>, a prestigious art
            school in Paris, where he trained in art history and classical art.
            He later specialized in fashion and design, allowing him to merge
            his artistic background with his passion for clothing and creative
            expression.
          </p>
        </div>
      </div>
    </div>
  );
}
