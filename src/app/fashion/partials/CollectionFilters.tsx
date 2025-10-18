"use client";
import { useRouter, usePathname } from "next/navigation";
import { Select, SelectItem, SelectSection } from "@heroui/react";

interface House {
  slug: string;
  name: string;
}

interface CollectionFiltersProps {
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
}

export default function CollectionFilters({
  seasons,
  genders,
  years,
  collectionNames,
  seasonFilter,
  genderFilter,
  yearFilter,
  collectionFilter,
  setSeasonFilter,
  setGenderFilter,
  setYearFilter,
  setCollectionFilter,
  hasCollectionNames,
  dataMap,
}: CollectionFiltersProps) {
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
    <div className="hidden md:block flex flex-col gap-6 lg:text-lg max-w-4xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
        <div className="flex items-center gap-3 flex-1 py-3">
          <Select
            label="House:"
            size="lg"
            variant="underlined"
            labelPlacement="outside-left"
            selectedKeys={[currentHouse]}
            onSelectionChange={(keys) => {
              const keySet = keys as Set<string>;
              const value = keySet.values().next().value || "";
              if (value && value !== currentHouse) {
                router.push(`/fashion/collection/${value}`);
              }
            }}
            classNames={{
              label: "text-lg font-semibold pe-3",
              listbox: "text-lg",
            }}
          >
            {Object.values(dataMap).map((house: House) => (
              <SelectItem key={house.slug}>{house.name}</SelectItem>
            ))}
          </Select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 py-3">
        {/* Collection */}
        {hasCollectionNames && (
          <div className="flex items-center gap-3 flex-1">
            <Select
              label="Collection:"
              variant="underlined"
              labelPlacement="outside-left"
              selectedKeys={collectionFilter ? [collectionFilter] : ["all"]}
              onSelectionChange={(keys) => {
                const keySet = keys as Set<string>;
                const value = keySet.values().next().value || "all";
                setCollectionFilter(value === "all" ? "" : value);
              }}
              classNames={{
                label: "text-lg font-semibold pe-3",
                listbox: "text-lg",
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
        )}

        {/* Season */}
        <div className="flex items-center gap-3 flex-1">
          <Select
            label="Season:"
            variant="underlined"
            labelPlacement="outside-left"
            selectedKeys={seasonFilter ? [seasonFilter] : ["all"]}
            onSelectionChange={(keys) => {
              const keySet = keys as Set<string>;
              const value = keySet.values().next().value || "all";
              setSeasonFilter(value === "all" ? "" : value);
            }}
            classNames={{
              label: "text-lg font-semibold pe-3",
              listbox: "text-lg",
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
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 py-3">
        {/* Year */}
        <div className="flex items-center gap-3 flex-1">
          <Select
            label="Year:"
            variant="underlined"
            labelPlacement="outside-left"
            selectedKeys={yearFilter ? [yearFilter] : ["all"]}
            /* onSelectionChange={(keys) => {
              const value = Array.from(keys)[0];
              setYearFilter(value === "all" ? "" : value);
            }} */
            onSelectionChange={(keys) => {
              const keySet = keys as Set<string>;
              const value = keySet.values().next().value || "all";
              setYearFilter(value === "all" ? "" : value);
            }}
            classNames={{
              label: "text-lg font-semibold pe-3",
              listbox: "text-lg",
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

        {/* Gender */}
        <div className="flex items-center gap-3 flex-1">
          <Select
            label="Gender:"
            variant="underlined"
            labelPlacement="outside-left"
            selectedKeys={genderFilter ? [genderFilter] : ["all"]}
            onSelectionChange={(keys) => {
              const keySet = keys as Set<string>;
              const value = keySet.values().next().value || "all";
              setGenderFilter(value === "all" ? "" : value);
            }}
            classNames={{
              label: "text-lg font-semibold pe-3",
              listbox: "text-lg",
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
      </div>
    </div>
  );
}
