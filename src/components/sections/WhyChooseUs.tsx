import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    stat: "24/7",
    title: "Shipment Visibility",
    detail: "Milestone tracking shared as cargo clears each leg of the route.",
  },
  {
    stat: "12",
    title: "Services, One Team",
    detail: "Sourcing, freight, customs, and delivery under a single point of contact.",
  },
  {
    stat: "50+",
    title: "Years, Combined Experience",
    detail: "A team whose expertise adds up to over fifty years in the industry.",
  },
  {
    stat: "1:1",
    title: "Dedicated Coordination",
    detail: "A named contact manages your shipment from booking to delivery.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-manifest relative overflow-hidden">
      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built on coordination, not hand-offs"
          description="Every stage of a shipment is planned to connect directly into the next, with one team accountable for the outcome."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="card-interactive bg-white border border-sail-light rounded-sm p-8 hover:border-signal/40"
            >
              <p className="font-mono text-3xl text-signal">{r.stat}</p>
              <p className="mt-3 font-display text-xl text-harbor">{r.title}</p>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">{r.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
