import Link from "next/link";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { services } from "@/data/services";

const featured = ["air-freight", "sea-freight", "land-transportation", "customs-clearance"];

export default function ServiceCategories() {
  const matched = services.filter((s) => featured.includes(s.slug));
  const items = matched.length > 0 ? matched : services.slice(0, 4);

  return (
    <section className="bg-white border-b border-sail-light">
      <div className="container-page">
        <div className="grid grid-cols-2 md:grid-cols-4 -mx-5 sm:-mx-8 lg:-mx-12">
          {items.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={`group flex flex-col items-center text-center gap-3 px-6 py-10 border-sail-light transition-colors hover:bg-manifest ${
                i !== items.length - 1 ? "md:border-r" : ""
              } ${i % 2 === 0 ? "border-r md:border-r-0" : ""} border-b md:border-b-0`}
            >
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-manifest text-route group-hover:bg-route group-hover:text-white transition-colors">
                <ServiceIcon name={s.icon} className="w-6 h-6" />
              </span>
              <span className="font-medium text-sm text-harbor">{s.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
