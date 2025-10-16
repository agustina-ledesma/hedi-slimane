"use client";
import { useRouter, usePathname } from "next/navigation";

interface House {
  slug: string;
  name: string;
  // otros campos si los necesitás
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
    <div className="hidden md:block flex flex-col gap-3 lg:text-lg max-w-4xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
        <div className="flex items-center gap-3 flex-1">
          <span className="shrink-0 font-semibold">House:</span>
          <select
            value={currentHouse}
            onChange={handleHouseChange}
            className="p-2 w-full sm:w-auto flex-1"
          >
            {Object.values(dataMap).map((house: House) => (
              <option key={house.slug} value={house.slug}>
                {house.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
        {/* Collection */}
        {hasCollectionNames && (
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
        )}

        {/* Season */}
        <div className="flex items-center gap-3 flex-1">
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
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
        {/* Year */}
        <div className="flex items-center gap-3 flex-1">
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

        {/* Gender */}
        <div className="flex items-center gap-3 flex-1">
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
      </div>
    </div>
  );
}
