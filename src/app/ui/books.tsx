"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Books() {
    
  const testimonials = [
    {
      image: "/images/books/1.jpg",
      year: 2002,
      title: "Intermission 1, Charta",
    },
    {
      image: "/images/books/2.jpg",
      year: 2003,
      title: "Berlin, Steidl/7L",
    },
    {
      image: "/images/books/3.jpg",
      year: 2004,
      title: "Stage, Steidl/7L",
    },
    {
      image: "/images/books/4.jpg",
      year: 2005,
      title: "London Birth of A Cult, Steidl/7L",
    },
    {
      image: "/images/books/5.jpg",
      year: 2005,
      title: "Interzone: The Hedi Slimane Book, Purple Fashion 4",
    },
    {
      image: "/images/books/6.jpg",
      year: 2006,
      title: "Portrait of A Performer: Courtney Love, a Visionaire bookzine",
    },
    {
      image: "/images/books/7.jpg",
      year: 2007,
      title: "Costa Da Caparica 1989 catálogo de exhibición",
    },
    {
      image: "/images/books/8.jpg",
      year: 2008,
      title: "Rock Diary, JRP-Ringier",
    },
    {
      image: "/images/books/9.jpg",
      year: 2009,
      title: "American Youth, DVD Box set, MK2",
    },
    {
      image: "/images/books/10.jpg",
      year: 2011,
      title: "Anthology of A Decade, JRP-Ringier",
    },
  ];

  return (
    <div className="h-[40rem] max-w-full flex flex-col antialiased bg-black dark:bg-grid-white/[0.05]  relative overflow-hidden">
      <h2 className="text-white text-2xl md:text-4xl font-semibold mt-10 mx-5">
        BOOKS
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
