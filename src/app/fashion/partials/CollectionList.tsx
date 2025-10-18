"use client";
import Image from "next/image";

interface Collection {
  id: number;
  name: string | null;
  season: string;
  year: number;
  gender: string;
  cover: string;
  images: string[];
}

interface CollectionsListProps {
  collections: Collection[];
  house: string;
  shortName: string;
}

export default function CollectionsList({
  collections,
  house,
  shortName,
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
        <h2 className="py-3 text-md uppercase text-secondary-500">
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
          className="w-full border border-neutral-100  p-3 min-w-[120px] max-w-[270px] h-fit flex flex-col"
        >
          <div className="w-full h-[200px] sm:h-[350px] relative">
            <Image
              src={item.img}
              alt={item.name || `${house} - ${item.year}`}
              fill
              style={{ objectFit: "cover" }}
              priority
               sizes="(max-width: 270px) 100vw, (max-width: 270px) 50vw, 33vw"
            />
          </div>

          <div className="flex flex-col gap-1 mt-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold italic block max-w-[150px] truncate">
                {shortName || house}
              </span>
              <span>{item.year}</span>
            </div>

            <div className="flex flex-row justify-between md:items-start text-sm">
              <span className="font-semibold italic truncate block max-w-[100px] sm:max-w-none">
                {item.name || item.gender}
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
