import Hero from "@/components/sections/Hero";
import ServiceCategories from "@/components/sections/ServiceCategories";
import AboutBlock from "@/components/sections/AboutBlock";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import BlogPreview from "@/components/sections/BlogPreview";
import FaqPreview from "@/components/sections/FaqPreview";
import CtaBanner from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceCategories />
      <AboutBlock />
      <ServicesGrid limit={6} showViewAll />
      <ProcessTimeline />
      <WhyChooseUs />
      <BlogPreview />
      <FaqPreview />
      <CtaBanner />
    </>
  );
}
