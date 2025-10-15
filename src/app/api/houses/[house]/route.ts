import apiData from "@/data/api.json";
import { NextResponse } from "next/server";

function normalizeName(name: string) {
  return name?.toLowerCase().replace(/\s+/g, "-") || "";
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ house: string }> }
): Promise<Response> {
  const { house } = await params; // ⬅️ Cambio clave en Next 15

  // Buscar la casa
  const foundHouse = apiData.houses.find(
    (h) => normalizeName(h.name) === normalizeName(house)
  );

  if (!foundHouse) {
    return NextResponse.json({ error: "House not found" }, { status: 404 });
  }

  const url = new URL(req.url);
  const collectionName = url.searchParams.get("collection");
  const year = url.searchParams.get("year");
  const season = url.searchParams.get("season");
  const gender = url.searchParams.get("gender");

  let filteredCollections: typeof foundHouse.collections = [];

  /*  if (collectionName) {
    // Si hay collectionName, solo traer esa colección
    filteredCollections = foundHouse.collections.filter(
      (c) => c.name && normalizeName(c.name) === normalizeName(collectionName)
    );
  } else {

   filteredCollections = foundHouse.collections.filter((c) => {
      let match = true;
      if (year) match = match && c.year.toString() === year;
      if (season) match = match && c.season.toLowerCase() === season.toLowerCase();
      if (gender) match = match && c.gender.toLowerCase() === gender.toLowerCase();
      return match;
    });
  }
 */

  if (collectionName) {
    filteredCollections = foundHouse.collections.filter((c) => {
      const name = c.name ?? ""; // si es null, lo tratamos como string vacío
      return normalizeName(name) === normalizeName(collectionName);
    });
  } else {
    filteredCollections = foundHouse.collections.filter((c) => {
      let match = true;
      if (year) match = match && c.year.toString() === year;
      if (season)
        match = match && c.season.toLowerCase() === season.toLowerCase();
      if (gender)
        match = match && c.gender.toLowerCase() === gender.toLowerCase();
      return match;
    });
  }

  return NextResponse.json({
    ...foundHouse,
    collections: filteredCollections,
    allCollections: foundHouse.collections,
  });
}
