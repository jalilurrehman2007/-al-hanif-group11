import RouteLine from "@/components/ui/RouteLine";
import QuoteForm from "@/components/forms/QuoteForm";
import { site } from "@/data/site";

export default function CtaBanner() {
  return (
    <section className="relative bg-horizon-gradient overflow-hidden">
      <div className="container-page section-pad grid lg:grid-cols-2 gap-14 items-center relative z-10">
        <div>
          <span className="manifest-eyebrow border-signal/50 text-signal">Get In Touch</span>
          <h2 className="mt-4 font-display italic text-harbor text-3xl md:text-4xl leading-tight">
            Logistics, sourced and shipped, without the hand-offs.
          </h2>
          <p className="mt-4 text-ink/70 max-w-md">
            Tell us what needs to move and where. We'll get back to you with
            a route and a quote.
          </p>
          <div className="mt-8 font-mono text-sm text-ink/70 space-y-1">
            <p>Call us: <a href={site.contact.phoneHref} className="text-harbor hover:text-signal transition-colors">{site.contact.phoneDisplay}</a></p>
            <p>
              Email us:{" "}
              {site.contact.emails.map((email, i) => (
                <span key={email}>
                  <a href={`mailto:${email}`} className="text-harbor hover:text-signal transition-colors">
                    {email}
                  </a>
                  {i < site.contact.emails.length - 1 && ", "}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="bg-white border border-sail-light rounded-sm p-7 md:p-9 shadow-lg">
          <QuoteForm />
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-16 opacity-60">
        <RouteLine className="w-full h-full" />
      </div>
    </section>
  );
}