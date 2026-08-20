import Image from "next/image";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import siteImages from "@/data/site-images.json";

const highlights = [
  { title: "Air Freight", detail: "Priority handling for time-critical shipments." },
  { title: "Sea Freight", detail: "Dependable container shipping to global markets." },
  { title: "Sourcing Agents", detail: "Supplier vetting before cargo ever ships." },
  { title: "Customs Clearance", detail: "Documentation checked before it becomes a delay." },
];

export default function AboutBlock() {
  const images = siteImages as Record<string, string>;
  const photo = images["home-who-we-are"];

  return (
    <section className="section-pad bg-manifest">
      <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="aspect-[4/3] rounded-sm bg-horizon-gradient flex items-center justify-center overflow-hidden">
            {photo ? (
              <Image src={photo} alt={`${site.name} team`} fill className="object-cover" />
            ) : (
              <svg viewBox="0 0 400 300" className="w-full h-full opacity-80" aria-hidden="true">
                <rect width="400" height="300" fill="#0B2F52" />
                <path d="M0 200 L400 170" stroke="#1B5AA0" strokeWidth="60" />
                <path d="M0 230 L400 205" stroke="#123E68" strokeWidth="40" />
                <circle cx="330" cy="90" r="26" fill="#C97A3D" opacity="0.85" />
              </svg>
            )}
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-sm px-6 py-4 hidden sm:block">
            <p className="font-display text-3xl text-harbor">{site.foundedYear}</p>
            <p className="font-mono text-xs uppercase tracking-wider text-ink/60">Family Legacy Since</p>
          </div>
        </div>

        <div>
          <span className="manifest-eyebrow">Who We Are</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-display text-harbor leading-tight">
            A family-run clearing &amp; forwarding company, four generations strong
          </h2>
          <p className="mt-5 text-ink/70 leading-relaxed">
            {site.name} is a privately owned company providing top-notch
            clearing and forwarding, logistics, and transportation
            solutions from Karachi, Pakistan — powered by a team with over
            fifty years of combined industry experience, and a family
            legacy that goes back even further.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="border-l-2 border-signal pl-4">
                <p className="font-display text-lg text-harbor">{h.title}</p>
                <p className="text-sm text-ink/60 mt-1">{h.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button href="/about-us" variant="dark">More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
