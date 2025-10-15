import React from "react";
import { Button } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";

interface TagsProps {
  dataMap: Record<string, any>;
}

export default function Tags({ dataMap }: TagsProps) {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop();
  const router = useRouter();

  return (
    <div className="md:hidden sticky top-0 py-3 bg-white z-30">
      <div className="flex gap-2 overflow-x-auto flex-nowrap scrollbar-none no-scrollbar">
        {dataMap.map((item: { slug: React.Key | null | undefined; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: any) => {
          const isActive = item.slug === currentSlug;

          return (
            <Button
              key={item.slug}
              size="sm"
              onPress={() => router.push(`/fashion/collection/${item.slug}`)}
              className={`
        flex-shrink-0
        ${
          isActive
            ? "bg-black text-white"
            : "border-2 border-black text-black bg-transparent"
        }
      `}
            >
              {item.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
