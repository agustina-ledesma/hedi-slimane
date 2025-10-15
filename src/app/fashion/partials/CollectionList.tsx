"use client";
import Image from "next/image";

interface Collection {
  id: number;
  name: string;
  season: string;
  year: number;
  gender: string;
  coverImage: string;
  images: string[];
}

interface CollectionsListProps {
  collections: Collection[];
  house: string;
}

export default function CollectionsList({
  collections,
  house,
}: CollectionsListProps) {
  const allImages = collections.flatMap((collection) =>
    collection.images.map((img) => ({
      img,
      name: collection.name,
      id: collection.id,
      year: collection.year,
      gender: collection.gender,
      season: collection.season,
    }))
  );

  if (allImages.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h2 className="py-3 text-md uppercase text-secondary-800">
          NO RESULTS.
        </h2>
      </div>
    );
  }

  return (
    <div className="w-full max-w-8xl mx-auto mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-10 justify-items-center py-3">
      {allImages.map((item, idx) => (
        <div
          key={`${item.id}-${idx}`}
          className="w-full border border-neutral-100 p-3 min-w-[120px] h-auto max-w-[270px] flex flex-col"
        >
          <div className="relative min-w-[120px] w-full max-w-[270px] max-h-[350px]">
            <Image
              width={270}
              height={350}
              src={`${item.img}`}
              alt={item.name || `${house} - ${item.year}`}
              className="object-cover w-full max-w-[270px] h-auto max-h-[350px]"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center text-sm pt-2">
              <span>{house}</span>
              <span>{item.year}</span>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-start text-sm">
              <span className="font-semibold italic">
                {item.name || `${item.gender} - ${item.year}`}
              </span>
              <span>
                {item.season === "Fall/Winter"
                  ? "F/W"
                  : item.season === "Spring/Summer"
                  ? "S/S"
                  : item.season || "-"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
