import Image from "next/image";
import ServiceIcon from "@/components/ui/ServiceIcon";

const categoryIcon: Record<string, string> = {
  "Sea Freight": "ship",
  "Air Freight": "plane",
  "Land Transportation": "truck",
  Customs: "stamp",
  Sourcing: "search",
  Warehousing: "warehouse",
  Documentation: "file",
  Transloading: "transfer",
};

const gradients = [
  "linear-gradient(135deg, #4A94D6 0%, #1B5590 100%)",
  "linear-gradient(135deg, #3FA0F0 0%, #2872BE 100%)",
  "linear-gradient(135deg, #2872BE 0%, #C97A3D 130%)",
];

function pick<T>(list: T[], key: string): T {
  let hash = 0;
  for (let i = 0; i < key.length; i++) hash = key.charCodeAt(i) + ((hash << 5) - hash);
  return list[Math.abs(hash) % list.length];
}

export default function BlogCoverArt({
  category,
  slug,
  image,
  alt,
}: {
  category: string;
  slug: string;
  image?: string;
  alt?: string;
}) {
  if (image) {
    return (
      <div className="aspect-[16/10] relative overflow-hidden">
        <Image src={image} alt={alt || category} fill className="object-cover" />
      </div>
    );
  }

  const icon = categoryIcon[category] ?? "box";
  const background = pick(gradients, slug);

  return (
    <div
      className="aspect-[16/10] relative overflow-hidden flex items-center justify-center"
      style={{ backgroundImage: background }}
    >
      <ServiceIcon name={icon} className="w-20 h-20 text-white/25" />
    </div>
  );
}
