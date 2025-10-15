"use client";
import React from "react";
import Image from "next/image";
import Hero from "./ui/hero";
import Intro from "./ui/intro";
import Gallery from "./ui/gallery";
import Culture from "./ui/culture";
import Books from "./ui/books";
import Houses from "./ui/houses";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 lg:gap-10">
      <Hero></Hero>
      <Intro></Intro>
      <Houses></Houses>
      <section id="books">
        <Books></Books>
      </section>
      <Gallery></Gallery>
      <Culture></Culture>
    </div>
  );
}
