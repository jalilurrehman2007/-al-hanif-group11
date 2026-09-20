import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import QuoteForm from "@/components/forms/QuoteForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Alhanif Group for a freight, customs clearance, sourcing, or warehousing quote.",
};

const details = [
  { label: "Phone", value: site.contact.phoneDisplay, href: site.contact.phoneHref },
  { label: "Address", value: site.contact.addressLine, href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-horizon-gradient pt-20 pb-24">
        <div className="container-page">
          <span className="manifest-eyebrow border-signal/50 text-signal">Contact Us</span>
          <h1 className="mt-5 font-display italic text-harbor text-4xl md:text-5xl max-w-2xl leading-tight">
            Tell us what needs to move
          </h1>
          <p className="mt-5 text-ink/70 max-w-xl leading-relaxed">
            Share your shipment or sourcing requirement and our team will
            respond with a route and a quote.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid lg:grid-cols-5 gap-14">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Get In Touch" title="Reach our team directly" />
            <ul className="space-y-6">
              {details.map((d) => (
                <li key={d.label}>
                  <p className="text-xs font-mono uppercase tracking-wider text-signal">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} className="mt-1 block text-lg text-harbor hover:text-route transition-colors">
                      {d.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-lg text-harbor">{d.value}</p>
                  )}
                </li>
              ))}
              <li>
              <p className="text-xs font-mono uppercase tracking-wider text-signal">Email</p>
              {site.contact.emails.map((email) => (
              <li key={email}>
              <a href={`mailto:${email}`} className="hover:text-signal transition-colors">
              {email}
             </a>
            </li>
            ))}
              
            </li>
            </ul>
          </div>

          <div className="lg:col-span-3 bg-manifest rounded-sm p-8 md:p-10">
            <h3 className="font-display text-2xl text-harbor mb-6">Request a Quote</h3>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
