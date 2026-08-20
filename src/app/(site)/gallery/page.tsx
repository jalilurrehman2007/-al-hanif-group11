import type { Metadata } from "next";
import Image from "next/image";
import galleryTiles from "@/data/gallery.json";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A look at Alhanif Group's fleet, warehousing, and operations.",
};

type Tile = { label: string; image?: string };
const tiles = galleryTiles as Tile[];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-horizon-gradient pt-20 pb-24">
        <div className="container-page">
          <span className="manifest-eyebrow border-signal/50 text-signal">Gallery</span>
          <h1 className="mt-5 font-display italic text-harbor text-4xl md:text-5xl max-w-2xl leading-tight">
            Our operations, in the field
          </h1>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((tile, i) => (
            <div
              key={tile.label}
              className="card-interactive aspect-[4/3] rounded-sm bg-harbor flex items-end p-5 relative overflow-hidden group"
            >
              {tile.image ? (
                <Image src={tile.image} alt={tile.label} fill className="object-cover" />
              ) : (
                <div
                  className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity"
                  style={{
                    background: `radial-gradient(circle at ${30 + i * 10}% ${40 + i * 5}%, #C97A3D, transparent 60%)`,
                  }}
                />
              )}
              <p className="relative text-white font-display text-lg drop-shadow">{tile.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
