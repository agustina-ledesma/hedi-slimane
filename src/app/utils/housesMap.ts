import apiData from "@/data/api.json";

function normalizeName(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export interface HouseMapItem {
  slug: string;
  name: string;
  cover: string;
  year: string;
}

// 🔹 Aseguramos que siempre sea un array
export const housesMap: HouseMapItem[] = Array.isArray(apiData.houses)
  ? apiData.houses.map((house) => ({
      slug: normalizeName(house.name),
      name: house.name,
      cover: house.cover,
      year: house.year,
    }))
  : [];
