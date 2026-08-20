import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FaqAccordion from "@/components/sections/FaqAccordion";
import { faqs } from "@/data/faq";

export default function FaqPreview() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page grid lg:grid-cols-3 gap-14">
        <div>
          <SectionHeading
            eyebrow="Help & Support"
            title="Frequently asked questions"
            description="Clear answers on how shipments, sourcing, and clearance work with us."
          />
          <Button href="/faq" variant="dark">View All FAQs</Button>
        </div>
        <div className="lg:col-span-2">
          <FaqAccordion items={faqs.slice(0, 4)} />
        </div>
      </div>
    </section>
  );
}
