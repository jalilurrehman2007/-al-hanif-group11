import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  { n: "01", title: "Source & Confirm", detail: "We identify suppliers or confirm your cargo details and destination requirements." },
  { n: "02", title: "Document & Book", detail: "Documentation is prepared and space booked across the right transport mode." },
  { n: "03", title: "Clear & Transit", detail: "Customs formalities are handled while cargo moves along its route." },
  { n: "04", title: "Deliver & Confirm", detail: "Cargo reaches its destination with proof of delivery returned to you." },
];

export default function ProcessTimeline() {
  return (
    <section className="section-pad bg-manifest">
      <div className="container-page">
        <SectionHeading
          eyebrow="How It Works"
          title="A shipment's route, in four stages"
          description="The same sequence applies whether cargo moves by air, sea, or road."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.n} className="relative pl-2">
              <span className="font-mono text-xs text-signal border border-signal/40 rounded-sm px-2 py-1">
                {s.n}
              </span>
              <h3 className="mt-4 font-display text-xl text-harbor">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">{s.detail}</p>
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute top-3 -right-4 w-8 h-px bg-sail" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
