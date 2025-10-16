"use client";
import { useEffect, useState } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { HouseMapItem, housesMap } from "@/utils/housesMap";
import CollectionFilters from "@/fashion/partials/CollectionFilters";
import CollectionsList from "@/fashion/partials/CollectionList";
import Tags from "@/fashion/partials/Tags";
import Footer from "@/fashion/partials/Footer";
import HouseNotFound from "./not-found";
import CollectionsSkeleton from "./CollectionSkeleton";

interface Collection {
  id: number;
  name: string | null;
  cover: string;
  season: string;
  year: number;
  gender: string;
  images: string[];
}

interface House {
  name: string;
  collections: Collection[];
  allCollections: Collection[];
}

interface HouseClientProps {
  params: { house: string };
  dataMap?: Record<string, HouseMapItem>;
}

export default function  HouseClient({ params, dataMap }: HouseClientProps) {
  
  const houseParam = params.house.toLowerCase();
  //const params = useParams();

  //const houseParam = (params?.house as string)?.toLowerCase();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [house, setHouse] = useState<House | null>(null);
  const [loading, setLoading] = useState(true);

  // Filtros iniciales desde la URL
  const [seasonFilter, setSeasonFilter] = useState(
    searchParams.get("season") || ""
  );
  const [genderFilter, setGenderFilter] = useState(
    searchParams.get("gender") || ""
  );
  const [yearFilter, setYearFilter] = useState(searchParams.get("year") || "");

  const [collectionFilter, setCollectionFilter] = useState(
    searchParams.get("collection") || ""
  );

  const housesMapObject: Record<string, HouseMapItem> = {};
  housesMap.forEach((house) => {
    housesMapObject[house.slug] = house;
  });

  // 🔹 Limpiar filtros combinables si seleccionás una colección
  useEffect(() => {
    if (collectionFilter) {
      setSeasonFilter("");
      setGenderFilter("");
      setYearFilter("");
    }
  }, [collectionFilter]);

  // 🔹 Limpiar collectionFilter si seleccionás filtros combinables
  useEffect(() => {
    if (seasonFilter || genderFilter || yearFilter) {
      setCollectionFilter("");
    }
  }, [seasonFilter, genderFilter, yearFilter]);

  useEffect(() => {
    if (!houseParam) return;

    const query = new URLSearchParams();
    if (seasonFilter) query.set("season", seasonFilter);
    if (genderFilter) query.set("gender", genderFilter);
    if (yearFilter) query.set("year", yearFilter);
    if (collectionFilter) query.set("collection", collectionFilter);

    router.replace(`/fashion/collection/${houseParam}?${query.toString()}`);

    const fetchHouse = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/houses/${houseParam}?${query.toString()}`
        );
        if (!res.ok) throw new Error("House not found");
        const data = await res.json();
        setHouse(data);
      } catch (err) {
        console.error(err);
        setHouse(null);
      } finally {
        setLoading(false);
      }
    };

    fetchHouse();
  }, [
    router,
    houseParam,
    seasonFilter,
    genderFilter,
    yearFilter,
    collectionFilter,
  ]);

  if (loading) return <CollectionsSkeleton />;

  if (!house) return <HouseNotFound />;

  // 🔹 Generar opciones de selects
  const seasons = Array.from(
    new Set(house.allCollections.map((c) => c.season))
  );
  const genders = Array.from(
    new Set(house.allCollections.map((c) => c.gender))
  );
  const years = Array.from(
    new Set(house.allCollections.map((c) => String(c.year)))
  );
  const collectionNames: string[] = Array.from(
    new Set(
      house.allCollections
        .map((c) => c.name)
        .filter((name): name is string => name !== null && name !== "")
    )
  );
  const hasCollectionNames = house.allCollections.some((c) => c.name !== null);

  return (
    <div className="p-4 md:p-6">
      <h1 className="uppercase text-2xl md:text-4xl lg:text-5xl font-semibold py-3 lg:py-6">
        <span>{house.name} - </span>
        {collectionFilter
          ? collectionFilter
          : yearFilter
          ? yearFilter
          : "all collections"}
      </h1>

      <CollectionFilters
        seasons={seasons}
        genders={genders}
        years={years}
        collectionNames={collectionNames}
        seasonFilter={seasonFilter}
        genderFilter={genderFilter}
        yearFilter={yearFilter}
        collectionFilter={collectionFilter}
        setSeasonFilter={setSeasonFilter}
        setGenderFilter={setGenderFilter}
        setYearFilter={setYearFilter}
        setCollectionFilter={setCollectionFilter}
        hasCollectionNames={hasCollectionNames}
        dataMap={housesMapObject}
      />

      <Tags dataMap={housesMapObject} />

      <div className="relative">
        <CollectionsList collections={house.collections} house={house.name} />
      </div>

      <Footer
        dataMap={housesMapObject}
        seasons={seasons}
        genders={genders}
        years={years}
        collectionNames={collectionNames}
        seasonFilter={seasonFilter}
        genderFilter={genderFilter}
        yearFilter={yearFilter}
        collectionFilter={collectionFilter}
        setSeasonFilter={setSeasonFilter}
        setGenderFilter={setGenderFilter}
        setYearFilter={setYearFilter}
        setCollectionFilter={setCollectionFilter}
        hasCollectionNames={hasCollectionNames}
      />
    </div>
  );
}
