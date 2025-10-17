"use client";
import { housesMap } from "@/utils/housesMap";
import { InfiniteMovingCardsHouses } from "@/components/ui/infinite-moving-cards-houses";

export default function HousesScroll() {
  return <InfiniteMovingCardsHouses items={housesMap} />;
}
