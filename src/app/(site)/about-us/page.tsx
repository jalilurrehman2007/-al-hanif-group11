import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Legacy from "@/components/sections/Legacy";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CtaBanner from "@/components/sections/CtaBanner";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Alhanif Group is a privately owned clearing, forwarding, and logistics company based in Karachi, Pakistan, carrying a family legacy that spans four generations.",
};

const values = [
  { title: "Relationship Selling", detail: "We pursue long-term partnerships, not one-off transactions — the same clients, shipment after shipment." },
  { title: "Safety First", detail: "A safety-first policy across every truck, driver, and route, chosen specifically for local road conditions." },
  { title: "Built on Technology", detail: "Cargo and vehicle tracking systems built into daily operations, not bolted on as an afterthought." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-horizon-gradient pt-20 pb-24">
        <div className="container-page">
          <span className="manifest-eyebrow border-signal/50 text-signal">About {site.name}</span>
          <h1 className="mt-5 font-display italic text-harbor text-4xl md:text-5xl max-w-2xl leading-tight">
            A family trade, four generations in the making
          </h1>
          <p className="mt-5 text-ink/70 max-w-xl leading-relaxed">
            Alhanif Group is a privately owned clearing, forwarding, and
            logistics company headquartered in Karachi, Pakistan — built on
            a family legacy that goes back more than fifty years.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="A one-stop shop, run by people who know the trade"
            />
            <p className="text-ink/70 leading-relaxed">
              We provide clearing and forwarding, logistics, transportation,
              and commission agent services to mid- and large-scale clients
              — customs clearance for local and transit cargo, delivery
              within Karachi, import and export documentation, cargo
              consolidation, and booking and shipping to and from the local
              port.
            </p>
            <p className="mt-4 text-ink/70 leading-relaxed">
              Our team of highly qualified, dedicated staff brings a
              combined experience of over fifty years in the industry. We
              offer free consulting on customs processes and procedures to
              every client, guided by the same value principles that have
              carried this family's name for four generations.
            </p>
          </div>

          <div className="space-y-6">
            {values.map((v) => (
              <div key={v.title} className="border-l-2 border-signal pl-5 py-1">
                <h3 className="font-display text-xl text-harbor">{v.title}</h3>
                <p className="mt-1.5 text-sm text-ink/60 leading-relaxed">{v.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-manifest">
        <div className="container-page grid md:grid-cols-2 gap-10">
          <div className="bg-white border border-sail-light rounded-sm p-8">
            <span className="manifest-eyebrow">Our Mission</span>
            <p className="mt-4 text-ink/70 leading-relaxed">
              To add value to our clients by providing end-to-end freight
              forwarding, transportation, and logistics solutions — built on
              the belief that our success depends entirely on theirs, backed
              by genuine teamwork and a lasting, positive client experience.
            </p>
          </div>
          <div className="bg-white border border-sail-light rounded-sm p-8">
            <span className="manifest-eyebrow">Our Vision</span>
            <p className="mt-4 text-ink/70 leading-relaxed">
              To become the most reliable and cost-efficient name in freight
              forwarding, transportation, and logistics — operating with
              professionalism, speed, and quality at the center of
              everything we do.
            </p>
          </div>
        </div>
      </section>

      <Legacy />
      <ProcessTimeline />
      <WhyChooseUs />
      <CtaBanner />
    </>
  );
}
