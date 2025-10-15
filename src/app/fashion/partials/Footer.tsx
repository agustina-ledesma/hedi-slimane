"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";

type FooterProps = {
  seasons: string[];
  genders: string[];
  years: number[];
  collectionNames: string[];
  dataMap: Record<string, any>;

  seasonFilter: string;
  genderFilter: string;
  yearFilter: string;
  collectionFilter: string;
  hasCollectionNames: boolean;

  setSeasonFilter: (value: string) => void;
  setGenderFilter: (value: string) => void;
  setYearFilter: (value: string) => void;
  setCollectionFilter: (value: string) => void;
};

export default function Footer({
  seasons,
  genders,
  years,
  collectionNames,
  dataMap,
  seasonFilter,
  genderFilter,
  yearFilter,
  collectionFilter,
  setSeasonFilter,
  setGenderFilter,
  setYearFilter,
  setCollectionFilter,
  hasCollectionNames,
}: FooterProps) {
  const router = useRouter();
  const pathname = usePathname();

  const currentHouse = pathname.split("/").pop() || "";

  const handleHouseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value && value !== currentHouse) {
      router.push(`/fashion/collection/${value}`);
    }
  };

  return (
    <div className="sticky bottom-0 py-6 flex justify-center bg-gradient-to-t from-white to-transparent">
      <Dropdown>
        <DropdownTrigger>
          <Button className="border-black" variant="bordered">
            Filter
          </Button>
        </DropdownTrigger>

        <DropdownMenu aria-label="Filters" variant="flat" closeOnSelect={false}>
          <DropdownItem key="houses" textValue="houses">
            <div className="flex items-center gap-3 flex-1">
              <span className="shrink-0 font-semibold">House:</span>
              <select
                value={currentHouse}
                onChange={handleHouseChange}
                className="p-2 w-full sm:w-auto flex-1"
              >
                {Object.values(dataMap).map((house: any) => (
                  <option key={house.slug} value={house.slug}>
                    {house.name}
                  </option>
                ))}
              </select>
            </div>
          </DropdownItem>
          <>
            {hasCollectionNames && (
              <DropdownItem key="collections" textValue="collections">
                <div className="flex items-center gap-3 flex-1">
                  <span className="shrink-0 font-semibold">Collection:</span>
                  <select
                    value={collectionFilter}
                    onChange={(e) => setCollectionFilter(e.target.value)}
                    className="p-2 w-full sm:w-auto flex-1"
                  >
                    <option value="">All Collections</option>
                    {collectionNames.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
              </DropdownItem>
            )}
          </>

          <DropdownItem key="season" textValue="season">
            <div className="flex sm:flex-row items-center gap-4 p-1 sm:flex-1">
              <span className="shrink-0 font-semibold">Season:</span>
              <select
                value={seasonFilter}
                onChange={(e) => setSeasonFilter(e.target.value)}
                className="p-2 w-full sm:w-auto flex-1"
              >
                <option value="">All Seasons</option>
                {seasons.map((season) => (
                  <option key={season} value={season}>
                    {season}
                  </option>
                ))}
              </select>
            </div>
          </DropdownItem>

          <DropdownItem key="year" textValue="year">
            <div className="flex sm:flex-row items-center gap-4 p-1 sm:flex-1">
              <span className="shrink-0 font-semibold">Year:</span>
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="p-2 w-full sm:w-auto flex-1"
              >
                <option value="">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </DropdownItem>

          <DropdownItem key="gender" textValue="gender">
            <div className="flex sm:flex-row sm:items-center gap-4 p-1 sm:flex-1">
              <span className="shrink-0 font-semibold">Gender:</span>
              <select
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
                className="p-2 w-full sm:w-auto flex-1"
              >
                <option value="">All Genders</option>
                {genders.map((gender) => (
                  <option key={gender} value={gender}>
                    {gender}
                  </option>
                ))}
              </select>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
