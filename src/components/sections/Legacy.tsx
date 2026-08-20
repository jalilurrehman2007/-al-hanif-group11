import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import siteImages from "@/data/site-images.json";

const images = siteImages as Record<string, string>;

const services2000 = [
  "Freight Forwarding",
  "Sea Freight",
  "Air Freight",
  "Customs & Clearance Coordination",
  "Import & Export Services",
  "Trade Documentation",
  "Banking & Trade Documentation Support",
  "Warehousing & Cargo Handling",
  "Project & Specialized Cargo",
  "Domestic & International Logistics",
];

const timeline = [
  { year: "1970", label: "The Beginning" },
  { year: "1974", label: "The Legacy Continues" },
  { year: "2000", label: "Expansion & Transformation" },
  { year: "Today", label: "Building the Next Chapter" },
];

function StoryPhoto({ imgKey, name }: { imgKey: string; name: string }) {
  const src = images[imgKey];
  if (src) {
    return (
      <div className="w-full aspect-[4/5] relative overflow-hidden rounded-sm bg-manifest shadow-md">
        <Image src={src} alt={name} fill className="object-cover" />
      </div>
    );
  }
  return (
    <div className="w-full aspect-[4/5] rounded-sm bg-manifest border border-dashed border-sail flex flex-col items-center justify-center gap-2 text-ink/35">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.5-6 8-6s8 2 8 6" />
      </svg>
      <span className="text-[10px] font-mono uppercase tracking-wider">Photo coming soon</span>
    </div>
  );
}

