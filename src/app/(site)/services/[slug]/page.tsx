import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug } from "@/data/services";
import ServiceIcon from "@/components/ui/ServiceIcon";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/sections/CtaBanner";
import Button from "@/components/ui/Button";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="bg-horizon-gradient pt-20 pb-24">
        <div className="container-page">
          <nav className="text-xs font-mono text-ink/60 mb-6">
            <Link href="/services" className="hover:text-harbor transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-harbor">{service.name}</span>
          </nav>
          <span className="w-12 h-12 flex items-center justify-center rounded-full bg-signal text-white mb-5">
            <ServiceIcon name={service.icon} className="w-6 h-6" />
          </span>
          <h1 className="font-display italic text-harbor text-4xl md:text-5xl max-w-2xl leading-tight">
            {service.name}
          </h1>
          <p className="mt-4 text-ink/70 max-w-xl text-lg">{service.heroLine}</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid lg:grid-cols-3 gap-14">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Overview" title="How this service works" />
            <p className="text-ink/70 leading-relaxed">{service.overview}</p>

            <h3 className="mt-10 font-display text-2xl text-harbor">What's included</h3>
            <ul className="mt-4 space-y-3">
              {service.capabilities.map((c) => (
                <li key={c} className="flex gap-3 text-ink/70">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-signal shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-manifest rounded-sm p-7 h-fit">
            <h3 className="font-display text-xl text-harbor mb-5">Process</h3>
            <ol className="space-y-5">
              {service.process.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="font-mono text-xs text-signal border border-signal/40 rounded-sm px-2 py-1 h-fit">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-medium text-harbor text-sm">{step.title}</p>
                    <p className="text-xs text-ink/60 mt-1 leading-relaxed">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Button href="/contact-us" className="w-full justify-center mt-7">
              Request This Service
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad bg-manifest">
        <div className="container-page">
          <SectionHeading eyebrow="Also Relevant" title="Related services" />
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className="group bg-white border border-sail-light rounded-sm p-6 hover:border-route hover:shadow-lg transition-all"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-harbor text-white group-hover:bg-signal transition-colors">
                  <ServiceIcon name={r.icon} className="w-5 h-5" />
                </span>
                <h4 className="mt-4 font-display text-lg text-harbor">{r.name}</h4>
                <p className="mt-1.5 text-sm text-ink/60 leading-relaxed">{r.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
