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
import { Select, SelectItem, SelectSection } from "@heroui/react";

interface House {
  slug: string;
  name: string;
  // otros campos si los necesitás
}

type FooterProps = {
  seasons: string[];
  genders: string[];
  years: string[];
  collectionNames: string[];
  dataMap: Record<string, House>;

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
              <Select
                label="House:"
                size="lg"
                variant="underlined"
                selectedKeys={[currentHouse]}
                onSelectionChange={(keys) => {
                  const keySet = keys as Set<string>;
                  const value = keySet.values().next().value || "";
                  if (value && value !== currentHouse) {
                    router.push(`/fashion/collection/${value}`);
                  }
                }}
              >
                {Object.values(dataMap).map((house: House) => (
                  <SelectItem key={house.slug}>{house.name}</SelectItem>
                ))}
              </Select>
            </div>
          </DropdownItem>
          <>
            {hasCollectionNames && (
              <DropdownItem key="collections" textValue="collections">
                <div className="flex items-center gap-3 flex-1">
                  <Select
                    label="Collection:"
                    variant="underlined"
                    size="lg"
                    selectedKeys={
                      collectionFilter ? [collectionFilter] : ["all"]
                    }
                    onSelectionChange={(keys) => {
                      const keySet = keys as Set<string>;
                      const value = keySet.values().next().value || "all";
                      setCollectionFilter(value === "all" ? "" : value);
                    }}
                  >
                    <SelectItem key="all">All Collections</SelectItem>
                    <SelectSection>
                      {collectionNames.map((name) => (
                        <SelectItem key={name}>{name}</SelectItem>
                      ))}
                    </SelectSection>
                  </Select>
                </div>
              </DropdownItem>
            )}
          </>

          <DropdownItem key="season" textValue="season">
            <div className="flex sm:flex-row items-center gap-4  sm:flex-1">
              <Select
                label="Season:"
                variant="underlined"
                size="lg"
                selectedKeys={seasonFilter ? [seasonFilter] : ["all"]}
                onSelectionChange={(keys) => {
                  const keySet = keys as Set<string>;
                  const value = keySet.values().next().value || "all";
                  setSeasonFilter(value === "all" ? "" : value);
                }}
              >
                <SelectItem key="all">All Seasons</SelectItem>
                <SelectSection>
                  {seasons.map((season) => (
                    <SelectItem key={season}>{season}</SelectItem>
                  ))}
                </SelectSection>
              </Select>
            </div>
          </DropdownItem>

          <DropdownItem key="year" textValue="year">
            <div className="flex sm:flex-row items-center gap-4 sm:flex-1">
              <Select
                label="Year:"
                variant="underlined"
                size="lg"
                selectedKeys={yearFilter ? [yearFilter] : ["all"]}
                onSelectionChange={(keys) => {
                  const keySet = keys as Set<string>;
                  const value = keySet.values().next().value || "all";
                  setYearFilter(value === "all" ? "" : value);
                }}
              >
                <SelectItem key="all">All Years</SelectItem>
                <SelectSection>
                  {years.map((year) => (
                    <SelectItem key={year}>{year}</SelectItem>
                  ))}
                </SelectSection>
              </Select>
            </div>
          </DropdownItem>

          <DropdownItem key="gender" textValue="gender">
            <div className="flex sm:flex-row sm:items-center gap-4  sm:flex-1">
              <Select
                label="Gender:"
                variant="underlined"
                size="lg"
                selectedKeys={genderFilter ? [genderFilter] : ["all"]}
                onSelectionChange={(keys) => {
                  const keySet = keys as Set<string>;
                  const value = keySet.values().next().value || "all";
                  setGenderFilter(value === "all" ? "" : value);
                }}
              >
                <SelectItem key="all">All Genders</SelectItem>
                <SelectSection>
                  {genders.map((gender) => (
                    <SelectItem key={gender}>{gender}</SelectItem>
                  ))}
                </SelectSection>
              </Select>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
