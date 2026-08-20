import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceIcon from "@/components/ui/ServiceIcon";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

export default function ServicesGrid({
  limit,
  showViewAll = false,
}: {
  limit?: number;
  showViewAll?: boolean;
}) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="What We Do"
          title="Solutions built for every stage of the shipment"
          description="From finding the right supplier to clearing the last customs point, each service connects directly into the next."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group border border-sail-light rounded-sm p-7 hover:border-route hover:shadow-lg transition-all duration-200 bg-manifest/40 hover:bg-white"
            >
              <span className="w-11 h-11 flex items-center justify-center rounded-full bg-harbor text-white group-hover:bg-signal transition-colors">
                <ServiceIcon name={s.icon} className="w-5 h-5" />
              </span>
              <h3 className="mt-5 font-display text-xl text-harbor">{s.name}</h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                {s.shortDescription}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-signal">
                Read More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {showViewAll && (
          <div className="mt-12 text-center">
            <Button href="/services" variant="dark">View All Services</Button>
          </div>
        )}
      </div>
    </section>
  );
}
