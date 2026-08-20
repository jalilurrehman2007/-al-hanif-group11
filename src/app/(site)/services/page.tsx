import type { Metadata } from "next";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CtaBanner from "@/components/sections/CtaBanner";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Air, sea, and land freight, customs clearance, sourcing agent services, warehousing, transloading, and more — all under one logistics partner.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-horizon-gradient pt-20 pb-24">
        <div className="container-page">
          <span className="manifest-eyebrow border-signal/50 text-signal">Our Services</span>
          <h1 className="mt-5 font-display italic text-harbor text-4xl md:text-5xl max-w-2xl leading-tight">
            Every stage of a shipment, handled in-house
          </h1>
          <p className="mt-5 text-ink/70 max-w-xl leading-relaxed">
            {site.name} connects sourcing, transport, documentation, and
            delivery into a single coordinated process.
          </p>
        </div>
      </section>

      <ServicesGrid />
      <CtaBanner />
    </>
  );
}
