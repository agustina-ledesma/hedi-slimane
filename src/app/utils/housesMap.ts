import apiData from "@/data/api.json"; // o de donde tengas tu info inicial

function normalizeName(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

// Generamos un array de objetos con slug, nombre y cover
export const housesMap = apiData.houses.map((house) => ({
  slug: normalizeName(house.name),
  name: house.name, // ya viene de la API
  cover: house.cover, // ya viene de la API
  year: house.year, // ya viene de la API
}));
