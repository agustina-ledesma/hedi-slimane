// src/app/fashion/collection/[house]/page.tsx
import { housesMap } from "@/utils/housesMap";
import HouseClient from "./HouseClient"; // client component

export async function generateMetadata({ params }: { params: { house: string } }) {
  const houseParam = (await params).house.toLowerCase(); // await aquí
  const houseData = housesMap.find(h => h.slug.toLowerCase() === houseParam);

  return {
    title: houseData
      ? `Hedi Slimane – ${houseData.name}`
      : "Hedi Slimane – House Not Found",
  };
}


export default function HousePage({ params }: { params: { house: string } }) {
  // params se pasa al client component
  return <HouseClient params={params} />;
}
