// src/app/fashion/collection/[house]/page.tsx
import { housesMap } from "@/utils/housesMap";
import HouseClient from "./HouseClient";

// 🔹 generateMetadata ahora recibe params como Promise
export async function generateMetadata({
  params,
}: {
  params: Promise<{ house: string }>;
}) {
  const { house } = await params; // 👈 se espera la promesa
  const houseParam = house.toLowerCase();
  const houseData = housesMap.find((h) => h.slug.toLowerCase() === houseParam);

  return {
    title: houseData
      ? `Hedi Slimane – ${houseData.name}`
      : "Hedi Slimane – House Not Found",
  };
}

// 🔹 El componente de página también debe esperar los params
export default async function HousePage({
  params,
}: {
  params: Promise<{ house: string }>;
}) {
  const resolvedParams = await params; // 👈 importante
  return <HouseClient params={resolvedParams} />;
}
