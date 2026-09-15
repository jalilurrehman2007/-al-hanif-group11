import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section-pad bg-white pt-32">
      <div className="container-page max-w-3xl">
        <h1 className="font-display text-4xl text-harbor mb-6">Privacy Policy</h1>
        <div className="space-y-6 text-ink/70 leading-relaxed">
          <p>
            {site.legalName} ("we", "us") collects information you provide
            directly to us, such as when you request a quote, contact our
            team, or use our services, including your name, email address,
            phone number, and shipment details.
          </p>
          <h2 className="font-display text-2xl text-harbor mt-8">How We Use Information</h2>
          <p>
            We use the information you provide to respond to enquiries,
            prepare quotes, coordinate shipments, and improve our services.
            We do not sell personal information to third parties.
          </p>
          <h2 className="font-display text-2xl text-harbor mt-8">Contact</h2>
          <p>
            Questions about this policy can be directed to{" "}
            <a href={`mailto:${site.contact.email}`} className="text-route">
              {site.contact.email}
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
