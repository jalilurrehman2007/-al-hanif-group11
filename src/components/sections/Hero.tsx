import Button from "@/components/ui/Button";
import RouteLine from "@/components/ui/RouteLine";

export default function Hero() {
  return (
    <section className="relative bg-horizon-gradient overflow-hidden">
      <div className="container-page relative z-10 pt-20 pb-28 md:pt-28 md:pb-36">
        <span className="manifest-eyebrow border-signal/50 text-signal">
          Clearing, Forwarding &amp; Logistics — Karachi, Pakistan
        </span>

        <h1 className="mt-6 max-w-3xl font-display italic text-harbor text-4xl sm:text-5xl md:text-6xl leading-[1.08] animate-fade-up">
          Four generations of cargo moved right, from Karachi to the world.
        </h1>

        <p className="mt-6 max-w-xl text-ink/70 text-base md:text-lg leading-relaxed">
          Customs clearance, freight, transportation, and documentation —
          coordinated by one family-run team with over fifty years of
          combined experience.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact-us" variant="primary">Request a Quote</Button>
          <Button href="/services" variant="outline">Explore Services</Button>
        </div>
      </div>

      {/* Signature trade-route line along the horizon */}
      <div className="absolute left-0 right-0 bottom-0 h-20 opacity-80">
        <RouteLine className="w-full h-full" />
      </div>
    </section>
  );
}