export default function Legacy() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">

        <SectionHeading
          eyebrow="Our Legacy"
          title="A Family Legacy Since 1970"
          description="Our story began in 1970, when our great-grandfather started the family business with a simple vision — to build a trusted name through hard work, strong relationships, and consistent service."
        />

        {/* ─── 1970 ─── */}
        <div className="grid lg:grid-cols-5 gap-10 items-center mt-4">
          <div className="lg:col-span-2">
            <StoryPhoto imgKey="legacy-grandfather" name="M/S Abdul Rehman Haji Kasam" />
          </div>
          <div className="lg:col-span-3">
            <span className="manifest-eyebrow">1970 — The Beginning</span>
            <h3 className="mt-3 font-display text-2xl md:text-3xl text-harbor">
              M/S Abdul Rehman Haji Kasam
            </h3>
            <p className="mt-4 text-ink/70 leading-relaxed">
              In the early years, the business focused strongly on marketing,
              business development, and building relationships with customers
              and trading partners. His efforts created the foundation on
              which the next generation would continue to build.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-14">
          <div className="flex-1 h-px bg-sail-light" />
          <span className="w-2.5 h-2.5 rounded-full bg-signal shrink-0" />
          <div className="flex-1 h-px bg-sail-light" />
        </div>

        {/* ─── 1974 ─── */}
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 lg:order-1 order-2">
            <span className="manifest-eyebrow">1974 — The Legacy Continues</span>
            <h3 className="mt-3 font-display text-2xl md:text-3xl text-harbor">
              Mohammad Hanif
            </h3>
            <p className="mt-4 text-ink/70 leading-relaxed">
              In 1974, his son, Mohammad Hanif, took the business forward. He
              continued the work with the same dedication while putting
              greater emphasis on advertising, marketing, customer
              relationships, and expanding the company's presence in the
              market.
            </p>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Through years of consistent effort, the business grew from its
              original foundations and developed a stronger position within
              the trading community.
            </p>
          </div>
          <div className="lg:col-span-2 lg:order-2 order-1">
            <StoryPhoto imgKey="legacy-father" name="Mohammad Hanif" />
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-14">
          <div className="flex-1 h-px bg-sail-light" />
          <span className="w-2.5 h-2.5 rounded-full bg-signal shrink-0" />
          <div className="flex-1 h-px bg-sail-light" />
        </div>

        {/* ─── 2000 ─── */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2">
            <StoryPhoto imgKey="legacy-owner" name="Khalil-ur-Rehman" />
          </div>
          <div className="lg:col-span-3">
            <span className="manifest-eyebrow">2000 — A New Generation, A New Direction</span>
            <h3 className="mt-3 font-display text-2xl md:text-3xl text-harbor">
              Khalil-ur-Rehman
            </h3>
            <p className="mt-4 text-ink/70 leading-relaxed">
              In 2000, the next chapter began when Khalil-ur-Rehman took the
              business forward. With a vision to expand beyond the traditional
              model, he introduced new services and business operations,
              gradually transforming the company into a more comprehensive
              logistics and trade services provider.
            </p>
            <p className="mt-3 text-ink/70 leading-relaxed">
              The company also expanded internationally by establishing
              operations in Dubai, strengthening its ability to support
              customers and business partners across different markets. Under
              his leadership, the business expanded into:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {services2000.map((s) => (
                <span
                  key={s}
                  className="text-xs font-mono px-3 py-1.5 rounded-sm bg-manifest border border-sail-light text-harbor"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Growing / Today ─── */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-manifest border border-sail-light rounded-sm p-8">
            <h3 className="font-display text-xl text-harbor mb-3">
              Growing With the Changing World
            </h3>
            <p className="text-ink/70 leading-relaxed text-sm">
              As international trade and logistics continued to evolve, so did
              our business. New services, stronger international connections,
              and modern logistics solutions were added to meet the changing
              requirements of our customers. What started as a family business
              in 1970 gradually developed into a broader logistics and trade
              services organization — while keeping the same values that
              shaped its beginnings.
            </p>
          </div>
          <div className="bg-manifest border border-sail-light rounded-sm p-8">
            <h3 className="font-display text-xl text-harbor mb-3">
              Our Legacy Today
            </h3>
            <p className="text-ink/70 leading-relaxed text-sm">
              More than five decades later, the foundation built by the first
              generation continues to guide us. From marketing and trading
              relationships in 1970, to business expansion in 1974, and then
              to logistics, freight forwarding, international operations, and
              diversified services from 2000 onward — every generation has
              added something to the journey. Today, we carry that history
              forward with the same commitment to trust, relationships,
              reliability, and continuous growth.
            </p>
          </div>
        </div>

        {/* ─── Timeline strip ─── */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-sail-light">
          <div className="hidden md:block absolute top-0 left-[12.5%] right-[12.5%] h-px bg-sail-light" />
          {timeline.map((t) => (
            <div key={t.year} className="text-center">
              <div className="hidden md:flex justify-center mb-4">
                <span className="w-3 h-3 rounded-full bg-signal ring-4 ring-white relative z-10" />
              </div>
              <p className="font-display text-2xl text-harbor">{t.year}</p>
              <p className="text-xs font-mono uppercase tracking-wider text-ink/50 mt-1">{t.label}</p>
            </div>
          ))}
        </div>

        {/* ─── Closing tagline ─── */}
        <div className="mt-16 text-center border-t border-sail-light pt-12">
          <p className="font-display italic text-2xl md:text-3xl text-harbor max-w-2xl mx-auto leading-snug">
            Three Generations. More Than Five Decades. One Continuing Legacy.
          </p>
        </div>

        {/* ─── Owner quote ─── */}
        <div className="mt-14 bg-manifest border border-sail-light rounded-sm p-8 md:p-10 max-w-3xl mx-auto relative">
          <span className="font-display text-6xl text-signal/20 absolute -top-6 left-8 select-none">"</span>
          <span className="manifest-eyebrow relative">A Word From Khalil-ur-Rehman</span>
          <p className="mt-4 text-ink/75 leading-relaxed italic relative">
            This industry never stops changing, and neither have we. Every
            generation of this family has had to learn it fresh — new routes,
            new rules, new technology — while holding onto the one thing that
            hasn't changed: doing right by the people who trust us with their
            cargo. That's the standard I was raised on, and it's the one I've
            tried to pass on at Khalil Hanif Impex.
          </p>
          <p className="mt-4 font-display text-harbor">Khalil-ur-Rehman</p>
          <p className="text-xs font-mono uppercase tracking-wider text-ink/50">
            Founder &amp; Owner, Khalil Hanif Impex
          </p>
        </div>

      </div>
    </section>
  );
}
