import type { Metadata } from "next";
import FaqAccordion from "@/components/sections/FaqAccordion";
import { faqs } from "@/data/faq";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Alhanif Group's freight, customs, sourcing, and warehousing services.",
};

export default function FaqPage() {
  return (
    <>
      <section className="bg-horizon-gradient pt-20 pb-24">
        <div className="container-page">
          <span className="manifest-eyebrow border-signal/50 text-signal">Help & Support</span>
          <h1 className="mt-5 font-display italic text-harbor text-4xl md:text-5xl max-w-2xl leading-tight">
            Frequently asked questions
          </h1>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
