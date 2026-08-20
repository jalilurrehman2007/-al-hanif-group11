import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Client Feedback"
          title="What partners say about working with us"
          align="center"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="border border-sail-light rounded-sm p-8 bg-manifest/40"
            >
              <blockquote className="text-ink/80 leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-display text-lg text-harbor">{t.name}</p>
                <p className="text-xs font-mono uppercase tracking-wider text-ink/50 mt-1">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
